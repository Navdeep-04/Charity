"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = require("../db/connection");
const authentication_1 = require("../services/authentication");
const checkRole_1 = require("../services/checkRole");
const validators_1 = require("../services/validators");
const router = (0, express_1.Router)();
/* ---------------------------------------------------------
   1️⃣ SCHEDULE PICKUP (Donor)
   POST /pickups/schedule
---------------------------------------------------------*/
router.post("/schedule", authentication_1.authenticateToken, checkRole_1.checkDonor, validators_1.validatePickupInput, (req, res) => {
    // CSRF Protection - Check for custom header
    if (!req.headers['x-requested-with'] || req.headers['x-requested-with'] !== 'XMLHttpRequest') {
        return res.status(403).json({ message: "Forbidden - Invalid request" });
    }
    const { donation_id, pickup_date_time, notes } = req.body;
    const checkQuery = `
      SELECT COUNT(*) AS cnt
      FROM contributions
      WHERE donation_id = ? AND pickup_date_time = ?
    `;
    connection_1.connection.query(checkQuery, [donation_id, pickup_date_time], (err, result) => {
        if (err) {
            console.error('Database error checking pickup slot:', err);
            return res.status(500).json({ message: "Failed to check pickup availability" });
        }
        if (result[0].cnt > 0) {
            return res.status(409).json({
                message: "Pickup slot already booked — please choose another time"
            });
        }
        const insertQuery = `
          INSERT INTO contributions
          (donation_id, donor_id, contribution_quantity, pickup_date_time, notes, status)
          VALUES (?, ?, 0, ?, ?, 'Scheduled')
        `;
        connection_1.connection.query(insertQuery, [donation_id, req.user.id, pickup_date_time, notes || null], err2 => {
            if (err2) {
                console.error('Database error scheduling pickup:', err2);
                return res.status(500).json({ message: "Failed to schedule pickup" });
            }
            return res
                .status(200)
                .json({ message: "Pickup scheduled successfully" });
        });
    });
});
/* ---------------------------------------------------------
   2️⃣ DONOR PICKUP LIST
   GET /pickups/donor/me
---------------------------------------------------------*/
router.get("/donor/me", authentication_1.authenticateToken, checkRole_1.checkDonor, (req, res) => {
    const query = `
      SELECT c.id, c.pickup_date_time, c.status,
             d.donation_type, d.location
      FROM contributions c
      JOIN donations d ON d.id = c.donation_id
      WHERE c.donor_id = ?
      ORDER BY c.pickup_date_time DESC
    `;
    connection_1.connection.query(query, [req.user.id], (err, results) => {
        if (err) {
            console.error('Database error fetching donor pickups:', err);
            return res.status(500).json({ message: "Failed to fetch pickup history" });
        }
        return res.status(200).json(results);
    });
});
/* ---------------------------------------------------------
   3️⃣ NGO VIEW PICKUPS FOR DONATION
   GET /pickups/ngo/:donationId
---------------------------------------------------------*/
router.get("/ngo/:donationId", authentication_1.authenticateToken, checkRole_1.checkNGO, (req, res) => {
    const donationId = req.params.donationId;
    const query = `
      SELECT c.id, c.pickup_date_time, c.status, u.name AS donor_name
      FROM contributions c
      JOIN users u ON u.id = c.donor_id
      JOIN donations d ON d.id = c.donation_id
      WHERE c.donation_id = ? AND d.ngo_id = ?
      ORDER BY c.pickup_date_time ASC
    `;
    connection_1.connection.query(query, [donationId, req.user.id], (err, results) => {
        if (err) {
            console.error('Database error fetching NGO pickups:', err);
            return res.status(500).json({ message: "Failed to fetch pickup data" });
        }
        return res.status(200).json(results);
    });
});
/* ---------------------------------------------------------
   4️⃣ UPDATE PICKUP STATUS
   PUT /pickups/:id/status
---------------------------------------------------------*/
router.put("/:id/status", authentication_1.authenticateToken, (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: "Invalid pickup ID" });
    }
    if (!status) {
        return res.status(400).json({ message: "Status is required" });
    }
    const validStatuses = ["Scheduled", "PickedUp", "Cancelled"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid pickup status" });
    }
    const query = `
      UPDATE contributions
      SET status = ?
      WHERE id = ?
    `;
    connection_1.connection.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Database error updating pickup status:', err);
            return res.status(500).json({ message: "Failed to update pickup status" });
        }
        if (!results.affectedRows) {
            return res
                .status(404)
                .json({ message: "Pickup record not found" });
        }
        return res
            .status(200)
            .json({ message: "Pickup status updated successfully" });
    });
});
exports.default = router;
//# sourceMappingURL=pickups.js.map