import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 space-y-4">
        {[1,2,3,4].map(post => (
          <Card key={post}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20"></div>
              <div className="flex-1">
                <h3 className="font-medium">Community Post</h3>
                <p className="text-white/60 text-sm mt-1">
                  Shared trip, tips, photos or experience.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
