import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <div className="p-6 space-y-8">
        {/* User Info */}
        <Card>
          <div className="flex gap-6">
            <div className="w-32 h-32 rounded-full border border-white/20"></div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">User Details</h2>
              <p className="text-white/60">
                Edit profile information, preferences and settings.
              </p>
              <button className="mt-4 px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
                Edit Profile
              </button>
            </div>
          </div>
        </Card>

        {/* Trips */}
        {["Preplanned Trips", "Previous Trips"].map(section => (
          <div key={section}>
            <h3 className="mb-4 text-lg font-semibold">{section}</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <Card key={i}>
                  <div className="h-32 mb-4"></div>
                  <button className="w-full border border-white/20 rounded-xl py-2 hover:border-cyan-400 transition">
                    View
                  </button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
