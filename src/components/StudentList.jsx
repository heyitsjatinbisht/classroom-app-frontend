import React from "react";
import { useStudents } from "../hooks/useStudents";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../utils/users";
import { removeStudent } from "../features/studentSlice";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((store) => store.students);

  useStudents();

  async function deleteStudent(id) {
    await deleteUser(id);
    dispatch(removeStudent(id));
  }

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
          {students?.map((student) => (
            <tr key={student._id}>
              <td className="w-1/3 py-3 px-4">{student.fullName}</td>
              <td className="w-1/3 py-3 px-4">{student.email}</td>
              <td className="w-1/3 py-3 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {error && <p className="text-red-500">{error}</p>} */}
    </div>
  );
};

export default StudentList;
