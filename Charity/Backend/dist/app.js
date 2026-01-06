"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./db/connection"); // initializes DB connection
// Routes
const user_1 = __importDefault(require("./routes/user"));
const donation_1 = __importDefault(require("./routes/donation"));
const contribution_1 = __importDefault(require("./routes/contribution"));
const pickups_1 = __importDefault(require("./routes/pickups"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({ limit: '10mb' }));
// API Routes (same paths as before)
app.use("/user", user_1.default);
app.use("/donations", donation_1.default);
app.use("/contributions", contribution_1.default);
app.use("/pickups", pickups_1.default);
app.use("/dashboard", dashboard_1.default);
// Optional test route
app.get("/", (_req, res) => {
    res.send("Donation & Charity API (TypeScript running)");
});
// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
});
exports.default = app;
//# sourceMappingURL=app.js.map