import { Router, Request, Response } from "express";
import { connection } from "../db/connection";
import { authenticateToken } from "../services/authentication";
import { checkNGO } from "../services/checkRole";
import { validateDonationInput } from "../services/validators";

const router: Router = Router();

// Create Donation (NGO only)
router.post("/", authenticateToken, checkNGO, validateDonationInput, (req: any, res: Response) => {
  // CSRF Protection - Check for custom header
  if (!req.headers['x-requested-with'] || req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    return res.status(403).json({ message: "Forbidden - Invalid request" });
  }
  
  const { donation_type, quantity_or_amount, location, pickup_date_time, images, priority = "Normal" } = req.body;

  const query = `INSERT INTO donations (ngo_id, donation_type, quantity_or_amount, location, pickup_date_time, images, priority) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
  connection.query(query, [req.user.id, donation_type, quantity_or_amount, location, pickup_date_time, images || null, priority], (err) => {
    if (err) {
      console.error('Database error creating donation:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to create donation request" });
    }
    return res.status(200).json({ message: "Donation request created successfully." });
  });
});

// List All Donations
router.get("/", authenticateToken, (_req: Request, res: Response) => {
  const query = `SELECT d.*, u.name AS ngo_name FROM donations d JOIN users u ON d.ngo_id = u.id ORDER BY d.created_at DESC`;
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Database error fetching donations:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to fetch donations" });
    }
    return res.status(200).json(results);
  });
});

// Get NGO's Own Donations
router.get("/mine", authenticateToken, checkNGO, (req: any, res: Response) => {
  const query = `SELECT d.*, u.name AS ngo_name FROM donations d JOIN users u ON d.ngo_id = u.id WHERE d.ngo_id = ? ORDER BY d.created_at DESC`;
  
  connection.query(query, [req.user.id], (err, results) => {
    if (err) {
      console.error('Database error fetching NGO donations:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to fetch your donations" });
    }
    return res.status(200).json(results);
  });
});

// Get Single Donation
router.get("/:id", authenticateToken, (req: Request, res: Response) => {
  const query = `SELECT d.*, u.name AS ngo_name FROM donations d JOIN users u ON d.ngo_id = u.id WHERE d.id = ?`;
  
  connection.query(query, [req.params.id], (err, results: any[]) => {
    if (err) {
      console.error('Database error fetching donation:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to fetch donation details" });
    }
    if (!results.length) {
      return res.status(404).json({ message: "Donation not found" });
    }
    return res.status(200).json(results[0]);
  });
});

// Update Donation (NGO only)
router.put("/:id", authenticateToken, checkNGO, validateDonationInput, (req: any, res: Response) => {
  // CSRF Protection - Check for custom header
  if (!req.headers['x-requested-with'] || req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    return res.status(403).json({ message: "Forbidden - Invalid request" });
  }
  
  const { donation_type, quantity_or_amount, location, pickup_date_time, images, priority = "Normal", status = "Pending" } = req.body;
  
  const query = `UPDATE donations SET donation_type = ?, quantity_or_amount = ?, location = ?, pickup_date_time = ?, images = ?, priority = ?, status = ? WHERE id = ? AND ngo_id = ?`;
  
  connection.query(query, [donation_type, quantity_or_amount, location, pickup_date_time, images || null, priority, status, req.params.id, req.user.id], (err, results: any) => {
    if (err) {
      console.error('Database error updating donation:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to update donation" });
    }
    if (!results.affectedRows) {
      return res.status(404).json({ message: "Donation not found or not owned by this NGO" });
    }
    return res.status(200).json({ message: "Donation updated successfully." });
  });
});

// Cancel Donation (NGO only)
router.patch("/:id/cancel", authenticateToken, checkNGO, (req: any, res: Response) => {
  const query = `UPDATE donations SET status = 'Cancelled' WHERE id = ? AND ngo_id = ?`;
  
  connection.query(query, [req.params.id, req.user.id], (err, results: any) => {
    if (err) {
      console.error('Database error cancelling donation:', err.code || 'Unknown error');
      return res.status(500).json({ message: "Failed to cancel donation" });
    }
    if (!results.affectedRows) {
      return res.status(404).json({ message: "Donation not found or not owned by this NGO" });
    }
    return res.status(200).json({ message: "Donation cancelled successfully." });
  });
});

export default router;
