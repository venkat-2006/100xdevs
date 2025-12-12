import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Signup from "../others/Signup";
import Login from "../others/Login";
import SettingsPopup from "../others/SettingsPopup";

import { logoutUser } from "../utils/logoutUser";
import { useAuth } from "../context/AuthContext";


import PurchasePopup from "../others/PurchasePopup";
import { SECRET_PURCHASE_CODE, auth } from "../firebase";


import { doc, setDoc, getDoc } from "firebase/firestore";

import { db } from "../firebase";


import COURSES from "../data/courses";

export default function CoursePage() {

  const [active, setActive] = useState("courses");

  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [openPurchasePopup, setOpenPurchasePopup] = useState(false);


  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Read course ID
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);

  // Currency conversion state
  const [currency, setCurrency] = useState("INR");
  const [convertedPrice, setConvertedPrice] = useState(course.price);

  // INR → Other currency conversion rates
  const rates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    AED: 0.044,
    GBP: 0.0096,
    AUD: 0.018,
    CAD: 0.017,
    SGD: 0.016,
    JPY: 1.86,
    CHF: 0.011,
    CNY: 0.087,
    HKD: 0.095,
    NZD: 0.02,
    ZAR: 0.22,
    THB: 0.43,
    MYR: 0.056,
    KRW: 16.08,
    SEK: 0.13,
    NOK: 0.13,
    DKK: 0.083,
    BRL: 0.059,
    RUB: 1.11,
    MXN: 0.20
  };

  // Handle dropdown change
  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    setCurrency(selected);

    const converted = (course.price * rates[selected]).toFixed(2);
    setConvertedPrice(converted);
  };


  // Logout function
  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      alert("Logged out successfully!");
    } catch (err) {
      alert(err.message);
    }
  };
