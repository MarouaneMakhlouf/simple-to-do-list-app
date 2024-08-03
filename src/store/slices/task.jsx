import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];


export const task = createSlice({
    initialState: initialState, // i want to save this in localStorage how ?
    name: 'task',
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        rmTask: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export default task.reducer;
export const {addTask,rmTask} = task.actions;