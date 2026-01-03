import Navbar from "../components/Navbar";
import Card from "../components/Card";

const TripSection = ({ title, color }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      {title}
    </h2>

    {[1, 2].map((trip) => (
      <Card key={trip}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">
              Short Overview of the Trip
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Destination • Date Range • Budget
            </p>
          </div>

          <button className="
            text-cyan-400 
            border border-cyan-400/40 
            px-4 py-2 
            rounded-xl 
            hover:bg-cyan-400 hover:text-black 
            transition
          ">
            View
          </button>
        </div>
      </Card>
    ))}
  </div>
);

export default function UserTrips() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      {/* Search & Filters */}
      <div className="sticky top-0 z-10 bg-[#0B0F14] px-6 py-4 border-b border-white/10">
        <div className="flex gap-3">
          <input
            placeholder="Search trips..."
            className="
              flex-1 
              bg-[#111827] 
              border border-white/20 
              rounded-xl 
              px-4 py-3
              focus:outline-none 
              focus:border-cyan-400
            "
          />

          {["Group by", "Filter", "Sort"].map(btn => (
            <button
              key={btn}
              className="
                px-4 
                rounded-xl 
                border border-white/20 
                hover:border-cyan-400 
                transition
              "
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Trip Sections */}
      <div className="p-6 space-y-10">
        <TripSection title="Ongoing" color="bg-green-400" />
        <TripSection title="Up-coming" color="bg-yellow-400" />
        <TripSection title="Completed" color="bg-gray-400" />
      </div>
    </div>
  );
}
