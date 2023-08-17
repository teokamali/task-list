import { ITask } from '@type/tasks/type';

export interface ITaskProps {
  task: ITask;
  index: number;
  pallet: ITaskPallet;
}
export interface ITaskState {}
export interface ITaskPallet {
  checkboxBorder: string;
  removeIconColor: string;
  checkboxCheckColor: string;
}
