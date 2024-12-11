import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClassrooms } from "../hooks/useClassrooms";
import { assignStudentsToClassroom } from "../utils/classroom";
import { toast } from "react-toastify";
import { useStudents } from "../hooks/useStudents";
import { updateStudent } from "../features/studentSlice";

const AssignStudent = () => {
  const dispatch = useDispatch();
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

  const classrooms = useSelector((store) => store.classroom.classrooms);
  const students = useSelector((store) => store.students);
  useClassrooms();
  useStudents();

  const filteredStudents = students?.filter(
    (student) => !student.assignedClassroom
  );

  const handleStudentSelection = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedStudents(selected);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (selectedClassroom && selectedStudents) {
        const res = await assignStudentsToClassroom(
          selectedStudents,
          selectedClassroom
        );

        selectedStudents?.forEach((id) => {
          dispatch(
            updateStudent({
              id,
              changes: { assignedClassroom: selectedClassroom },
            })
          );
        });

        setSelectedClassroom("");
        setSelectedStudents([]);
        toast.success("Class Assigned");
      }
    } catch (error) {
      toast.error(error.response?.data.message || "Something went wrong");

      setSelectedClassroom("");
      setSelectedStudents("");
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
            htmlFor="students"
            className="block text-sm font-medium text-gray-700"
          >
            Students
          </label>
          <select
            id="students"
            multiple
            value={selectedStudents}
            onChange={handleStudentSelection}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            {filteredStudents?.map((student) => (
              <option key={student._id} value={student._id}>
                {student.fullName}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Hold <strong>Ctrl</strong> (or Command on Mac) to select multiple
            students.
          </p>
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
