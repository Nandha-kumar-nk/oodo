const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const tripRoutes = require("./routes/trip.routes");
const itineraryRoutes = require("./routes/community.routes");
const budgetRoutes = require("./routes/admin.routes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/budget", budgetRoutes);

module.exports = app;
