import api from "./api";

// Create a new classroom (Principal only)
export const createClassroom = async (classroomData) => {
  const response = await api.post("/classroom/", classroomData);
  return response.data;
};

// Assign a teacher to a classroom (Principal only)
export const assignTeacherToClassroom = async (assignmentData) => {
  const response = await api.post("/classroom/assign-teacher", assignmentData);
  return response.data;
};

// Assign students to a classroom (Principal or Teacher)
export const assignStudentsToClassroom = async (assignmentData) => {
  const response = await api.post("/classroom/assign-students", assignmentData);
  return response.data;
};

// Create a timetable entry for a classroom (Teacher only)
export const createTimetable = async (classroomId, timetableData) => {
  const response = await api.post(
    `/classroom/${classroomId}/timetables`,
    timetableData
  );
  return response.data;
};

// Get all classrooms (Principal only)
export const getClassrooms = async () => {
  const response = await api.get("/classroom/");
  return response.data;
};

// Get classroom details (Student only)
export const getClassroomDetails = async () => {
  const response = await api.get("/classroom/classroom-details");
  return response.data;
};

// Get students by classroom (Student view)
export const getStudentsByClassroom = async (classroomId) => {
  const response = await api.get(`/classroom/${classroomId}/students`);
  return response.data;
};

// Get timetable (Student view)
export const getTimetable = async (classroomId) => {
  const response = await api.get(`/classroom/${classroomId}/timetable`);
  return response.data;
};
