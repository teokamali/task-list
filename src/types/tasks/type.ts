export type ITask = {
  id: string;
  title?: string;
  isCompleted?: boolean;
  status?: 'todo' | 'doing' | 'done';
};
