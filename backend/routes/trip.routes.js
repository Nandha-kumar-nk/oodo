import express from "express";
import db from "../db.js";

import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json("Access Denied");

  try {
    const decoded = jwt.verify(token, "secret");
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(400).json("Invalid Token");
  }
};

// CREATE TRIP
router.post("/", verifyToken, (req, res) => {
  const { destination, start_date, end_date } = req.body;
  db.query(
    "INSERT INTO trips (user_id,destination,start_date,end_date,status) VALUES (?,?,?,?,?)",
    [req.userId, destination, start_date, end_date, "upcoming"],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ tripId: result.insertId });
    }
  );
});

// ADD ITINERARY
router.post("/itinerary/:tripId", verifyToken, (req, res) => {
  const { tripId } = req.params;
  const { day_number, activity, expense } = req.body;

  db.query(
    "INSERT INTO itineraries (trip_id,day_number,activity,expense) VALUES (?,?,?,?)",
    [tripId, day_number, activity, expense],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Itinerary Added");
    }
  );
});

// GET USER TRIPS
router.get("/mytrips", verifyToken, (req, res) => {
  db.query(
    "SELECT * FROM trips WHERE user_id=?",
    [req.userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

export default router;
