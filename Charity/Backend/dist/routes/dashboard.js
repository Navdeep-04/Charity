"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = require("../db/connection");
const authentication_1 = require("../services/authentication");
const router = (0, express_1.Router)();
/**
 * ADMIN DASHBOARD SUMMARY
 * GET /dashboard/summary
 */
router.get("/summary", authentication_1.authenticateToken, (_req, res) => {
    const queries = {
        ngos: "SELECT COUNT(id) AS ngoCount FROM users WHERE role = 'NGO'",
        donors: "SELECT COUNT(id) AS donorCount FROM users WHERE role = 'Donor'",
        donations: `SELECT COUNT(id) AS totalDonations, SUM(status = 'Pending') AS pending, SUM(status = 'Confirmed') AS confirmed, SUM(status = 'Completed') AS completed, SUM(status = 'Cancelled') AS cancelled FROM donations`,
        contributions: "SELECT COUNT(id) AS contributionCount FROM contributions"
    };
    const executeQuery = (query) => {
        return new Promise((resolve, reject) => {
            connection_1.connection.query(query, (err, results) => {
                if (err)
                    reject(err);
                else
                    resolve(results[0]);
            });
        });
    };
    Promise.all([
        executeQuery(queries.ngos),
        executeQuery(queries.donors),
        executeQuery(queries.donations),
        executeQuery(queries.contributions)
    ])
        .then(([ngos, donors, donations, contributions]) => {
        const data = {
            ngos: ngos.ngoCount,
            donors: donors.donorCount,
            donations,
            contributions: contributions.contributionCount
        };
        res.status(200).json({ data });
    })
        .catch(err => {
        console.error('Dashboard query error:', err.code || 'Unknown error');
        res.status(500).json({ message: 'Failed to fetch dashboard data' });
    });
});
exports.default = router;
//# sourceMappingURL=dashboard.js.map