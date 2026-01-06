"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDonationInput = validateDonationInput;
exports.validateContributionInput = validateContributionInput;
exports.validatePickupInput = validatePickupInput;
function validateDonationInput(req, res, next) {
    const { donation_type, quantity_or_amount, location, pickup_date_time } = req.body;
    if (!donation_type || !quantity_or_amount || !location || !pickup_date_time) {
        res.status(400).json({ message: "All required fields must be provided" });
        return;
    }
    if (Number(quantity_or_amount) <= 0) {
        res.status(400).json({ message: "Quantity must be greater than 0" });
        return;
    }
    const pickupTime = new Date(pickup_date_time);
    if (isNaN(pickupTime.getTime()) || pickupTime < new Date()) {
        res.status(400).json({ message: "Pickup date must be a valid future date" });
        return;
    }
    const allowedTypes = ["Food", "Funds", "Clothes", "Medicine", "Other"];
    if (!allowedTypes.includes(donation_type)) {
        res.status(400).json({ message: "Invalid donation type" });
        return;
    }
    next();
}
function validateContributionInput(req, res, next) {
    const { donation_id, contribution_quantity } = req.body;
    if (!donation_id || !contribution_quantity) {
        res.status(400).json({ message: "donation_id and contribution_quantity are required" });
        return;
    }
    if (Number(contribution_quantity) <= 0) {
        res.status(400).json({ message: "Contribution quantity must be greater than 0" });
        return;
    }
    if (req.body.pickup_date_time) {
        const pickupTime = new Date(req.body.pickup_date_time);
        if (isNaN(pickupTime.getTime()) || pickupTime < new Date()) {
            res.status(400).json({ message: "Pickup date must be a valid future date" });
            return;
        }
    }
    next();
}
function validatePickupInput(req, res, next) {
    const { donation_id, pickup_date_time } = req.body;
    if (!donation_id || !pickup_date_time) {
        res.status(400).json({ message: "donation_id and pickup_date_time are required" });
        return;
    }
    const pickupTime = new Date(pickup_date_time);
    if (isNaN(pickupTime.getTime()) || pickupTime < new Date()) {
        res.status(400).json({ message: "Pickup date must be a valid future date" });
        return;
    }
    next();
}
//# sourceMappingURL=validators.js.map