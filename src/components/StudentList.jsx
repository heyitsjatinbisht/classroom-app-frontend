import React, { useState, useEffect } from "react";
import { getUsers, updateUser, deleteUser } from "../services/userService";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await getUsers();

        setusers(res.data);
        const studentList = users.filter((user) => user.role === "Student");

        setStudents(studentList);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };

    fetchStudents();
  }, [setStudents, students]);

  const handleUpdate = async (id, updatedData) => {
    try {
      const updatedStudent = await updateUser(id, updatedData);
      setStudents(
        students.map((student) =>
          student._id === id ? updatedStudent : student
        )
      );
    } catch (error) {
      console.error("Failed to update student:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteUser(id);
        setStudents(students.filter((student) => student._id !== id));
      } catch (error) {
        console.error("Failed to delete student:", error);
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
          {students.map((student) => (
            <tr key={student._id}>
              <td className="w-1/3 py-3 px-4">{student.fullName}</td>
              <td className="w-1/3 py-3 px-4">{student.email}</td>
              <td className="w-1/3 py-3 px-4">
                <button
                  onClick={() =>
                    handleUpdate(student._id, {
                      /* pass updatedData here */
                    })
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(student._id)}
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

export default StudentList;
