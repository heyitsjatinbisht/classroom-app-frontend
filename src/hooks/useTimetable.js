import { useEffect, useState } from "react";
import { fetchTimetable } from "../utils/timetable";
import { useSelector } from "react-redux";

export const useTimetable = () => {
  const user = useSelector((store) => store.user);

  const [timetable, setTimetable] = useState([]);

  console.log(user);

  const getTimetable = async () => {
    console.log("Call");
    try {
      const data = await fetchTimetable(user.assignedClassroom);
      console.log(data);
      setTimetable(data);
    } catch (error) {
      console.error("Failed to fetch timetable:", error);
    }
  };

  useEffect(() => {
    if (user && user.assignedClassroom) {
      console.log(
        "User and assignedClassroom are available, calling getTimetable"
      );
      getTimetable();
    } else {
      console.log("User or assignedClassroom not yet initialized");
    }
  }, [user]);

  return timetable;
};
