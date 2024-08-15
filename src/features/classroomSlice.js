import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const createClassroom = createAsyncThunk(
  "classroom/create",
  async (classroomData, thunkAPI) => {
    try {
      const response = await api.post("/classroom/", classroomData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const assignTeacherToClassroom = createAsyncThunk(
  "classroom/assignTeacher",
  async ({ classroomId, teacherId }, thunkAPI) => {
    try {
      const response = await api.post("/classroom/assign-teacher", {
        classroomId,
        teacherId,
      });

      return response.data.data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const assignStudentsToClassroom = createAsyncThunk(
  "classroom/assignStudents",
  async (assignmentData, thunkAPI) => {
    try {
      const response = await api.post(
        "/classroom/assign-students",
        assignmentData
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const createTimetable = createAsyncThunk(
  "classroom/createTimetable",
  async (timetableData, thunkAPI) => {
    try {
      const response = await api.post("/classroom/timetable", timetableData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchClassrooms = createAsyncThunk(
  "classroom/fetchClassrooms",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/classroom/");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchClassroomDetails = createAsyncThunk(
  "classroom/fetchClassroomDetails",
  async (classroomId, thunkAPI) => {
    try {
      const response = await api.get(`/classroom/${classroomId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchStudentsByClassroom = createAsyncThunk(
  "classroom/fetchStudentsByClassroom",
  async (classroomId, thunkAPI) => {
    try {
      const response = await api.get(`/classroom/${classroomId}/students`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchTimetable = createAsyncThunk(
  "classroom/fetchTimetable",
  async (classroomId, thunkAPI) => {
    try {
      const response = await api.get(`/classroom/${classroomId}/timetable`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const classroomSlice = createSlice({
  name: "classroom",
  initialState: {
    classrooms: [],
    classroom: null,
    students: [],
    timetable: [],
    status: "idle",
    error: null,
    showForm: false, // <-- Add showForm to the initial state
  },
  reducers: {
    selectClassroom: (state, action) => {
      state.classroom = action.payload.classroomId;
      state.showForm = action.payload.showForm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClassroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createClassroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classrooms.push(action.payload);
      })
      .addCase(createClassroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(assignTeacherToClassroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(assignTeacherToClassroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        const classroom = state.classrooms.find(
          (classroom) => classroom._id === action.payload.classroomId
        );
        if (classroom) {
          classroom.teacher = action.payload.teacherId;
        }
      })
      .addCase(assignTeacherToClassroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(assignStudentsToClassroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(assignStudentsToClassroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        const classroom = state.classrooms.find(
          (classroom) => classroom._id === action.payload.classroomId
        );
        if (classroom) {
          classroom.students = action.payload.studentIds;
        }
      })
      .addCase(assignStudentsToClassroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTimetable.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTimetable.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.timetable = action.payload;
      })
      .addCase(createTimetable.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchClassrooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClassrooms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classrooms = action.payload;
      })
      .addCase(fetchClassrooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchClassroomDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClassroomDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classroom = action.payload;
      })
      .addCase(fetchClassroomDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchStudentsByClassroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentsByClassroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudentsByClassroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchTimetable.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTimetable.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.timetable = action.payload;
      })
      .addCase(fetchTimetable.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { selectClassroom } = classroomSlice.actions;

export const selectShowForm = (state) => state.classroom.showForm;

export const selectClassrooms = (state) => state.classroom.classrooms;

export default classroomSlice.reducer;
