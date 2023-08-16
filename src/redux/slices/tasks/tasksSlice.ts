import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '@type/tasks/type';
import { ITasksSliceState } from './tasksSliceTypes';

const initialState: ITasksSliceState = {
  tasks: [
    { id: '1', title: 'Test1', isCompleted: false, status: 'todo' },
    { id: '2', title: 'Test2', isCompleted: false, status: 'todo' },
    { id: '3', title: 'Test3', isCompleted: false, status: 'todo' },
    { id: '4', title: 'Test4', isCompleted: false, status: 'todo' },
    { id: '5', title: 'Test5', isCompleted: false, status: 'todo' },
    { id: '6', title: 'Test6', isCompleted: false, status: 'todo' },
  ],
};

export const { actions, reducer } = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    updateTask: (state, action: PayloadAction<ITask>) => {
      const { id, status, title, isCompleted } = action.payload;

      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          status: status !== undefined ? status : state.tasks[taskIndex].status,
          title: title !== undefined ? title : state.tasks[taskIndex].title,
          isCompleted:
            isCompleted !== undefined
              ? isCompleted
              : state.tasks[taskIndex].isCompleted,
        };
      }
    },
  },
});

export const { updateTask } = actions;
