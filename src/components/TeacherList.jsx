import React from "react";
import { useTeacher } from "../hooks/useTeacher";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../utils/users";
import { removeTeacher } from "../features/teacherSlice";

const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((store) => store.teachers);
  useTeacher();

  async function deleteTeacher(id) {
    await deleteUser(id);
    dispatch(removeTeacher(id));
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
          {teachers?.map((teacher) => (
            <tr key={teacher._id}>
              <td className="w-1/3 py-3 px-4">{teacher.fullName}</td>
              <td className="w-1/3 py-3 px-4">{teacher.email}</td>
              <td className="w-1/3 py-3 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteTeacher(teacher._id)}
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

export default TeacherList;
