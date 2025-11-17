import { useState } from "react";

export default function JoinNow() {
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

        </>
    );
}
