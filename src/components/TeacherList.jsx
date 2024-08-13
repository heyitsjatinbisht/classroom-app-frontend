import React, { useState, useEffect } from "react";
import { getUsers, updateUser, deleteUser } from "../services/userService";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await getUsers();

        setUsers(res.data);
        const teacherList = users.filter((user) => user.role === "Teacher");
        setTeachers(teacherList);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };

    fetchTeachers();
  }, [setTeachers, teachers]);

  const handleUpdate = async (id, updatedData) => {
    try {
      const updatedTeacher = await updateUser(id, updatedData);
      setTeachers(
        teachers.map((teacher) =>
          teacher._id === id ? updatedTeacher : teacher
        )
      );
    } catch (error) {
      console.error("Failed to update teacher:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await deleteUser(id);
        setTeachers(teachers.filter((teacher) => teacher._id !== id));
      } catch (error) {
        console.error("Failed to delete teacher:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Email
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td className="w-1/3 py-3 px-4">{teacher.fullName}</td>
              <td className="w-1/3 py-3 px-4">{teacher.email}</td>
              <td className="w-1/3 py-3 px-4">
                <button
                  onClick={() =>
                    handleUpdate(teacher._id, {
                      /* pass updatedData here */
                    })
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(teacher._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
