"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.dbConnected = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbConnected = false;
exports.connection = mysql2_1.default.createConnection({
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
exports.connection.connect(err => {
    if (err) {
        console.error("MySQL connection failed:", err.message || err);
        exports.dbConnected = false;
        // Do not exit the process here so the server can start for local development.
    }
    else {
        exports.dbConnected = true;
        console.log("http://localhost:8080/");
        console.log("MySQL Connected");
    }
});
//# sourceMappingURL=connection.js.map