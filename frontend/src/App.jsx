import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import CreateTrip from "./pages/CreateTrip";
import Itinerary from "./pages/Itinerary";
import UserTrips from "./pages/UserTrips";
import UserProfile from "./pages/UserProfile";
import ActivitySearch from "./pages/ActivitySearch";
import ItineraryView from "./pages/ItineraryView";
import Community from "./pages/Community";
import CalendarView from "./pages/CalendarView";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Landing />} />
        <Route path="/trip/create" element={<CreateTrip />} />
        <Route path="/trip/build" element={<Itinerary />} />
        <Route path="/trips" element={<UserTrips />} />
        <Route path="/profile" element={<UserProfile />} />

        <Route path="/search" element={<ActivitySearch />} />
        <Route path="/itinerary/view" element={<ItineraryView />} />
        <Route path="/community" element={<Community />} />
        <Route path="/calendar" element={<CalendarView />} />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
