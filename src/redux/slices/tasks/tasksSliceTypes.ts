import { IBoard } from '@type/global';
import { ITask } from '@type/tasks/type';

export interface ITasksSliceState {
  todoList: Required<ITask>[];
  doingList: Required<ITask>[];
  doneList: Required<ITask>[];
}
export interface ITaskUpdatePayload extends ITask {
  toStatus?: IBoard;
}
