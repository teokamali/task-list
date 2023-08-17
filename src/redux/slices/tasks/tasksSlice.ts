import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBoard } from '@type/global';
import { ITask } from '@type/tasks/type';
import { ITaskUpdatePayload, ITasksSliceState } from './tasksSliceTypes';

const initialState: ITasksSliceState = {
  todoList: [
    {
      id: '1',
      title: 'Start with meditation, exercise & breakfast for a productive day',
      status: 'Todo',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'Read to learn something new every day',
      status: 'Todo',
      isCompleted: false,
    },
  ],
  doingList: [
    {
      id: '3',
      title: 'Engage & question in meetings',
      status: 'Doing',
      isCompleted: false,
    },
    {
      id: '4',
      title: 'Use time-blocking for effective days',
      status: 'Doing',
      isCompleted: false,
    },
    {
      id: '5',
      title: 'Learn something fresh & relevant',
      status: 'Doing',
      isCompleted: false,
    },
  ],
  doneList: [
    {
      id: '6',
      status: 'Done',
      title: 'Finished online course - check!',
      isCompleted: true,
    },
    {
      id: '7',
      status: 'Done',
      title:
        'Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating',
      isCompleted: true,
    },
  ],
};

export const { actions, reducer } = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    updateTask: (state, action: PayloadAction<ITaskUpdatePayload>) => {
      const { id, status, title, toStatus, isCompleted } = action.payload;
      switch (status) {
        case 'Todo':
          const todoTaskIndex = state.todoList.findIndex(
            (task) => task.id === id,
          );
          if (todoTaskIndex !== -1) {
            state.todoList[todoTaskIndex] = {
              ...state.todoList[todoTaskIndex],
              status:
                toStatus !== undefined
                  ? toStatus
                  : state.todoList[todoTaskIndex].status,
              title:
                title !== undefined
                  ? title
                  : state.todoList[todoTaskIndex].title,
              isCompleted:
                isCompleted !== undefined
                  ? isCompleted
                  : state.todoList[todoTaskIndex].isCompleted,
            };
          }

          break;
        case 'Doing':
          const doingTaskIndex = state.doingList.findIndex(
            (task) => task.id === id,
          );
          if (doingTaskIndex !== -1) {
            state.doingList[doingTaskIndex] = {
              ...state.doingList[doingTaskIndex],
              status:
                toStatus !== undefined
                  ? toStatus
                  : state.doingList[doingTaskIndex].status,
              title:
                title !== undefined
                  ? title
                  : state.doingList[doingTaskIndex].title,
              isCompleted:
                isCompleted !== undefined
                  ? isCompleted
                  : state.doingList[doingTaskIndex].isCompleted,
            };
          }
          break;
        case 'Done':
          const doneTaskIndex = state.doneList.findIndex(
            (task) => task.id === id,
          );
          if (doneTaskIndex !== -1) {
            state.doneList[doneTaskIndex] = {
              ...state.doneList[doneTaskIndex],
              title:
                title !== undefined
                  ? title
                  : state.doneList[doneTaskIndex].title,
            };
          }
          break;
        default:
          return state;
      }
    },
    removeTask: (
      state,
      action: PayloadAction<{ id: string; status: IBoard }>,
    ) => {
      const { id, status } = action.payload;
      switch (status) {
        case 'Todo':
          state.todoList = state.todoList.filter((task) => task.id !== id);
          break;
        case 'Doing':
          state.doingList = state.doingList.filter((task) => task.id !== id);
          break;
        case 'Done':
          state.doneList = state.doneList.filter((task) => task.id !== id);
          break;
        default:
          return state;
      }
    },

    addTask: (state, action: PayloadAction<Required<ITask>>) => {
      const newTask = action.payload;
      const { status } = newTask;
      switch (status) {
        case 'Todo':
          state.todoList.push(newTask);
          break;
        case 'Doing':
          state.doingList.push(newTask);
          break;
        default:
          return state;
      }
    },

    reorderTask: (
      state,
      action: PayloadAction<{
        id: string;
        fromIndex: number;
        toIndex: number;
        fromBoard: IBoard;
        toBoard: IBoard;
      }>,
    ) => {
      const { fromIndex, toIndex, fromBoard, toBoard } = action.payload;

      const getSourceList = (board: IBoard) => {
        switch (board) {
          case 'Todo':
            return state.todoList;
          case 'Doing':
            return state.doingList;
          case 'Done':
            return state.doneList;
          default:
            return null;
        }
      };

      const getTargetList = (board: IBoard) => {
        switch (board) {
          case 'Todo':
            return state.todoList;
          case 'Doing':
            return state.doingList;
          case 'Done':
            return state.doneList;
          default:
            return null;
        }
      };

      const sourceList = getSourceList(fromBoard);
      const targetList = getTargetList(toBoard);

      if (!sourceList || !targetList) {
        return state; // Invalid boards
      }

      if (fromIndex < 0 || fromIndex >= sourceList.length) {
        return state; // Invalid fromIndex
      }

      if (toIndex < 0 || toIndex > targetList.length) {
        return state; // Invalid toIndex
      }
      let updateIsCompleted =
        fromBoard === 'Done' && fromBoard !== toBoard
          ? false
          : toBoard === 'Done'
          ? true
          : false;
      const [movedTask] = sourceList.splice(fromIndex, 1);
      const updatedTask = {
        ...movedTask,
        status: toBoard,
        isCompleted: updateIsCompleted,
      };

      targetList.splice(toIndex, 0, updatedTask);
    },
  },
});

export const { updateTask, removeTask, addTask, reorderTask } = actions;
