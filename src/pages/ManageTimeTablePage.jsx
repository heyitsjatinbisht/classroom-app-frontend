import React from "react";
import ClassroomList from "../components/ClassroomList";
import { useSelector } from "react-redux";

const ManageTimetablePage = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="p-6">
      {user?.role === "Teacher" && (
        <h1 className="text-2xl font-bold mb-4">Manage Timetable</h1>
      )}
      <ClassroomList />
    </div>
  );
};

export default ManageTimetablePage;
