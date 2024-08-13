import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ViewStudentsPage from "./ViewStudentsPage";
import CreateTimetablePage from "./CreateTimetablePage";

const TeacherDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          to="view-students"
          className="p-4 bg-yellow-500 text-white text-center cursor-pointer rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          View Students
        </Link>
        <Link
          to="create-timetable"
          className="p-4 bg-indigo-500 text-white text-center cursor-pointer rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Create Timetable
        </Link>
      </div>
      <Routes>
        <Route path="view-students" element={<ViewStudentsPage />} />
        <Route path="create-timetable" element={<CreateTimetablePage />} />
      </Routes>
    </div>
  );
};

export default TeacherDashboard;
