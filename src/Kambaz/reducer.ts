import { createSlice } from "@reduxjs/toolkit";
import { courses } from "./Database";

const initialState = {
    courses: courses
}

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, {payload: newCourse}) => {
            state.courses = [...state.courses, newCourse] as any;
        },

        deleteCourse: (state, {payload}) => {
            state.courses = state.courses.filter(
                (c: any) => c._id !== payload);
        },

        updateCourse: (state, {payload: course}) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
              ) as any;
        }
    }
});

export const { addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;