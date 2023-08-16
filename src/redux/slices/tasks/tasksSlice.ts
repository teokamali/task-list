import { createSlice } from '@reduxjs/toolkit';
import { ITasksSliceState } from './tasksSliceTypes';

const initialState: ITasksSliceState = {
  tasks: [{ id: '1', title: 'Test', isCompleted: false, group: 'todo' }],
};

export const { actions, reducer } = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
});

export const {} = actions;
