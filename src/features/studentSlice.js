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
    updateStudent: (state, action) => {
      const { id, changes } = action.payload;
      const studentIndex = state.findIndex((student) => student._id === id);
      if (studentIndex !== -1) {
        state[studentIndex] = { ...state[studentIndex], ...changes };
      }
    },
  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
