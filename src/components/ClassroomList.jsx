import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimetableForm from "./TimetableForm";
import {
  fetchClassrooms,
  selectClassroom,
  selectShowForm,
} from "../features/classroomSlice";

const ClassroomList = () => {
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classroom.classrooms);
  const selectedClassroom = useSelector(selectClassroom);
  const showForm = useSelector(selectShowForm);

  useEffect(() => {
    dispatch(fetchClassrooms());
  }, [dispatch]);

  const handleAddTimetableClick = (classroomId) => {
    dispatch(selectClassroom({ classroomId, showForm: true }));
  };

  const handleCloseForm = () => {
    dispatch(selectClassroom({ classroomId: null, showForm: false }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Classroom List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Classroom Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {classrooms.map((classroom) => (
            <tr key={classroom._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classroom.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                <button
                  onClick={() => handleAddTimetableClick(classroom._id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Add Timetable
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && selectedClassroom && (
        <TimetableForm
          classroomId={selectedClassroom}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default ClassroomList;
