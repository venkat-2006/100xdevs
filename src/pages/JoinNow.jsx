import { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "../components/Courses";
import Signup from "../others/Signup";

import { logoutUser } from "../utils/logoutUser";
import { useAuth } from "../context/AuthContext";

import Login from "../others/Login"

export default function JoinNow() {
    const [active, setActive] = useState("courses");
    const [openSignup, setOpenSignup] = useState(false);

    const [openLogin, setOpenLogin] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const handleLogout = async () => {
        try {
            await logoutUser();      // Firebase logout
            setIsLoggedIn(false);    // Update UI state
            alert("Logged out successfully!");
        } catch (err) {
            alert(err.message);
        }
    };


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
                                className="px-10 py-2 border border-gray-300 border-r-0 
                     rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
                            />

                            <button
                                className="px-4 py-3 bg-gray-200 text-gray-700 border border-gray-200 
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

                        {!isLoggedIn && (
                            <>
                                <button
                                    onClick={() => setOpenSignup(true)}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                                >
                                    Signup
                                </button>

                                <button
                                    onClick={() => setOpenLogin(true)}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                                >
                                    Login
                                </button>

                            </>
                        )}
                        {isLoggedIn && (
                            <div className="w-10 h-10 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className="w-full h-full"
                                >
                                    <circle cx="24" cy="24" r="22" fill="black" />
                                    <circle cx="24" cy="16" r="6" fill="white" />
                                    <path
                                        d="M12 36 C12 28, 20 26, 24 26 C28 26, 36 28, 36 36 Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {openSignup && (
                <Signup onClose={() => setOpenSignup(false)} />
            )}
            {openLogin && <Login onClose={() => setOpenLogin(false)} />}

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
                        {isLoggedIn && (
                            <>
                                <div className="py-[10px] pt-9 flex justify-center">
                                    <hr className="w-[80%] border-gray-300" />
                                </div>

                                <div className="pt-[30px] pl-7">
                                    <Link
                                        to="/dashboard"
                                        onClick={() => setActive("dashboard")}
                                        className="flex items-center cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                            <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 19h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                                        </svg>

                                        <div
                                            className={`pl-3 ${active === "dashboard"
                                                ? "text-blue-600 font-medium"
                                                : "text-gray-700"
                                                }`}
                                        >
                                            Purchases
                                        </div>
                                    </Link>
                                </div>

                                {/* Projects */}
                                <div className="pt-[30px] pl-7">
                                    <Link
                                        to="/projects"
                                        onClick={() => setActive("projects")}
                                        className="flex items-center cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .11-.65l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.027 7.027 0 0 0-1.62-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.41l-.36 2.54c-.6.23-1.15.54-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22L2.71 8.83a.5.5 0 0 0 .11.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.11.65l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96c.47.39 1.02.71 1.62.94l.36 2.54a.5.5 0 0 0 .49.41h3.8a.5.5 0 0 0 .49-.41l.36-2.54c.6-.23 1.15-.54 1.62-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.11-.65l-2.03-1.58ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                        </svg>


                                        <div
                                            className={`pl-3 ${active === "projects"
                                                ? "text-blue-600 font-medium"
                                                : "text-gray-700"
                                                }`}
                                        >
                                            Settings
                                        </div>
                                    </Link>
                                </div>

                                {/* Settings */}
                                <div className="pt-[30px] pl-7">
                                    <div
                                        onClick={handleLogout}
                                        className="flex items-center cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="size-5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                d="M16 17l5-5-5-5m-9 5h14M3 3h6v18H3z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        <div
                                            className="pl-3 text-gray-700 hover:text-blue-600 font-medium"
                                        >
                                            Logout
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}




                    </div>
                    <div className="ml-[18%] px-6 h-[calc(100vh-60px)] overflow-y-scroll">

                        <Courses />
                    </div>

                </div>

            </div>




        </>
    );
}
