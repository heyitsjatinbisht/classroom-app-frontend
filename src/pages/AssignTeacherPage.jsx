import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchUsers } from "../features/userSlice";
import {
  fetchClassrooms,
  assignTeacherToClassroom,
} from "../features/classroomSlice";

const AssignTeacherPage = () => {
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const dispatch = useDispatch();

  const { classrooms } = useSelector((state) => state.classroom);
  const { users: allUsers } = useSelector((state) => state.user);
  const teachers = allUsers.filter((user) => user.role === "Teacher");

  useEffect(() => {
    dispatch(fetchClassrooms());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClassroom || !selectedTeacher) {
      toast.error("Please select both a classroom and a teacher.");
      return;
    }

    try {
      const payload = {
        classroomId: selectedClassroom,
        teacherId: selectedTeacher,
      };

      await dispatch(assignTeacherToClassroom(payload)).unwrap();
      toast.success("Teacher assigned successfully!");
    } catch (error) {
      toast.error(error || "Failed to assign teacher.");
    }
  };

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
            {classrooms.map((classroom) => (
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
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
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
          Assign Teacher
        </button>
      </form>
    </div>
  );
};

export default AssignTeacherPage;
