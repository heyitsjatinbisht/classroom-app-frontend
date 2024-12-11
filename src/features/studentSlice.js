import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: null,
  reducers: {
    addStudent: (state, action) => {
      return action.payload;
    },

    removeStudent: (state, action) => {
      return state.filter((student) => student._id !== action.payload);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
