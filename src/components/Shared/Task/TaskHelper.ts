import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import {
  removeTask,
  reorderTask,
  updateTask,
} from '@redux/slices/tasks/tasksSlice';
import { ITask } from '@type/tasks/type';
import { useEffect, useRef } from 'react';
import { ITaskProps, ITaskState } from './TaskType';

export const useTaskHelper = (
  params: ICommonHelperParams<ITaskProps, ITaskState>,
) => {
  const { dispatch, props } = params;
  const { doingList, todoList } = useAppSelector((state) => state.tasks);
  const { task } = props;
  const { status, id, isCompleted } = task;
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const changeTaskNameHandler = ({ title }: { title: string }) => {
    dispatch(updateTask({ id, title, status, isCompleted }));
  };

  const updateTaskStatus = ({
    checked,
    fromIndex,
  }: {
    fromIndex: number;
    checked: boolean;
  }) => {
    dispatch(updateTask({ id, status, isCompleted: checked }));
    if (checked) {
      setTimeout(() => {
        dispatch(
          reorderTask({
            fromBoard: status,
            id,
            toBoard: 'Done',
            fromIndex,
            toIndex: 0,
          }),
        );
      }, 3000);
    }
  };

  const changeTaskCheckedHandler = (checked: boolean) => {
    if (task.status === 'Done') return;

    switch (status) {
      case 'Todo':
        const todoTaskIndex = todoList.findIndex((task) => task.id === id);
        updateTaskStatus({ fromIndex: todoTaskIndex, checked });
      // index = todoList.findIndex((task: ITask) => task.id === id);
      case 'Doing':
        const doingTaskIndex = doingList.findIndex(
          (task: ITask) => task.id === id,
        );
        updateTaskStatus({ fromIndex: doingTaskIndex, checked });
    }
  };

  const removeTaskHandler = () => {
    dispatch(removeTask({ id, status }));
  };

  const auto_grow = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '5px';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  };
  useEffect(() => {
    auto_grow();
  }, []);

  return {
    changeTaskNameHandler,
    changeTaskCheckedHandler,
    removeTaskHandler,
    auto_grow,
    textAreaRef,
  };
};
