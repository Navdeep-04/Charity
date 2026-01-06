"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = checkAdmin;
exports.checkNGO = checkNGO;
exports.checkDonor = checkDonor;
function checkAdmin(req, res, next) {
    if (!req.user || req.user.role !== "Admin") {
        return res
            .status(403)
            .json({ message: "Access denied — Admin role required" });
    }
    next();
}
function checkNGO(req, res, next) {
    if (!req.user || req.user.role !== "NGO") {
        return res
            .status(403)
            .json({ message: "Access denied — NGO role required" });
    }
    next();
}
function checkDonor(req, res, next) {
    if (!req.user || req.user.role !== "Donor") {
        return res
            .status(403)
            .json({ message: "Access denied — Donor role required" });
    }
    next();
}
//# sourceMappingURL=checkRole.js.map