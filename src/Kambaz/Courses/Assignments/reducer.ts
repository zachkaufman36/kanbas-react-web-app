import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../Database";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

const initialState = {
    assignments: assignments,
  };

const location = useLocation();

const assignmentsSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                release_date: assignment.release_date,
                due_date: assignment.due_date,
                points: assignment.points
              };
              state.assignments = [...state.assignments, newAssignment] as any;
        },
        
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },

        updateAssignment: (state, { payload: assignment }) => {   
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
              ) as any;
        },

    },
})

export const { addAssignment, deleteAssignment, updateAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;