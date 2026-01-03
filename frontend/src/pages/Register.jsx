import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    info: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    await api.post("/auth/register", {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      password: form.password
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <div className="border border-gray-300 rounded-xl p-10 w-[720px]">

        {/* Photo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
            Photo
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input className="input" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="input" name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input className="input" name="email" placeholder="Email Address" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input className="input" name="city" placeholder="City" onChange={handleChange} />
          <input className="input" name="country" placeholder="Country" onChange={handleChange} />
        </div>

        {/* Additional Info */}
        <textarea
          name="info"
          placeholder="Additional Information ...."
          rows="4"
          className="w-full bg-transparent border border-gray-300 rounded-md px-4 py-3 text-white mb-4 focus:outline-none"
          onChange={handleChange}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input mb-6"
          onChange={handleChange}
        />

        {/* Register Button */}
        <div className="flex justify-center">
          <button
            onClick={handleRegister}
            className="border border-gray-300 rounded-md px-8 py-2 text-white hover:bg-white hover:text-black transition"
          >
            Register Users
          </button>
        </div>
      </div>
    </div>
  );
}
