import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8083/api/courses/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourse(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-10 ml-28">Loading course details...</p>;
  if (!course) return <p className="p-10 ml-28">Course not found</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-28 p-10">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-500 mb-4">
            {course.subject} • {course.level}
          </p>

          <p className="mb-6 text-gray-700">{course.fullDescription}</p>

          {/* WHAT YOU WILL LEARN */}
          <h2 className="text-xl font-semibold mb-3">What you will learn</h2>
          <ul className="list-disc ml-6 mb-6">
            {course.whatYouWillLearn?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* PREREQUISITES */}
          <h2 className="text-xl font-semibold mb-3">Prerequisites</h2>
          <ul className="list-disc ml-6 mb-6">
            {course.prerequisites?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* META INFO */}
          <div className="flex gap-6 text-sm text-gray-600">
            <span>⏱ {course.duration}</span>
            <span>📚 {course.totalLessons} lessons</span>
            {course.certificate && <span>🏆 Certificate Included</span>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
