import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../utils/users";
import { addTeacher } from "../features/teacherSlice";

export const useTeacher = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((store) => store.teachers);

  const getTeachers = async () => {
    try {
      const users = await fetchUsers();
      const teacherData = users.filter((user) => user.role === "Teacher");
      dispatch(addTeacher(teacherData));
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    }
  };
  useEffect(() => {
    if (!teachers) {
      getTeachers();
    }
  }, [teachers]);
};
