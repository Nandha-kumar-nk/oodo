import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function CalendarView() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <button>←</button>
            <h2 className="text-lg font-semibold">January 2024</h2>
            <button>→</button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
              <div key={d} className="text-white/60">{d}</div>
            ))}

            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="h-20 border border-white/10 rounded-xl p-1 hover:border-cyan-400 transition"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
