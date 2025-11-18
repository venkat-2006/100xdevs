import { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "../components/Courses";

export default function JoinNow() {
    const [active, setActive] = useState("courses");

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
                <div className="w-full px-4 py-2 flex items-center">

                    <img
                        src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                        alt="100xDevs Logo"
                        className="h-12 w-12 rounded-full"
                    />

                    <div className="flex items-center gap-3 ml-auto">

                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Type here to Search..."
                                className="px-4 py-2 border border-gray-300 border-r-0 
                     rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <button
                                className="px-4 py-3 bg-gray-200 text-gray-700 border border-gray-300 
                     rounded-r-full hover:bg-gray-300 transition flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="10" cy="10" r="5" />
                                    <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
                                </svg>


                            </button>
                        </div>

                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                            Signup
                        </button>

                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                            Login
                        </button>

                    </div>
                </div>
            </nav>
            <div className="pt-[60px]">

               <div>

                    <div className="fixed left-0 top-[60px] w-[18%] bg-blue-100 h-[calc(100vh-60px)] overflow-auto">

                        <div className="pt-[40px] pl-7">
                            MAIN MENU
                        </div>
                        <div className="pt-[30px] pl-7">
                            <Link
                                to="/home"
                                onClick={() => setActive("home")}
                                className="flex items-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${active === "home" ? "text-blue-600" : "text-gray-700"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5V14h4v7h5a1 1 0 001-1V10"
                                    />
                                </svg>

                                <div
                                    className={`pl-3 ${active === "home" ? "text-blue-600 font-medium" : "text-gray-700"
                                        }`}
                                >
                                    Home
                                </div>
                            </Link>
                        </div>

                        <div className="pt-[30px] pl-7">
                            <Link
                                to="/all-courses"
                                onClick={() => setActive("courses")}
                                className="flex items-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${active === "courses" ? "text-blue-600" : "text-gray-700"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 14L2 9l10-5 10 5-10 5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 10v6a6 6 0 0012 0v-6"
                                    />
                                </svg>

                                <div
                                    className={`pl-3 ${active === "courses" ? "text-blue-600 font-medium" : "text-gray-700"
                                        }`}
                                >
                                    Courses
                                </div>
                            </Link>
                        </div>


                    </div>
                    <div className="ml-[18%] px-6 h-[calc(100vh-60px)] overflow-y-scroll">
                        
                        <Courses/>
                    </div>

                </div>

            </div>




        </>
    );
}
