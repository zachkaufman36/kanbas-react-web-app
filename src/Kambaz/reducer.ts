import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    enrollments: enrollments
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
        },

        enroll: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
            console.log(payload);
            const newEnrollment = {_id: uuidv4(), user: payload.userId, course: payload.courseId};
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            console.log(state.enrollments)
        },

        unenroll: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
            state.enrollments = state.enrollments.filter((e: any) => 
                !(e.course === payload.courseId && e.user === payload.userId));
            console.log(state.enrollments)
        }
    }
});

export const { addNewCourse, deleteCourse, updateCourse, enroll, unenroll } =
  coursesSlice.actions;
export default coursesSlice.reducer;