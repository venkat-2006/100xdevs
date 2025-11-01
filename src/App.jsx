import { useState } from "react";
import "./App.css";

function App() {


  return (
    <>
      <nav className="fixed top-0 z-[999] w-full border-b border-white/10 bg-black text-white">
        <div className="flex w-full items-center justify-between px-10 py-5">

          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                alt="100xDevs Logo"
                className="h-10 w-10 rounded-full"
              />
              <p className="hidden min-[375px]:block bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent">
                100xDevs
              </p>
            </a>
          </div>


          <div className="flex items-center gap-4">

            <button className="group flex items-center justify-center h-10 w-10 rounded-lg bg-transparent transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-blue-500 transition"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>



            <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
              Login
            </button>


            <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition-all duration-300">
              <a href="/" target="_blank">
                Join now
              </a>
            </button>
          </div>
        </div>
      </nav>


      <div className="bg-black h-screen flex flex-col items-center justify-center text-white text-3xl">
        <div className="flex flex-col text-7xl font-black tracking-tighter">
          <div className="flex flex-wrap items-baseline">
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              100x Devs,
            </span>
            <span className="text-white">&nbsp;because</span>
          </div>
          <div className="text-white pl-8">10x ain't enough!</div>
        </div>
        <div className="p-4 text-lg">
          A beginner-friendly platform for mastering programming skills.
        </div>
        <div className="py-4">
          <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 py-3 rounded-md font-medium hover:opacity-80 transition-all duration-300 text-sm mr-1">
            Explore courses
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200 ml-1">
            Explore Notes
          </button>
        </div>

      </div>
    </>
  );
}

export default App;
