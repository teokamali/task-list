import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import { reorderTask } from '@redux/slices/tasks/tasksSlice';
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

  return { todoList, doingList, doneList, DragEndHandler };
};
