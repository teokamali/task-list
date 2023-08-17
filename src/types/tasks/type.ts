import { IBoard } from '@type/global';

export type ITask = {
  id: string;
  title?: string;
  status: IBoard;
  isCompleted: boolean;
};
