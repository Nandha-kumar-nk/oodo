import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

let db;

try {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // Test connection
  db.getConnection((err, connection) => {
    if (err) {
      console.error("❌ MySQL connection error:", err.message);
      process.exit(1); // stop server if DB fails
    }
    console.log("✅ MySQL connected successfully");
    connection.release();
  });

} catch (error) {
  console.error("❌ Failed to initialize MySQL pool:", error);
  process.exit(1);
}

export default db;
