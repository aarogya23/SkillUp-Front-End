import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const MyCoursesDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(29);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress] = useState(100); // Change to 100 to trigger celebration
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  // Celebration popup
  useEffect(() => {
    if (progress === 100) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Fetch courses from API using fetch()
  useEffect(() => {
    fetch('http://localhost:8083/api/courses/enrolled')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch courses');
        return res.json();
      })
      .then(data => {
        setEnrolledCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Stat card component
  const StatCard = ({ icon, value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white border rounded-xl p-6 w-36">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <p className="text-xs text-gray-500 text-center">{label}</p>
    </div>
  );

  // Course card component
  const CourseCard = ({ course }) => (
    <div className={`${course.color || 'bg-gray-100'} rounded-xl p-4 flex flex-col gap-2`}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
          {course.icon || '📚'}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-1">{course.title}</h3>
          {course.progress > 0 && (
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span>Progress</span>
              <div className="flex-1 max-w-[100px] bg-white rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )}
          {course.badge && (
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">{course.badge}</span>
          )}
        </div>
      </div>

      {/* Show YouTube videos */}
      {course.videoUrls && course.videoUrls.length > 0 && (
        <div className="flex flex-col gap-1 mt-2">
          {course.videoUrls.map((url, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-xs underline"
            >
              Video {idx + 1}
            </a>
          ))}
        </div>
      )}

      {/* Certificate */}
      {course.certificate && (
        <button className="flex items-center gap-1 bg-white px-2 py-1 rounded hover:bg-gray-50 mt-2">
          <span>🏆</span>
          <span>View Certificate</span>
        </button>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Celebration popup */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 celebration-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl celebration-scaleIn">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <div className="relative inline-block mb-4">
                <div className="text-8xl celebration-wiggle">🏆</div>
                <div className="absolute -top-2 -right-2 text-3xl celebration-spin">✨</div>
                <div className="absolute -bottom-2 -left-2 text-3xl celebration-spin celebration-delay">✨</div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
              <p className="text-xl text-gray-600 mb-4">You've completed 100% of your journey!</p>
              <div className="bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
                <div className="celebration-fillBar bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full"></div>
              </div>
              <p className="text-gray-500 mb-6">You're now a <span className="font-bold text-blue-600">Beginner</span> level achiever!</p>
              <button
                onClick={() => setShowCelebration(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Awesome! 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 px-10 py-6">
        <h1 className="text-3xl font-semibold mb-6">My Courses</h1>

        {loading && <p className="text-gray-500">Loading courses...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {enrolledCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity:0 } to { transform: scale(1); opacity:1 } }
        @keyframes wiggle { 0%,100%{ transform:rotate(-5deg); } 50%{ transform:rotate(5deg); } }
        @keyframes spinSlow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes fillBar { from{width:0%} to{width:100%} }
        .celebration-fadeIn { animation: fadeIn 0.3s ease-out; }
        .celebration-scaleIn { animation: scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1); }
        .celebration-wiggle { animation: wiggle 1s ease-in-out infinite; }
        .celebration-spin { animation: spinSlow 3s linear infinite; }
        .celebration-delay { animation-delay: 0.5s; }
        .celebration-fillBar { animation: fillBar 2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MyCoursesDashboard;
