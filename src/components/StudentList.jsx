import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser, deleteUser } from "../features/userSlice";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) =>
    state.user.users.filter((user) => user.role === "Student")
  );
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  const handleUpdate = async (id, updatedData) => {
    try {
      await dispatch(updateUser({ userId: id, updatedData })).unwrap();
    } catch (error) {
      console.error("Failed to update student:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await dispatch(deleteUser(id)).unwrap();
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
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default StudentList;
