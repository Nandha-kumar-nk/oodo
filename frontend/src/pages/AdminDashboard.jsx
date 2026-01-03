import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 grid grid-cols-4 gap-6">
        {["Manage Users", "Popular Cities", "Popular Activities", "Analytics"].map(tab => (
          <button
            key={tab}
            className="border border-white/20 rounded-xl py-3 hover:border-cyan-400 transition"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        <Card>
          <div className="h-96 flex items-center justify-center text-white/40">
            Analytics Charts & Insights
          </div>
        </Card>
      </div>
    </div>
  );
}
