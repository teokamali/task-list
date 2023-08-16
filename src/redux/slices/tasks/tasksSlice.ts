import { createSlice } from '@reduxjs/toolkit';
import { ITasksSliceState } from './tasksSliceTypes';

const initialState: ITasksSliceState = {
  tasks: [
    { id: '1', title: 'Test', isCompleted: false },
    { id: '2', title: 'Test', isCompleted: false },
    { id: '3', title: 'Test', isCompleted: false },
    { id: '4', title: 'Test', isCompleted: false },
    { id: '5', title: 'Test', isCompleted: false },
    { id: '6', title: 'Test', isCompleted: false },
  ],
};

export const { actions, reducer } = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
});

export const {} = actions;
