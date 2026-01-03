import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Itinerary() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 space-y-6">
        {[1,2,3].map(section => (
          <Card key={section}>
            <h3 className="text-lg font-semibold mb-2">
              Section {section}
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Travel, hotel or activity details
            </p>

            <div className="flex gap-4">
              <div className="flex-1 border border-white/20 rounded-xl px-4 py-2">
                Date Range
              </div>
              <div className="w-48 border border-white/20 rounded-xl px-4 py-2">
                Budget
              </div>
            </div>
          </Card>
        ))}

        <button className="
          mx-auto block
          border border-cyan-400
          text-cyan-400
          px-6 py-3
          rounded-full
          hover:bg-cyan-400 hover:text-black
          transition
        ">
          + Add Another Section
        </button>
      </div>
    </div>
  );
}
