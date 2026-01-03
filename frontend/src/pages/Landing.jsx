import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      {/* Banner */}
      <div className="p-6">
        <div className="h-64 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
          <h2 className="text-4xl font-bold tracking-wide">Explore the World</h2>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 flex gap-3">
        <input className="flex-1 bg-[#111827] border border-white/20 rounded-xl px-4 py-3" placeholder="Search destinations..." />
        <button className="px-4 rounded-xl border border-white/20">Filter</button>
        <button className="px-4 rounded-xl border border-white/20">Sort</button>
      </div>

      {/* Top Regions */}
      <section className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Top Regional Selections</h3>
        <div className="grid grid-cols-5 gap-4">
          {[1,2,3,4,5].map(i => (
            <Card key={i}>
              <div className="h-28"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Previous Trips */}
      <section className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Previous Trips</h3>
        <div className="grid grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i}>
              <div className="h-48"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Floating Button */}
      <button className="
        fixed bottom-6 right-6
        bg-cyan-500
        text-black
        px-6 py-3
        rounded-full
        shadow-xl
        hover:scale-105
        transition
      ">
        + Plan a Trip
      </button>
    </div>
  );
}
