import React, { useState, useEffect } from "react";
import StudentList from "../components/StudentList";

const ViewStudentsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Students</h1>
      <StudentList />
    </div>
  );
};

export default ViewStudentsPage;
