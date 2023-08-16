import { IBoard } from '@type/global';

export type ITask = {
  id: string;
  title?: string;
  isCompleted?: boolean;
  status?: IBoard;
};
