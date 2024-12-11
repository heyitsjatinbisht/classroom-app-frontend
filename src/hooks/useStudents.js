import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../utils/users";
import { addStudent } from "../features/studentSlice";
import { useEffect } from "react";

export const useStudents = () => {
  const students = useSelector((store) => store.students);
  const dispatch = useDispatch();

  const getStudents = async () => {
    try {
      const users = await fetchUsers();
      const studentData = users.filter((user) => user.role === "Student");

      dispatch(addStudent(studentData));
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  useEffect(() => {
    if (!students) {
      getStudents();
    }
  }, [students]);
};
