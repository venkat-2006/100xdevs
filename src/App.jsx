import { useState } from "react";
import "./App.css";

function App() {


  return (
    <>
      <nav className="fixed top-0 z-[999] w-full border-b border-white/25 bg-black text-white">
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
                      className="w-[420px] h-[220px]  object-cover rounded-xl shadow-lg shadow-white/25 transition-all duration-500 hover:-translate-y-3 hover:shadow-white/20 cursor-pointer"
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
                      className="w-[420px] h-[220px] object-cover rounded-xl shadow-lg shadow-white/25 transition-all duration-500 hover:-translate-y-3 hover:shadow-white/20 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>



          </div>


        </div>
        <div className="h-[380px] bg-black flex items-center justify-center border-b border-white/25 ">
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
      <footer className="h-[300px] bg-black flex text-white pt-[40px] pl-[80px] justify-center">
  <div className="flex-[2] ">
    <div className="flex items-center gap-4 ml-12">
  <img
    src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
    alt="100xDevs Logo"
    className="h-[70px] w-[70px] rounded-full object-cover"
  />

  <div className="flex flex-col leading-tight">
    <p className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-4xl font-black tracking-tighter text-transparent ">
      100xDevs
    </p>
    <p className=" text-gray-300 mt-1 text-lg">because 10x ain't enough.</p>
  </div>
 
</div>
 <div className="pl-[53px] pt-[40px]" >
    Follow us
  </div>
  <div className="flex pl-[40px]">
    <div className="flex gap-3 mt-3x">
  {/* Twitter */}
   <a
        target="_blank"
        href="https://x.com/kirat_tw"
        className="rounded-lg bg-blue-500/10 p-2 text-blue-500 transition-all duration-300 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

  {/* Instagram */}
  <a
        target="_blank"
        href="https://www.instagram.com/kirat_ins/"
        className="rounded-lg bg-pink-500/10 p-2 text-pink-500 transition-all duration-300 hover:text-pink-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
  {/* YouTube */}
  
  {/* YouTube */}
  <a
        target="_blank"
        href="https://www.youtube.com/@harkirat1"
        className="rounded-lg bg-red-500/10 p-2 text-red-500 transition-all duration-300 hover:text-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>

  {/* GitHub */}
  <a
        target="_blank"
        href="https://github.com/code100x"
        className="rounded-lg bg-gray-800/10 p-2 text-gray-200 transition-all duration-300 hover:text-blue-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>


</div>


  </div>

  </div>
  <div className="flex-1 text-center">2</div>
  <div className="flex-1 text-center">3</div>
</footer>


      </main>
    </>
  );
}

export default App;
