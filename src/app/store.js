import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import classroomReducer from "../features/classroomSlice";
import teacherReducer from "../features/teacherSlice";
import studentReducer from "../features/studentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    classroom: classroomReducer,
    teachers: teacherReducer,
    students: studentReducer,
  },
});

export default store;
