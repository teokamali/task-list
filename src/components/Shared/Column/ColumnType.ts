import { IBoard } from '@type/global';
import { ITask } from '@type/tasks/type';

export interface IColumnProps {
  id: string;
  title: IBoard;
  hasAddAbility?: boolean;
  tasks: ITask[];
  pallet: IColumnColorPallet;
}
export interface IColumnState {}

export interface IColumnColorPallet {
  bgColor: string;
  titleColor: string;
  tasksCounterColor: string;
  removeIconColor: string;
  checkboxBorder: string;
  checkboxCheckColor: string;
  addButtonColor: string;
}
