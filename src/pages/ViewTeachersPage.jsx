import React, { useState, useEffect } from "react";
import TeacherList from "../components/TeacherList";

const ViewTeachersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Teachers</h1>
      <TeacherList />
    </div>
  );
};

export default ViewTeachersPage;
