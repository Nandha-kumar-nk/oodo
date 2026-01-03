import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  db.query(
    "INSERT INTO users (first_name,last_name,email,password) VALUES (?,?,?,?)",
    [req.body.firstName, req.body.lastName, req.body.email, hash],
    () => res.json("User Registered")
  );
});

router.post("/login", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE email=?",
    [req.body.email],
    async (err, data) => {
      if (!data.length) return res.status(404).json("User not found");
      const valid = await bcrypt.compare(req.body.password, data[0].password);
      if (!valid) return res.status(401).json("Invalid credentials");

      const token = jwt.sign({ id: data[0].id }, "secret");
      res.json({ token, user: data[0] });
    }
  );
});

export default router;
