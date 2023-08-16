import { ITask } from '@type/tasks/type';

export interface ITasksSliceState {
  tasks: Required<ITask>[];
}
