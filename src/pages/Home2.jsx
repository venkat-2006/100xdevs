import { useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../others/ImageSlider";
import Signup from "../others/Signup";

import { useAuth } from "../context/AuthContext";


export default function Home2() {
    const [active, setActive] = useState("home");
    const [openSignup, setOpenSignup] = useState(false);

    const { isLoggedIn } = useAuth();


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

                                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
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
                                            <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 19h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
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
                                    <Link
                                        to="/settings"
                                        onClick={() => setActive("settings")}
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
                                            className={`pl-3 ${active === "settings"
                                                ? "text-blue-600 font-medium"
                                                : "text-gray-700"
                                                }`}
                                        >
                                            Logout
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )}



                    </div>
                    <div className="ml-[18%] px-6">


                        <div className="space-y-10 pt-11">

                            <ImageSlider />

                            <h3 className="text-center text-3xl font-semibold">Featured</h3>

                            <div className="flex justify-center gap-5 flex-wrap mt-6">


                                <div className="w-[350px] bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden ">
                                    <img
                                        src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png"
                                        alt="Complete Web Development + Devops + Blockchain Cohort"
                                        className="w-full h-[200px] object-cover border-b-4"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-[18px] font-semibold leading-tight ">
                                            Complete Web Development +
                                        </h3>
                                        <h3 className="text-[18px] font-semibold leading-tight pt-2">
                                            Devops + Blockchain Cohort
                                        </h3>

                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="text-sm font-bold">₹5,989</span>
                                            <span className="text-gray-500 line-through text-sm">₹8,499</span>
                                            <span className="text-green-500 text-sm font-semibold ml-[130px]">29.53% off</span>
                                        </div>

                                        <button className="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-full font-medium">
                                            View Details
                                        </button>
                                    </div>
                                </div>


                                <div className="w-[350px] bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden ">
                                    <img
                                        src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png"
                                        alt="Complete Web Development + Devops + Blockchain Cohort"
                                        className="w-full h-[200px] object-cover border-b-4"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-[18px] font-semibold leading-tight ">
                                            Complete Web Development +
                                        </h3>
                                        <h3 className="text-[18px] font-semibold leading-tight pt-2">
                                            Devops Cohort
                                        </h3>

                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="text-sm font-bold">₹4,989</span>
                                            <span className="text-gray-500 line-through text-sm">₹5,999</span>
                                            <span className="text-green-500 text-sm font-semibold ml-[130px]">16.84% off</span>
                                        </div>

                                        <button className="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-full font-medium">
                                            View Details
                                        </button>
                                    </div>
                                </div>


                                <div className="w-[350px] bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                                    <img
                                        src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png"
                                        alt="Complete Web Development + Devops + Blockchain Cohort"
                                        className="w-full h-[200px] object-cover border-b-4"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-[18px] font-semibold leading-tight ">
                                            Complete Web3/Blockchain Cohort
                                        </h3>


                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="text-sm font-bold">₹4,989</span>
                                            <span className="text-gray-500 line-through text-sm">₹5,999</span>
                                            <span className="text-green-500 text-sm font-semibold ml-[130px]">16.84% off</span>
                                        </div>

                                        <button className="w-full  bg-blue-600 text-white py-2.5 rounded-full font-medium mt-[52px]">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                            </div>



                            <h5 className="text-center text-3xl font-semibold pt-6">
                                About 100xDevs
                            </h5>


                            <div
                                className="m-[50px] p-[15px] rounded-3xl space-y-4 "
                                style={{
                                    background: "linear-gradient(270deg, #FFECB3 0%, #FFE0B2 20%, #FFCDD2 40%, #F8BBD9 60%, #E1BEE7 80%, #D1C4E9 100%)",
                                }}
                            >

                                <div className="m-[10px]" > Welcome to 100xdevs.</div>
                                <div className="m-[10px] flex flex-wrap gap-2 text-base">
                                    <span>This is an initiative by</span>
                                    <span className="font-semibold">Harkirat Singh</span>
                                    <span>to personally mentor folks in the field of Programming.</span>
                                </div>

                                <div className="m-[10px] text-base">
                                    Harkirat strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle,
                                    and his hope is to take everyone in this community to be a
                                    <span className="font-semibold"> 100x Engineer.</span>
                                </div>


                                <div className="m-[10px] pb-5 ">
                                    Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.</div>

                            </div>

                            <div className="h-[80px]">


                            </div>


                            <div className="bg-blue-100 rounded-2xl m-[50px] pb-[70px]  p-[15px]  grid grid-cols-8 gap-4">
                                <div className="m-[20px] col-span-3">
                                    <img
                                        src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                                        alt="100xDevs Logo"
                                        className="h-24 w-24 rounded-full"
                                    />
                                </div>

                                <div className="col-span-3 mt-[20px]">
                                    <div className="font-semibold" > Quick Links</div>
                                    <div className="pt-2 text-blue-500  hover:text-blue-800 duration-300 cursor-pointer"> Terms & Conditions</div>
                                    <div className="pt-2 text-blue-500  hover:text-blue-800 duration-300 cursor-pointer">Privacy Policy</div>
                                    <div className="pt-2 text-blue-500  hover:text-blue-800  duration-300 cursor-pointer">Refunds & Cancellation Policy</div>
                                </div>
                                <div className="col-span-2 mt-[20px] space-y-2">
                                    <div className="font-semibold" > Download App</div>
                                    <div><a href="https://play.google.com/store/apps/details?id=com.hundredx.devs" target="_blank" rel="noopener noreferrer"><img src="https://harkirat.classx.co.in/google-play.svg" alt="" /></a></div>
                                    <h6 className="font-semibold"> Follow us</h6>
                                    <div className="flex gap-2 flex-wrap">
                                        {/* Twitter */}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-current"
                                            href="https://twitter.com/kirat_tw"
                                        >
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter"
                                                className="w-6 h-6" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M389.2 48h70.6L365.6 224.2 487 464H345L233.7 318.6 106.5 464H35.9l94.7-132.8L0 48h137.7l84.6 127.5L389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                            </svg>
                                        </a>
                                        {/* Google Play */}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-current"
                                            href="https://play.google.com/store/apps/details?id=com.hundredx.devs"
                                        >
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play"
                                                className="w-6 h-6" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                            </svg>
                                        </a>
                                        {/* YouTube */}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-current"
                                            href="https://www.youtube.com/@harkirat1"
                                        >
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"
                                                className="w-6 h-6" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor"
                                                    d="M549.6 124.1c-6.3-23.6-24.8-42.1-48.2-48.3C456.8 64 288 64 288 64S119.2 64 74.6 75.7c-23.4 6.2-41.9 24.7-48.2 48.3C16 168.8 16 256 16 256s0 87.2 10.4 131.9c6.3 23.6 24.8 42.1 48.2 48.3C119.2 448 288 448 288 448s168.8 0 213.4-11.7c23.4-6.2 41.9-24.7 48.2-48.3C560 343.2 560 256 560 256s0-87.2-10.4-131.9zm-318 212.9V175l142.7 81-142.7 81z" />
                                            </svg>
                                        </a>
                                        {/* Instagram */}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-current"
                                            href="https://www.instagram.com/kirat_ins/"
                                        >
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                                className="w-6 h-6" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor"
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.8 26.9s-26.8-12-26.8-26.9 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[20px]">

                            </div>




                        </div>
                    </div>

                </div>

            </div>




        </>
    );
}
