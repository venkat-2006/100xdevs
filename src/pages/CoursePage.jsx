import { useParams } from "react-router-dom";
import { COURSES } from "../data/courses";

export default function CoursePage() {
  const { id } = useParams();
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Course not found.
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* ===========================
           BLUE HEADER SECTION
      ============================ */}
      <div className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
          
          {/* LEFT — TITLE */}
          <h1 className="text-4xl font-bold leading-tight max-w-2xl">
            {course.title}
          </h1>

          {/* RIGHT — IMAGE CARD */}
          <div className="bg-white text-black rounded-xl shadow-xl p-5 w-full md:w-[380px] mt-6 md:mt-0">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-xl w-full h-[180px] object-cover"
            />

            <div className="mt-4">
              <div className="text-gray-600 text-sm">PRICE</div>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-2xl font-bold">₹{course.price}</span>
                <span className="line-through text-gray-500 text-md">
                  ₹{course.originalPrice}
                </span>
                <span className="text-green-600 text-md font-semibold">
                  {course.discount} off
                </span>
              </div>

              {/* Currency selector (dummy) */}
              <div className="mt-4 text-sm">Choose Currency:</div>
              <select className="w-full border rounded-lg px-3 py-2 mt-1">
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>

              {/* PURCHASE BUTTON */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-5 hover:bg-blue-700">
                Buy Now
              </button>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold mt-3 hover:bg-green-700">
                Pay via Crypto
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* ===========================
           COURSE DETAILS SECTION
      ============================ */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Tabs (only Overview for now) */}
        <div className="border-b pb-2 mb-6">
          <button className="text-blue-700 font-semibold text-lg border-b-2 border-blue-700 pb-2">
            Overview
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="text-lg leading-relaxed text-gray-800">
          <div className="font-bold text-xl mb-3">Description</div>

          <p className="text-gray-700 mb-4">
            Complete syllabus –{" "}
            <a
              href={course.syllabus}
              target="_blank"
              className="text-blue-600 underline"
              rel="noreferrer"
            >
              {course.syllabus}
            </a>
          </p>

          <p className="text-gray-700 whitespace-pre-line">
            {course.description}
          </p>

          {course.startDate && (
            <p className="mt-5 font-semibold text-gray-900">
              Starts on: {course.startDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
