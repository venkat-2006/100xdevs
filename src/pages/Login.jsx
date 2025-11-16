import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login({ lightMode, setLightMode }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard"); 
  }

  return (
    <>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        lightMode 
          ? 'bg-gradient-to-b from-white to-gray-100' 
          : 'bg-gradient-to-b from-black to-[#0a0a0a]'
      }`}>
        <div className="w-[420px] h-[420px] bg-white/6 dark:bg-white/95 rounded-xl shadow-xl backdrop-blur-md border border-white/10 dark:border-gray-200/20 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-white dark:text-black">
              Welcome to <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">100xDevs</span>
            </h1>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-700">
              Log in to access paid content!
            </p>
          </div>

          <form className="mt-6 flex-1 flex flex-col justify-center" onSubmit={handleSubmit}>
            <label className="text-xs text-gray-300 dark:text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              required
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 dark:bg-white dark:border-gray-200 text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            />

            <label className="text-xs text-gray-300 dark:text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 dark:bg-white dark:border-gray-200 text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-6"
            />

            <button
              type="submit"
              className="w-full mt-auto bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-xs text-gray-400 dark:text-gray-600">
            Don't have an account? <button onClick={() => navigate("/signup")} className="text-blue-400 hover:underline">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}