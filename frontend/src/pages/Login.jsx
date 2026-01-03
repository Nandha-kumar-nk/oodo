import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await api.post("/auth/login", {
      email: username,
      password
    });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <div className="border border-gray-300 rounded-xl p-10 w-[380px]">
        
        {/* Photo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
            Photo
          </div>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full bg-transparent border border-gray-300 rounded-md px-4 py-3 text-white mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent border border-gray-300 rounded-md px-4 py-3 text-white mb-6 focus:outline-none focus:ring-1 focus:ring-gray-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full border border-gray-300 rounded-md py-2 text-white hover:bg-white hover:text-black transition"
        >
          Login Button
        </button>
      </div>
    </div>
  );
}
