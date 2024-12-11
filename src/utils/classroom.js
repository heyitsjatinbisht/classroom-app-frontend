import api from "../services/api";

export const createClassroom = async (classroomData) => {
  const response = await api.post("/classroom/", classroomData);
  return response.data.data;
};

export const assignTeacherToClassroom = async (classroomId, teacherId) => {
  const response = await api.post("/classroom/assign-teacher", {
    classroomId,
    teacherId,
  });

  return response.data.data;
};

export const assignStudentsToClassroom = async (studentIds, classroomId) => {
  const response = await api.post("/classroom/assign-students", {
    studentIds,
    classroomId,
  });
  return response.data.data;
};

export const fetchClassrooms = async () => {
  const response = await api.get("/classroom/");

  return response.data.data;
};
