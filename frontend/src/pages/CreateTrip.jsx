import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Card from "../components/Card";

export default function CreateTrip() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 grid grid-cols-2 gap-6">
        {/* Form */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Plan a New Trip</h2>
          <div className="space-y-4">
            <Input placeholder="Start Date" />
            <Input placeholder="Select Place" />
            <Input placeholder="End Date" />
          </div>
        </Card>

        {/* Suggestions */}
        <Card>
          <h3 className="mb-4">Suggestions</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-28 border border-white/20 rounded-xl"></div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
