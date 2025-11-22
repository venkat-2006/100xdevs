import React from "react";

export default function CourseCard({ course, onView }) {
  return (
    <div className="w-[360px] bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden flex flex-col">

      {/* IMAGE */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-5 flex flex-col flex-grow">

        {/* TITLE */}
        <h3 className="text-[18px] font-semibold leading-tight">
          {course.title}
        </h3>

        {/* SHORT DESCRIPTION (fixed height for uniform cards) */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2 h-[42px] overflow-hidden">
          {course.description}
        </p>

        {/* PRICE ROW */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-lg font-bold">₹{course.price}</span>
          <span className="text-gray-500 line-through text-sm">₹{course.originalPrice}</span>
          <span className="text-green-600 text-sm font-semibold ml-auto">
            {course.discount} off
          </span>
        </div>

        {/* BUTTON — stays at the bottom */}
        <button
          className="w-full mt-auto bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition mt-6"
          onClick={() => onView(course.id)}
        >
          View Details
        </button>

      </div>
    </div>
  );
}
