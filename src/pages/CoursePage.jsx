import { useParams } from "react-router-dom";
import { COURSES } from "../data/courses";

export default function CoursePage() {
  const { id } = useParams();

  // Find matching course
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return <div className="p-10 text-center text-red-600">Course not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold">{course.title}</h1>

      {/* IMAGE */}
      <img
        className="w-full rounded-xl mt-4"
        src={course.image}
        alt={course.title}
      />

      {/* SYLLABUS */}
      <p className="mt-4 text-blue-700 underline cursor-pointer">
        Syllabus → {course.syllabus}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-4 text-gray-700 text-lg leading-relaxed">
        {/* YOU WILL EDIT THIS TEXT INDIVIDUALLY */}
        {course.description}
      </p>

      {/* PRICE */}
      <div className="mt-5 flex items-center gap-3 text-xl font-semibold">
        <span>Price: ₹{course.price}</span>
        <span className="line-through text-gray-500 text-lg">
          ₹{course.originalPrice}
        </span>
        <span className="text-green-600">{course.discount} off</span>
      </div>

      {/* PURCHASE BTN */}
      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl text-lg font-medium">
        Purchase Now
      </button>

    </div>
  );
}
