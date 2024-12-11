import { useEffect } from "react";
import { addClassroom } from "../features/classroomSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassrooms } from "../utils/classroom";

export const useClassrooms = () => {
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classroom.classrooms);
  const getClassrooms = async () => {
    if (!classrooms || classrooms.length === 0) {
      const classroomData = await fetchClassrooms();
      dispatch(addClassroom(classroomData));
    }
  };

  useEffect(() => {
    getClassrooms();
  }, [classrooms]);
};
