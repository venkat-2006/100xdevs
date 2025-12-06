import { useState } from "react";
import { Link, useParams } from "react-router-dom";   // ⬅️ useParams added
import Signup from "../others/Signup";
import { useAuth } from "../context/AuthContext";


import COURSES from "../data/courses";

export default function JoinNow() {
  const [active, setActive] = useState("courses");
  const [openSignup, setOpenSignup] = useState(false);

  const { isLoggedIn } = useAuth();

  //  read /courses/:id
  const { id } = useParams();

  //  find selected course data
  const course = COURSES.find(c => c.id === id);



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
                  className={`h-5 w-5 ${"text-gray-700"
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
                  className={`pl-3 ${ "text-gray-700"
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
                <div className="pt-[30px] pl-8">
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
          <div className="ml-[18%] px-0 h-[calc(100vh-60px)] overflow-y-scroll">

            {!course ? (
              <div className="text-gray-700 text-lg pt-10 px-6">
                Select a course to view details
              </div>
            ) : (

              <>

                <div className="bg-blue-800 text-white px-6 py-12 relative h-[310px]">
                  <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold leading-[1.5] max-w-3xl w-[600px] pl-7 ">
                      {course.title}
                    </h1>
                  </div>
                </div>

                {/* FLOATING CARD */}
                <div className="relative max-w-6xl mx-auto">
                  <div className="absolute right-0 -top-[260px] w-full md:w-[400px]">   {/* 400px width */}

                    <div className="text-black rounded-2xl shadow-xl bg-blue-100 pb-6 border border-gray-300">

                      {/* IMAGE */}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-t-2xl w-full h-[230px] object-cover"
                      />

                      <div className="mt-5 px-4">

                        {/* PRICE LABEL */}
                        <div className="text-gray-400 text-xs">PRICE</div>

                        {/* PRICE ROW */}
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">₹{course.price}</span>
                            <span className="line-through text-gray-400 text-md">
                              ₹{course.originalPrice}
                            </span>
                          </div>

                          <span className="text-green-600 text-md font-semibold">
                            {course.discount} off
                          </span>
                        </div>

                        {/* CURRENCY SELECT */}
                        <div className="mt-4 text-sm font-semibold text-gray-700 flex items-center justify-between">
                          <span>Choose Currency:</span>

                          <select className="border rounded-lg px-2 py-1 bg-white w-[85px] text-sm">
                            <option>INR</option>
                            <option>USD</option>
                            <option>EUR</option>
                          </select>
                        </div>

                        {/* BUTTONS SECTION */}
                        <div className="mt-3 flex flex-col items-center gap-3">

                          <button
                            className="
              w-[100%] bg-blue-600 text-white py-3 rounded-full 
              font-semibold hover:bg-blue-700 transition text-center
            "
                          >
                            Buy Now
                          </button>

                          <button
                            className="
              w-[100%] bg-blue-600 text-white py-3 rounded-full
              font-semibold hover:bg-blue-700 transition text-center
            "
                          >
                            Pay via Crypto
                          </button>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* 🔻 DETAILS SECTION */}
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-10">

                  {/* Overview tab */}
                  <div className="border-b pb-2 mb-6">
                    <button className="text-blue-700 font-semibold text-lg border-b-2 border-blue-700 pb-2">
                      Overview
                    </button>
                  </div>

                  {/* Description */}
                  <div className="text-lg leading-relaxed text-gray-800 ">
                    <div className="font-bold text-xl mb-3">Description</div>


                    <p className="text-gray-700 mb-4 ml-5">
                      Complete syllabus —{" "}
                      <a
                        href={course.syllabus}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        {course.syllabus}
                      </a>
                    </p>
                    {course.startDate && (
                      <p className="mt-5 font-semibold text-gray-900 ml-5">
                        Starts on: {course.startDate}
                      </p>
                    )}

                    {/* 🔽 Updated Dummy Description Text */}
                    <p className="text-gray-700 whitespace-pre-line  ml-5">

                      {`In the Web Development Cohort, we will dive deep into the MERN stack from basics.
The goal is for you to understand any real-world MERN codebase.

We will also explore DevOps fundamentals and advanced concepts.

In the Web3 cohort, we will go from 0–100 in Solana and Ethereum blockchain development.



WEB DEVELOPMENT
• Foundations
• Frontend DOM
• Node.js/Bun/Cloudflare Runtime
• HTTP Servers
• NoSQL & SQL Databases
• ORMs
• React + Styling
• TypeScript
• Next.js
• Monorepos / Turborepo / linting
• WebSockets / realtime systems
• Testing
• Advanced backend architecture



DEVOPS
• Linux & Bash scripting
• EC2 / GCP / cloud compute
• Auto scaling
• Containerization
• ECS → Kubernetes
• IaC / Terraform
• Observability / monitoring
• Helm package management
• CI/CD pipelines
• GitOps
• CDNs & Object stores



WEB3 BASICS
• General Web3
• EVM understanding
• ETH client-side apps
• Solana development
• Solana Data model



WEB3 ADVANCE
• Solidity basics & advanced smart contract development
• Rust basics & advanced
• Solana on-chain programs
• Fullstack Web2 + Web3 usecases



PROJECTS & CONTRACTS
FRONTEND
• TODO app (DOM manipulation)
• Gmail clone

FULLSTACK
• Excalidraw
• Simple Chat app
• Realtime game (Chess/Ludo)
• Codeforces/LeetCode clone
• Production-level realtime app

WEB3 BASIC
• Wallet creation & integration
• Token creation & transfer
• Solana cloud wallet backend

WEB3 ADVANCE
• Web3 Stripe-like crypto gateway
• Crypto exchange website
• BonkBot automation (TG/WA)

ETH CONTRACTS
• ERC20 + ERC721
• DEX using AMM
• Staking Contract

SOLANA CONTRACTS
• Token program
• Staking programs
• Web2-style backend apps on Solana`}
                    </p>



                    {/* Optional Topics */}
                    {course.topics && (
                      <div className="mt-6">
                        <h2 className="text-xl font-semibold">Topics Included:</h2>
                        <ul className="list-disc ml-6 text-gray-600">
                          {course.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                </div>


              </>
            )}

          </div>


        </div>

      </div>




    </>
  );
}
