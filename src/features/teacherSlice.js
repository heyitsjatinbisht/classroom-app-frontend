import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teachers",
  initialState: null,
  reducers: {
    addTeacher: (state, action) => {
      return action.payload;
    },
    removeTeacher: (state, action) => {
      return state.filter((teacher) => teacher._id !== action.payload);
    },
  },
});

export const { addTeacher, removeTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
