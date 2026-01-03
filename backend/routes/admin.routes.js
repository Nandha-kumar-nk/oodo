import express from "express";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Simple admin check
const adminVerify = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json("Access Denied");
  try {
    const decoded = jwt.verify(token, "secret");
    db.query("SELECT role FROM users WHERE id=?", [decoded.id], (err, result) => {
      if (err || result[0].role !== "admin") return res.status(403).json("Not Admin");
      next();
    });
  } catch {
    res.status(400).json("Invalid Token");
  }
};

// GET TRIP STATS
router.get("/stats", adminVerify, (req, res) => {
  db.query(
    "SELECT status, COUNT(*) as total FROM trips GROUP BY status",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

export default router;
