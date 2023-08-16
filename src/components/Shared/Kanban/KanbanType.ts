import { IBaseProps } from '@base/BaseInterface';
import { DropResult } from 'react-beautiful-dnd';

export interface IKanbanProps extends IBaseProps {
  onDragEnd: (event: DropResult) => void;
}
export interface IKanbanState {}
