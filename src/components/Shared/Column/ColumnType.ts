import { IBoard } from '@type/global';
import { ITask } from '@type/tasks/type';

export interface IColumnProps {
  id: string;
  title: IBoard;
  tasks: ITask[];
}
export interface IColumnState {}
