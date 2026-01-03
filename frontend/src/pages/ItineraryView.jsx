import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function ItineraryView() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 space-y-8">
        {[1,2].map(day => (
          <Card key={day}>
            <h3 className="text-lg font-semibold mb-4">Day {day}</h3>
            <div className="space-y-3">
              {[1,2,3].map(step => (
                <div key={step} className="flex gap-4 items-center">
                  <div className="flex-1 border border-white/20 rounded-xl px-4 py-3">
                    Physical Activity
                  </div>
                  <div className="w-32 border border-white/20 rounded-xl px-4 py-3 text-center">
                    Expense
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
