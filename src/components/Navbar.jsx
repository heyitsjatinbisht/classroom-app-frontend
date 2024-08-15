import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const renderPrincipalLinks = () => (
    <>
      <Link
        to="/principal-dashboard/create-classroom"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        Create Classroom
      </Link>
      <Link
        to="/principal-dashboard/manage-timetable"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        Manage Timetable
      </Link>
      <Link
        to="/principal-dashboard/assign-teacher"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        Assign Teacher
      </Link>
      <Link
        to="/principal-dashboard/view-teachers"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        View Teachers
      </Link>
      <Link
        to="/principal-dashboard/view-students"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        View Students
      </Link>
    </>
  );

  const renderTeacherLinks = () => (
    <>
      <Link
        to="/teacher-dashboard/view-students"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        View Students
      </Link>
      <Link
        to="/teacher-dashboard/manage-timetable"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        Manage Timetable
      </Link>
    </>
  );

  const renderStudentLinks = () => (
    <>
      <Link
        to="/student-dashboard/view-students"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        View Students
      </Link>
      <Link
        to="/student-dashboard/view-timetable"
        className="text-white px-4 py-2 hover:bg-gray-700 rounded"
      >
        View Timetable
      </Link>
    </>
  );

  const renderLinks = () => {
    switch (role) {
      case "Principal":
        return renderPrincipalLinks();
      case "Teacher":
        return renderTeacherLinks();
      case "Student":
        return renderStudentLinks();
      default:
        return null;
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          {role === "Principal" && "Principal Dashboard"}
          {role === "Teacher" && "Teacher Dashboard"}
          {role === "Student" && "Student Dashboard"}
        </div>
        <div className="flex items-center space-x-4">
          {renderLinks()}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
