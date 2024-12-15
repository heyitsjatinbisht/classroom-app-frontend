import api from "../services/api";

export const createTimetable = async (classroomId, timetableData) => {
  const response = await api.post(
    `classroom/${classroomId}/timetable`,
    timetableData
  );
  return response.data.data;
};

export const fetchTimetable = async (classroomId) => {
  const response = await api.get(`classroom/${classroomId}/timetable`);

  return response.data.data;
};
