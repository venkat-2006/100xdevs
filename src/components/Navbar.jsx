import { Link } from "react-router-dom";

function Navbar({ lightMode, setLightMode }) {
  return (
     <nav className="fixed top-0 z-[999] w-full border-b border-white/10 bg-black/50 backdrop-blur-md text-white dark:bg-white/50 dark:text-black dark:border-gray-300 transition-all duration-300">
          <div className="flex w-full items-center justify-between px-10 py-4">
            <div className="flex items-center gap-3 ml-12">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                  alt="100xDevs Logo"
                  className="h-10 w-10 rounded-full"
                />
                <p className="hidden min-[375px]:block bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent">
                  100xDevs
                </p>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLightMode(!lightMode)}
                className="group flex items-center justify-center h-10 w-10 rounded-lg bg-transparent transition"
              >
                {lightMode ? (
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
                    className="text-gray-900 group-hover:rotate-45 transition-transform duration-300"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
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
                    className="text-blue-400 group-hover:text-blue-500 transition"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
              <Link to="/login">
                <button className="bg-white text-black dark:text-white dark:bg-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                  Login
                </button>
              </Link>

              <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-all duration-300 mr-12">
                Join now
              </button>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;