import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import { addTask } from '@redux/slices/tasks/tasksSlice';
import { IBoard } from '@type/global';
import { v4 as uuidv4 } from 'uuid';
import { IColumnProps, IColumnState } from './ColumnType';
export const useColumnHelper = (
  params: ICommonHelperParams<IColumnProps, IColumnState>,
) => {
  const { dispatch } = params;
  const { todoList, doingList } = useAppSelector((state) => state.tasks);
  const onAddToTodoListHandler = (boardId: IBoard) => {
    dispatch(
      addTask({
        id: uuidv4(),
        status: boardId,
        title: '',
        isCompleted: false,
      }),
    );
  };
  return {
    onAddToTodoListHandler,
  };
};
