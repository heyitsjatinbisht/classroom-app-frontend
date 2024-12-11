import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useClassrooms } from "../hooks/useClassrooms";
import { assignStudentsToClassroom } from "../utils/classroom";
import { toast } from "react-toastify";
import { useStudents } from "../hooks/useStudents";

const AssignStudent = () => {
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const classrooms = useSelector((store) => store.classroom.classrooms);
  const students = useSelector((store) => store.students);
  useClassrooms();
  useStudents();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (selectedClassroom && selectedStudent) {
        const res = await assignStudentsToClassroom(
          selectedStudent,
          selectedClassroom
        );

        setSelectedClassroom("");
        setSelectedStudent("");
        toast.success("Class Assigned");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");

      setSelectedClassroom("");
      setSelectedStudent("");
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assign Teacher to Classroom</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="classroom"
            className="block text-sm font-medium text-gray-700"
          >
            Classroom
          </label>
          <select
            id="classroom"
            value={selectedClassroom}
            onChange={(e) => setSelectedClassroom(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select Classroom</option>
            {classrooms?.map((classroom) => (
              <option key={classroom._id} value={classroom._id}>
                {classroom.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="teacher"
            className="block text-sm font-medium text-gray-700"
          >
            Teacher
          </label>
          <select
            id="teacher"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select Student</option>
            {students?.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.fullName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Assign Student
        </button>
      </form>
    </div>
  );
};

export default AssignStudent;