const handlePurchase = async (enteredCode) => {
  try {
    if (enteredCode !== SECRET_PURCHASE_CODE) {
      alert("Invalid Purchase Code!");
      return;
    }

    if (!auth.currentUser) {
      alert("You must login before purchasing.");
      return;
    }

    const uid = auth.currentUser.uid;

    const purchaseRef = doc(db, "users", uid, "purchases", course.id);
    const existing = await getDoc(purchaseRef);

    //  Check if already purchased
    if (existing.exists()) {
      alert("You have already purchased this course!");
      setOpenPurchasePopup(false);
      return;
    }

    //  Create new purchase
    await setDoc(purchaseRef, {
      courseId: course.id,
      title: course.title,
      image: course.image,
      purchasedAt: new Date().toISOString(),
    });

    alert("Purchase Successful!");
    setOpenPurchasePopup(false);
  } catch (err) {
    alert(err.message);
  }
};



  return (
    <>
      {/* ===== POPUPS ===== */}
      {openSignup && <Signup onClose={() => setOpenSignup(false)} />}
      {openLogin && <Login onClose={() => setOpenLogin(false)} />}
      {openSettings && <SettingsPopup onClose={() => setOpenSettings(false)} />}
      {openPurchasePopup && (
        <PurchasePopup
          onClose={() => setOpenPurchasePopup(false)}
          onConfirm={handlePurchase}
        />
      )}


      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="w-full px-4 py-2 flex items-center">

          {/* Logo */}
          <img
            src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />

          {/* Right side */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Search */}
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
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="5" />
                  <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* Auth Buttons */}
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

            {/* User Icon */}
            {isLoggedIn && (
              <div className="w-10 h-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="22" fill="black" />
                  <circle cx="24" cy="16" r="6" fill="white" />
                  <path d="M12 36 C12 28, 20 26, 24 26 C28 26, 36 28, 36 36 Z" fill="white" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ===== BODY ===== */}
      <div className="pt-[60px]">
        <div>

          {/* Sidebar */}
          <div className="fixed left-0 top-[60px] w-[18%] bg-blue-100 h-[calc(100vh-60px)] overflow-auto">

            <div className="pt-[40px] pl-7">MAIN MENU</div>

            {/* Home */}
            <div className="pt-[30px] pl-7">
              <Link
                to="/home"
                onClick={() => setActive("home")}
                className="flex items-center cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${active === "home" ? "text-blue-600" : "text-gray-700"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5V14h4v7h5a1 1 0 001-1V10"
                  />
                </svg>

                <div className={`pl-3 ${active === "home" ? "text-blue-600 font-medium" : "text-gray-700"}`}>
                  Home
                </div>
              </Link>
            </div>

            {/* Courses */}
            <div className="pt-[30px] pl-7">
              <Link
                to="/all-courses"
                onClick={() => setActive("courses")}
                className="flex items-center cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 14L2 9l10-5 10 5-10 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 10v6a6 6 0 0012 0v-6" />
                </svg>

                <div className="pl-3 text-gray-700">Courses</div>
              </Link>
            </div>

            {/* Logged In Options */}
            {isLoggedIn && (
              <>
                {/* Divider */}
                <div className="py-[10px] pt-9 flex justify-center">
                  <hr className="w-[80%] border-gray-300" />
                </div>
                {/* Purchases */}
                <div className="pt-[30px] pl-7">
                  <Link
                    to="/purchases"
                    onClick={() => setActive("purchases")}
                    className="flex items-center cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 19h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    </svg>

                    <div
                      className={`pl-3 ${active === "purchases"
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                        }`}
                    >
                      Purchases
                    </div>
                  </Link>
                </div>

                {/* Settings */}
                <div className="pt-[30px] pl-7">
                  <div
                    onClick={() => {
                      setActive("settings");
                      setOpenSettings(true);
                    }}
                    className="flex items-center cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" width="24" height="24"
                      fill="currentColor"
                      className={`${active === "settings" ? "text-blue-600" : "text-gray-700"}`}
                    >
                      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .11-.65l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.027 7.027 0 0 0-1.62-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.41l-.36 2.54c-.6.23-1.15.54-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22L2.71 8.83a.5.5 0 0 0 .11.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.11.65l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96c.47.39 1.02.71 1.62.94l.36 2.54a.5.5 0 0 0 .49.41h3.8a.5.5 0 0 0 .49-.41l.36-2.54c.6-.23 1.15-.54 1.62-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.11-.65l-2.03-1.58ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                    </svg>

                    <div
                      className={`pl-3 ${active === "settings"
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                        }`}
                    >
                      Settings
                    </div>
                  </div>
                </div>

                {/* Logout */}
                <div className="pt-[30px] pl-8">
                  <div
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="none"
                      className="size-5"
                      stroke="currentColor" strokeWidth="2"
                    >
                      <path
                        d="M16 17l5-5-5-5m-9 5h14M3 3h6v18H3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="pl-3 text-gray-700 hover:text-blue-600 font-medium">
                      Logout
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* RIGHT CONTENT */}
          <div className="ml-[18%] px-0 h-[calc(100vh-60px)] overflow-y-scroll">

            {!course ? (
              <div className="text-gray-700 text-lg pt-10 px-6">
                Select a course to view details
              </div>
            ) : (
              <>
                {/* Everything below stays same as your UI */}
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

                          <select
                            value={currency}
                            onChange={handleCurrencyChange}
                            className="border rounded-lg px-2 py-1 bg-white w-[85px] text-sm"
                          >

                            <option>INR</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>AED</option>
                            <option>GBP</option>
                            <option>AUD</option>
                            <option>CAD</option>
                            <option>SGD</option>
                            <option>JPY</option>
                            <option>CHF</option>
                            <option>CNY</option>
                            <option>HKD</option>
                            <option>NZD</option>
                            <option>ZAR</option>
                            <option>THB</option>
                            <option>MYR</option>
                            <option>KRW</option>
                            <option>SEK</option>
                            <option>NOK</option>
                            <option>DKK</option>
                            <option>BRL</option>
                            <option>RUB</option>
                            <option>MXN</option>

                          </select>
                        </div>

                        {/* BUTTONS SECTION */}
                        <div className="mt-3 font-semibold text-blue-900">
                          Total in {currency} (approx.): {convertedPrice}
                        </div>

                        <div className="mt-3 flex flex-col items-center gap-3">

                          <button
                            onClick={() => setOpenPurchasePopup(true)}
                            className="
    w-[100%] bg-blue-600 text-white py-3 rounded-full 
    font-semibold hover:bg-blue-700 transition text-center
  "
                          >
                            Buy Now
                          </button>


                          <button
                            onClick={() => setOpenPurchasePopup(true)}
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

                <hr />

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
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
