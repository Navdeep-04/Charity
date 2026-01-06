import { Router, Request, Response } from "express";
import { connection } from "../db/connection";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { authenticateToken, RequestWithUser } from "../services/authentication";
import { checkAdmin } from "../services/checkRole";

dotenv.config();

const router: Router = Router();

// Validate environment variables
if (!process.env.EMAIL || !process.env.PASSWORD || !process.env.ACCESS_TOKEN) {
  throw new Error("Missing required environment variables: EMAIL, PASSWORD, ACCESS_TOKEN");
}

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// CSRF protection helper - allow localhost and 127.0.0.1 during development
const validateOrigin = (req: Request, res: Response): boolean => {
  const origin = req.get('Origin') || req.get('Referer');
  if (!origin) {
    // No origin header (e.g., server-side requests) - allow
    return true;
  }

  const allowedLocal = ['localhost', '127.0.0.1', '::1'];
  const isAllowed = allowedLocal.some(a => origin.includes(a));

  if (!isAllowed && process.env.NODE_ENV === 'production') {
    res.status(403).json({ message: 'Forbidden' });
    return false;
  }

  // allow in non-production or when origin matches allowed list
  return true;
};

// Log sanitization helper
const sanitizeForLog = (input: any): string => {
  return String(input).replace(/[\r\n\t]/g, '_');
};

// HTML escape helper
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

// Signup
router.post("/signup", async (req: Request, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { name, email, password, role = 'Donor', contact_info = '' } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required" });
  }

  const validRoles = ["Donor", "NGO", "Admin"];
  const userRole = validRoles.includes(role) ? role : "Donor";

  const checkQuery = "SELECT id FROM users WHERE email = ?";
  connection.query(checkQuery, [email], async (err, results: any[]) => {
    if (err) {
      console.error('Database error checking email:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = `INSERT INTO users (name, email, password, role, contact_info) VALUES (?, ?, ?, ?, ?)`;
      connection.query(insertQuery, [name, email, hashedPassword, userRole, contact_info], (err2, results: any) => {
        if (err2) {
          console.error('Database error creating user:', sanitizeForLog(err2.message));
          return res.status(500).json({ message: "Failed to create user" });
        }
        if (!results || !results.insertId) {
          return res.status(500).json({ message: "User creation failed" });
        }
        return res.status(200).json({ message: "Successfully Registered" });
      });
    } catch (hashError) {
      console.error('Password hashing error:', sanitizeForLog(hashError));
      return res.status(500).json({ message: "Registration failed" });
    }
  });
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const query = `SELECT id, name, email, password, role FROM users WHERE email = ?`;
  connection.query(query, [email], async (err, results: any[]) => {
    if (err) {
      console.error('Database error during login:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Database error" });
    }
    if (!results.length) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    try {
      const isValidPassword = await bcrypt.compare(password, results[0].password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Incorrect email or password" });
      }

      const payload = { id: results[0].id, email: results[0].email, role: results[0].role };
      const token = jwt.sign(payload, process.env.ACCESS_TOKEN as string, { expiresIn: "8h" });

      return res.status(200).json({
        message: "Login successful",
        token,
        role: results[0].role,
        name: results[0].name
      });
    } catch (compareError) {
      console.error('Password comparison error:', sanitizeForLog(compareError));
      return res.status(500).json({ message: "Login failed" });
    }
  });
});

// Forgot Password
router.post("/forgotPassword", (req: Request, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const query = `SELECT email, name FROM users WHERE email = ?`;
  connection.query(query, [email], (err, results: any[]) => {
    if (err) {
      console.error('Database error during password recovery:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Database error" });
    }
    if (!results.length) {
      return res.status(404).json({ message: "No account found with this email" });
    }

    const user = results[0];
    const resetToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN as string, { expiresIn: "1h" });
    const resetLink = `http://localhost:4200/reset-password?token=${resetToken}`;
    
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset - Donation Portal",
      html: `
        <p><b>Hello ${escapeHtml(user.name || 'User')},</b></p>
        <p>You requested a password reset for your account.</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `
    };

    transporter.sendMail(mailOptions, (mailErr, info) => {
      if (mailErr) {
        console.error('Email sending error:', sanitizeForLog(mailErr.message));
        return res.status(500).json({ message: "Failed to send email" });
      }
      if (!info || !info.messageId) {
        console.error('Email sending failed: No message ID returned');
        return res.status(500).json({ message: "Failed to send email" });
      }
      return res.status(200).json({ message: "Password reset link sent to your email" });
    });
  });
});

// Get Users (Admin)
router.get("/get", authenticateToken, checkAdmin, (_req: Request, res: Response) => {
  const query = `SELECT id, name, email, contact_info, role FROM users WHERE role IN ('Donor', 'NGO')`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Database error fetching users:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Failed to fetch users" });
    }
    return res.status(200).json(results);
  });
});

// Update Role (Admin)
router.patch("/update", authenticateToken, checkAdmin, (req: Request, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { id, role } = req.body;

  if (!id || !role) {
    return res.status(400).json({ message: "User ID and role are required" });
  }

  const validRoles = ["Donor", "NGO", "Admin"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  const query = `UPDATE users SET role = ? WHERE id = ?`;
  connection.query(query, [role, id], (err, results: any) => {
    if (err) {
      console.error('Database error updating user role:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Failed to update user" });
    }
    if (!results.affectedRows) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully" });
  });
});

// Token Check
router.get("/checkToken", authenticateToken, (_req, res) => {
  return res.status(200).json({ valid: true });
});

// Change Password
router.post("/changePassword", authenticateToken, async (req: RequestWithUser, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { oldPassword, newPassword } = req.body;
  const email = req.user!.email;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: "Old password and new password are required" });
  }

  const query = `SELECT password FROM users WHERE email = ?`;
  connection.query(query, [email], async (err, results: any[]) => {
    if (err) {
      console.error('Database error during password change:', sanitizeForLog(err.message));
      return res.status(500).json({ message: "Database error" });
    }
    if (!results.length) {
      return res.status(404).json({ message: "User not found" });
    }

    try {
      const isValidPassword = await bcrypt.compare(oldPassword, results[0].password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Current password is incorrect" });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      const updateQuery = `UPDATE users SET password = ? WHERE email = ?`;
      connection.query(updateQuery, [hashedNewPassword, email], (updateErr, updateResults: any) => {
        if (updateErr) {
          console.error('Database error updating password:', sanitizeForLog(updateErr.message));
          return res.status(500).json({ message: "Failed to update password" });
        }
        if (!updateResults.affectedRows) {
          return res.status(500).json({ message: "Password update failed" });
        }
        return res.status(200).json({ message: "Password changed successfully" });
      });
    } catch (compareError) {
      console.error('Password comparison error:', sanitizeForLog(compareError));
      return res.status(500).json({ message: "Password change failed" });
    }
  });
});

// Reset Password
router.post("/resetPassword", async (req: Request, res: Response) => {
  if (!validateOrigin(req, res)) return;
  
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: "Token and new password are required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN as string) as { email: string };
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    const query = `UPDATE users SET password = ? WHERE email = ?`;
    connection.query(query, [hashedPassword, decoded.email], (err, results: any) => {
      if (err) {
        console.error('Database error during password reset:', sanitizeForLog(err.message));
        return res.status(500).json({ message: "Database error" });
      }
      if (!results.affectedRows) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "Password reset successfully" });
    });
  } catch (tokenError) {
    console.error('Token verification error:', sanitizeForLog(tokenError));
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

export { router as userRouter };

export default router;
