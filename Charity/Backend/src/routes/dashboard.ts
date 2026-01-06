import { Router, Request, Response } from "express";
import { connection } from "../db/connection";
import { authenticateToken } from "../services/authentication";

const router: Router = Router();

/**
 * ADMIN DASHBOARD SUMMARY
 * GET /dashboard/summary
 */
router.get(
  "/summary",
  authenticateToken,
  (_req: Request, res: Response) => {
    const queries = {
      ngos: "SELECT COUNT(id) AS ngoCount FROM users WHERE role = 'NGO'",
      donors: "SELECT COUNT(id) AS donorCount FROM users WHERE role = 'Donor'",
      donations: `SELECT COUNT(id) AS totalDonations, SUM(status = 'Pending') AS pending, SUM(status = 'Confirmed') AS confirmed, SUM(status = 'Completed') AS completed, SUM(status = 'Cancelled') AS cancelled FROM donations`,
      contributions: "SELECT COUNT(id) AS contributionCount FROM contributions"
    };

    const executeQuery = (query: string): Promise<any> => {
      return new Promise((resolve, reject) => {
        connection.query(query, (err, results: any[]) => {
          if (err) reject(err);
          else resolve(results[0]);
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
  }
);

export default router;
