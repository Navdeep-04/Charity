import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export let dbConnected = false;

export const connection = mysql.createConnection({
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error("MySQL connection failed:", err.message || err);
    dbConnected = false;
    // Do not exit the process here so the server can start for local development.
  } else {
    dbConnected = true;
    console.log("http://localhost:8080/");
    console.log("MySQL Connected");
  }
});
