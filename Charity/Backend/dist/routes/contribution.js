"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = require("../db/connection");
const authentication_1 = require("../services/authentication");
const checkRole_1 = require("../services/checkRole");
const validators_1 = require("../services/validators");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
// CSRF protection helper with configurable origins
const validateOrigin = (req, res) => {
    const origin = req.get('Origin') || req.get('Referer');
    if (!origin) {
        // allow no-origin requests (e.g., server-to-server or curl)
        return true;
    }
    const allowedFromEnv = process.env.ALLOWED_ORIGINS?.split(',') || [];
    const defaultAllowed = ['localhost', '127.0.0.1', '::1'];
    const isAllowed = allowedFromEnv.some(a => origin.includes(a)) || defaultAllowed.some(a => origin.includes(a));
    if (!isAllowed && process.env.NODE_ENV === 'production') {
        res.status(403).json({ message: 'Forbidden' });
        return false;
    }
    return true;
};
// Log sanitization helper
const sanitizeForLog = (input) => {
    return String(input).replace(/[\r\n\t]/g, '_');
};
// Create Contribution (Donor only)
router.post("/", authentication_1.authenticateToken, checkRole_1.checkDonor, validators_1.validateContributionInput, (req, res) => {
    if (!validateOrigin(req, res))
        return;
    const { donation_id, contribution_quantity, pickup_date_time, notes } = req.body;
    // First validate donation exists and is not cancelled
    // (table uses statuses like 'Pending','Confirmed','Completed','Cancelled')
    const checkDonationQuery = `SELECT id, status FROM donations WHERE id = ? AND status != 'Cancelled'`;
    connection_1.connection.query(checkDonationQuery, [donation_id], (checkErr, donationResults) => {
        if (checkErr) {
            console.error('Database error checking donation:', sanitizeForLog(checkErr.message));
            return res.status(500).json({ message: "Failed to validate donation" });
        }
        if (!donationResults.length) {
            return res.status(400).json({ message: "Invalid or inactive donation" });
        }
        const insertQuery = `INSERT INTO contributions (donation_id, donor_id, contribution_quantity, pickup_date_time, notes, status) VALUES (?, ?, ?, ?, ?, 'Scheduled')`;
        connection_1.connection.query(insertQuery, [donation_id, req.user.id, contribution_quantity, pickup_date_time || null, notes || null], (err) => {
            if (err) {
                console.error('Database error creating contribution:', sanitizeForLog(err.message));
                return res.status(500).json({ message: "Failed to create contribution" });
            }
            return res.status(200).json({ message: "Contribution confirmed successfully." });
        });
    });
});
// Get Donor Contribution History
router.get("/donor/me", authentication_1.authenticateToken, checkRole_1.checkDonor, (req, res) => {
    const query = `SELECT c.*, d.donation_type, d.location, d.pickup_date_time AS ngo_schedule FROM contributions c JOIN donations d ON c.donation_id = d.id WHERE c.donor_id = ? ORDER BY c.created_at DESC`;
    connection_1.connection.query(query, [req.user.id], (err, results) => {
        if (err) {
            console.error('Database error fetching contribution history:', sanitizeForLog(err.message));
            return res.status(500).json({ message: "Failed to fetch contribution history" });
        }
        return res.status(200).json(results);
    });
});
// Get Contributions for a Donation (NGO only)
router.get("/donation/:id", authentication_1.authenticateToken, checkRole_1.checkNGO, (req, res) => {
    const donationId = req.params.id;
    if (!donationId || isNaN(Number(donationId))) {
        return res.status(400).json({ message: "Invalid donation ID" });
    }
    const query = `SELECT c.*, u.name AS donor_name FROM contributions c JOIN users u ON c.donor_id = u.id JOIN donations d ON c.donation_id = d.id WHERE c.donation_id = ? AND d.ngo_id = ? ORDER BY c.created_at DESC`;
    connection_1.connection.query(query, [donationId, req.user.id], (err, results) => {
        if (err) {
            console.error('Database error fetching donation contributions:', sanitizeForLog(err.message));
            return res.status(500).json({ message: "Failed to fetch contributions" });
        }
        return res.status(200).json(results);
    });
});
// Update Contribution Status (NGO only)
router.put("/:id/status", authentication_1.authenticateToken, checkRole_1.checkNGO, (req, res) => {
    if (!validateOrigin(req, res))
        return;
    const contributionId = req.params.id;
    const { status } = req.body;
    const validStatuses = ["Scheduled", "PickedUp", "Cancelled"];
    if (!contributionId || isNaN(Number(contributionId))) {
        return res.status(400).json({ message: "Invalid contribution ID" });
    }
    if (!status) {
        return res.status(400).json({ message: "Status is required" });
    }
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
    }
    // Update with authorization check - NGO can only update contributions for their own donations
    const query = `UPDATE contributions c 
                 JOIN donations d ON c.donation_id = d.id 
                 SET c.status = ? 
                 WHERE c.id = ? AND d.ngo_id = ?`;
    connection_1.connection.query(query, [status, contributionId, req.user.id], (err, results) => {
        if (err) {
            console.error('Database error updating contribution status:', sanitizeForLog(err.message));
            return res.status(500).json({ message: "Failed to update contribution status" });
        }
        if (!results.affectedRows) {
            return res.status(404).json({ message: "Contribution not found or unauthorized" });
        }
        return res.status(200).json({ message: "Status updated successfully" });
    });
});
exports.default = router;
//# sourceMappingURL=contribution.js.map