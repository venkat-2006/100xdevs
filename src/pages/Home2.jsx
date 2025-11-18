import { useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../others/ImageSlider";

export default function Home2() {
    const [active, setActive] = useState("home");

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

                        <div className="space-y-10 pt-11">

                            <ImageSlider />

                            <h3 className="text-center text-3xl font-semibold">Featured</h3>

                            <div className="flex justify-center gap-5 flex-wrap mt-6">


                                <div className="w-[350px] bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
                                    <img
                                        src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png"
                                        alt="Complete Web Development + Devops + Blockchain Cohort"
                                        className="w-full h-[200px] object-cover"
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


                                <div className="w-[350px] bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                                    <img
                                        src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png"
                                        alt="Complete Web Development + Devops + Blockchain Cohort"
                                        className="w-full h-[200px] object-cover"
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
                                        className="w-full h-[200px] object-cover"
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
                                className="m-[50px] p-[15px] rounded-3xl space-y-4"
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
                                    <span className="font-semibold"> 100x Engineer </span>.
                                </div>


                                <div className="m-[10px] pb-5 ">
                                    Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.</div>

                            </div>




                            <p>Line 18</p>
                            <p>Line 19</p>
                            <p>Line 20</p>
                        </div>
                    </div>

                </div>

            </div>




        </>
    );
}
