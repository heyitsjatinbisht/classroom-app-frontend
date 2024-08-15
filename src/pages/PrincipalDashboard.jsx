import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ViewTeachersPage from "./ViewTeachersPage";
import ViewStudentsPage from "./ViewStudentsPage";
import RegistrationPage from "./RegisterationPage";
import CreateClassroomPage from "./CreateClassroomPage";
import AssignTeacherPage from "./AssignTeacherPage";
import ManageTimetablePage from "./ManageTimeTablePage";

const PrincipalDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Principal Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          to="create-user"
          className="p-4 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition duration-200"
        >
          Create User
        </Link>
        <Link
          to="create-classroom"
          className="p-4 bg-purple-500 text-white text-center rounded-lg hover:bg-purple-600 transition duration-200"
        >
          Create Classroom
        </Link>
        <Link
          to="manage-timetable"
          className="p-4 bg-indigo-500 text-white text-center rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Manage Timetable
        </Link>
        <Link
          to="assign-teacher"
          className="p-4 bg-red-500 text-white text-center rounded-lg hover:bg-red-600 transition duration-200"
        >
          Assign Teacher
        </Link>
        <Link
          to="view-teachers"
          className="p-4 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition duration-200"
        >
          View Teachers
        </Link>
        <Link
          to="view-students"
          className="p-4 bg-yellow-500 text-white text-center rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          View Students
        </Link>
      </div>
      <Routes>
        <Route path="create-user" element={<RegistrationPage />} />
        <Route path="view-teachers" element={<ViewTeachersPage />} />
        <Route path="view-students" element={<ViewStudentsPage />} />
        <Route path="create-classroom" element={<CreateClassroomPage />} />
        <Route path="assign-teacher" element={<AssignTeacherPage />} />
        <Route path="manage-timetable" element={<ManageTimetablePage />} />
      </Routes>
    </div>
  );
};

export default PrincipalDashboard;
