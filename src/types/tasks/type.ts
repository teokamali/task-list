export type ITask = {
  id: string;
  title: string;
  isCompleted: boolean;
};
export interface ITasks {
  todo: ITask[];
  doing: ITask[];
  done: ITask[];
}
