import { IBoard } from '@type/global';
import { ITask } from '@type/tasks/type';

export interface IColumnProps {
  id: IBoard;
  title: string;
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
  addButtonColor?: string;
}
