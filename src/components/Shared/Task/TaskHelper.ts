import { ICommonHelperParams } from '@base/BaseInterface';
import { removeTask, updateTask } from '@redux/slices/tasks/tasksSlice';
import { useEffect } from 'react';
import { ITaskProps, ITaskState } from './TaskType';

export const useTaskHelper = (
  params: ICommonHelperParams<ITaskProps, ITaskState>,
) => {
  const { dispatch, props } = params;
  const { task } = props;
  const { status, id } = task;

  const statusCondition = status === 'Done';

  const changeTaskNameHandler = ({ title }: { title: string }) => {
    dispatch(updateTask({ id, title, status }));
  };

  const changeTaskCheckedHandler = () => {
    if (task.status === 'Done') return;
    return dispatch(updateTask({ id, status: 'Done' }));
    // debounce
  };

  const removeTaskHandler = () => {
    dispatch(removeTask({ id }));
  };
  useEffect(() => {}, [status]);

  return {
    changeTaskNameHandler,
    changeTaskCheckedHandler,
    removeTaskHandler,
    statusCondition,
  };
};
