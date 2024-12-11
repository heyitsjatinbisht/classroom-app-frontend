import { createSlice } from "@reduxjs/toolkit";

const classroomSlice = createSlice({
  name: "classroom",
  initialState: {
    classrooms: [],
    selectedClassroom: null,
    showForm: false,
  },
  reducers: {
    addClassroom: (state, action) => {
      state.classrooms = action.payload;
    },
    selectClassroom: (state, action) => {
      state.selectedClassroom = action.payload.classroomId;
      state.showForm = action.payload.showForm;
    },
  },
});

export const { addClassroom, selectClassroom } = classroomSlice.actions;
export default classroomSlice.reducer;
