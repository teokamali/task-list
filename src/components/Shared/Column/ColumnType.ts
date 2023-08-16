import { IBaseProps } from '@base/BaseInterface';
import { IBoard } from '@type/global';

export interface IColumnProps extends IBaseProps {
  id: string;
  title: IBoard;
}
export interface IColumnState {}
