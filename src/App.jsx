import { useState } from "react";
import "./App.css";

function App() {


  return (
    <>
      <nav className="fixed top-0 z-[999] w-full border-b border-white/10 bg-black text-white">
        <div className="flex w-full items-center justify-between px-10 py-4">

          <div className="flex items-center gap-3 ml-12">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                alt="100xDevs Logo"
                className="h-10 w-10 rounded-full"
              />
              <p className="hidden min-[375px]:block bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent ">
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


            <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition-all duration-300 mr-12">
              <a href="/" target="_blank">
                Join now
              </a>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="bg-black h-screen flex flex-col items-center justify-center text-white text-3xl">
          <div className="flex flex-col text-7xl font-black tracking-tighter mt-32">
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
          <div className="py-4 mb-8">
            <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 py-3 rounded-md font-medium hover:opacity-80 transition-all duration-300 text-sm mr-1">
              Explore courses
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200 ml-1">
              Explore Notes
            </button>
          </div>
          <div className="relative w-full py-6 bg-black">
            {/* Bluish-black gradient overlays with smooth fade */}

            {/* Sharp-edged black gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none bg-gradient-to-r from-black from-50% to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none bg-gradient-to-l from-black from-50% to-transparent"></div>

            {/* Scrolling container */}
         <div className="w-full max-w-7xl mx-auto overflow-hidden">
  <div className="flex animate-scroll gap-6 overflow-visible pt-6">
    
    {/* Group 1 */}
    <div className="flex gap-6 shrink-0">
      {[
        "https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png",
        "https://100x-b-mcdn.akamai.net.in/images/ds.jpeg",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-[420px] h-[220px]  object-cover rounded-xl shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-white/20 cursor-pointer"
        />
      ))}
    </div>

    {/* Group 2 */}
    <div className="flex gap-6 shrink-0">
      {[
        "https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png",
        "https://100x-b-mcdn.akamai.net.in/images/ds.jpeg",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png",
        "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-[420px] h-[220px] object-cover rounded-xl shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-white/20 cursor-pointer"
        />
      ))}
    </div>
  </div>
</div>



          </div>


        </div>
       <div className="h-[350px] bg-black flex items-center justify-center">
  <div className="relative text-white w-[1300px] bg-gradient-to-b from-blue-400 to-blue-700 rounded-2xl p-8 h-[330px] shadow-lg flex items-center justify-between overflow-hidden">
    
    {/* LEFT CONTENT */}
    <div className="z-10">
      <div className="text-4xl w-[800px]">
        Every developer deserves to be a great engineer, a 100x Engineer!
      </div>
      <div className="w-[800px] text-[1.33rem] pt-2">
        Give yourself the power you deserve with a 100xdevs today!
      </div>
      <div className="flex gap-x-2 py-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download App
        </button>

        <button className="flex items-center gap-2 bg-slate-800 text-white px-7 py-2.5 rounded-xl hover:bg-blue-700 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Join now
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE CARD */}
 <div className="absolute right-6 bottom-[-500px] group">
  <img
    src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1080&q=75"
    alt="Mockup"
    className="w-[400px] rotate-3 transition-all duration-300 group-hover:-translate-y-4 group-hover:rotate-6 cursor-pointer animate-tilt"
  />
  
  <style jsx>{`
    @keyframes tilt {
      0%, 100% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }

    .animate-tilt {
      animation: tilt 3s ease-in-out infinite;
    }

    .group:hover .animate-tilt {
      animation: none;
    }
  `}</style>
</div>

  </div>
</div>


      </main>
    </>
  );
}

export default App;
