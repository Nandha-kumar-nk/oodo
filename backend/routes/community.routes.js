import express from "express";
import auth from "../middleware/authMiddleware.js"; // note the .js extension
import {
  addCityToTrip,
  addActivity,
  getItinerary
} from "../controllers/itineraryController.js"; // note .js

const router = express.Router();

router.post("/:tripId/city", auth, addCityToTrip);
router.post("/activity", auth, addActivity);
router.get("/:tripId", auth, getItinerary);

export default router;  // ✅ ES Module export
