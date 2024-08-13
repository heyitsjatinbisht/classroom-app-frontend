import React, { useState, useEffect } from "react";
import TeacherList from "../components/TeacherList";
import { getUsers } from "../services/userService";

const ViewTeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await getUsers();
        setTeachers(res.data.filter((user) => user.role === "Teacher"));
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Teachers</h1>
      <TeacherList teachers={teachers} />
    </div>
  );
};

export default ViewTeachersPage;
