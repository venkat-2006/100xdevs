import React, { useState } from "react";
import { COURSES } from "../data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  function handleView(id) {
    setSelectedCourse(id);
    console.log("Selected course →", id);
    // later: open modal OR navigate to a course details page
  }

  return (
    <>
      <div className="text-center text-2xl font-semibold mt-10">
        Courses
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-6 flex-wrap mt-6">
        {COURSES.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onView={handleView}
          />
        ))}
      </div>
    </>
  );
}
