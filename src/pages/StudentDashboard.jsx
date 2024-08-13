// StudentDashboard.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ViewOtherStudentsPage from "./ViewOtherStudentsPage";
import ViewTimetablePage from "./ViewTimetablePage";

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          to="view-other-students"
          className="p-4 bg-yellow-500 text-white text-center cursor-pointer rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          View Other Students
        </Link>
        <Link
          to="view-timetable"
          className="p-4 bg-indigo-500 text-white text-center cursor-pointer rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          View Timetable
        </Link>
      </div>
      <Routes>
        <Route path="view-other-students" element={<ViewOtherStudentsPage />} />
        <Route path="view-timetable" element={<ViewTimetablePage />} />
      </Routes>
    </div>
  );
};

export default StudentDashboard;
