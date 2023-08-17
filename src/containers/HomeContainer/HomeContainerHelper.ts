import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import { addTask, reorderTask } from '@redux/slices/tasks/tasksSlice';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IHomeContainerProps, IHomeContainerState } from './HomeContainerType';

export const useHomeContainerHelper = (
  params: ICommonHelperParams<IHomeContainerProps, IHomeContainerState>,
) => {
  const { todoList, doingList, doneList } = useAppSelector(
    (state) => state.tasks,
  );
  const { dispatch } = params;

  const DragEndHandler = (event: any) => {
    const { destination, source, draggableId } = event;
    console.log({ destination, source, draggableId });

    if (destination) {
      dispatch(
        reorderTask({
          id: draggableId,
          fromIndex: source.index,
          toIndex: destination.index,
          fromBoard: source.droppableId,
          toBoard: destination.droppableId,
        }),
      );
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    const pastedText = event.clipboardData?.getData('text/plain') || '';
    const newTasksToImport = pastedText.split('\n');

    newTasksToImport.forEach((taskTitle) => {
      dispatch(
        addTask({
          id: uuidv4(),
          isCompleted: false,
          status: 'Todo',
          title: taskTitle.trim(),
        }),
      );
    });
  };

  useEffect(() => {
    // Attach the onPaste event listener when the component mounts
    document.addEventListener('paste', handlePaste);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []); //

  return { todoList, doingList, doneList, DragEndHandler };
};
