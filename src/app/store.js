import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import classroomReducer from "../features/classroomSlice";

const store = configureStore({
  reducer: {
    user: userReducer,

    classroom: classroomReducer,
  },
});

export default store;
