import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login({ lightMode, setLightMode }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 dark:bg-white dark:border-gray-200 text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            />

            <label className="text-xs text-gray-300 dark:text-gray-700 mb-2">Password</label>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 pr-12 rounded-md bg-white/5 border border-white/10 dark:bg-white dark:border-gray-200 text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 transition"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          
        </div>
      </div>
    </>
  );
}