import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function ActivitySearch() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6">
        <input
          placeholder="Search city or activity..."
          className="w-full bg-[#111827] border border-white/20 rounded-xl px-4 py-3 mb-6"
        />

        <div className="space-y-4">
          {[1,2,3,4,5,6].map(i => (
            <Card key={i}>
              <h3 className="text-lg font-medium">Option and its details</h3>
              <p className="text-white/60 text-sm mt-1">
                Description, cost, rating, availability
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
