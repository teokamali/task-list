import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import { addTask } from '@redux/slices/tasks/tasksSlice';
import { IBoard } from '@type/global';
import { IColumnProps, IColumnState } from './ColumnType';
export const useColumnHelper = (
  params: ICommonHelperParams<IColumnProps, IColumnState>,
) => {
  const { dispatch } = params;
  const { tasks } = useAppSelector((state) => state.tasks);

  const onAddToTodoListHandler = (boardTitle: IBoard) => {
    const lastTask = tasks.findLast((task) => task.id);
    const id = lastTask ? parseInt(lastTask.id) + 1 : '1';
    dispatch(
      addTask({
        id: id.toString(),
        isCompleted: false,
        status: boardTitle,
        title: '',
      }),
    );
  };
  return {
    onAddToTodoListHandler,
  };
};
