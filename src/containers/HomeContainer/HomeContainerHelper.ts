import { ICommonHelperParams } from '@base/BaseInterface';
import { useAppSelector } from '@redux/hooks';
import { updateTask } from '@redux/slices/tasks/tasksSlice';
import { IHomeContainerProps, IHomeContainerState } from './HomeContainerType';

export const useHomeContainerHelper = (
  params: ICommonHelperParams<IHomeContainerProps, IHomeContainerState>,
) => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const { dispatch } = params;

  const todo = tasks.filter((task) => task.status === 'Todo');
  const doing = tasks.filter((task) => task.status === 'Doing');
  const done = tasks.filter((task) => task.status === 'Done');

  const DragEndHandler = (event: any) => {
    const { destination, source, draggableId } = event;

    if (destination) {
      if (source.droppableId == destination.droppableId) {
        console.log(destination, source, draggableId);
        // update tasks index
        switch (source.droppableId) {
          case 'Todo': {
            return; //....
          }
          case 'Doing': {
            return; //....
          }
          case 'Done': {
            return; //....
          }

          default:
            break;
        }
      }
      // update Task
      if (destination.droppableId === 'Done') {
        return dispatch(
          updateTask({
            id: draggableId,
            status: destination.droppableId,
          }),
        );
      }

      return dispatch(
        updateTask({
          id: draggableId,
          status: destination.droppableId,
        }),
      );
    }
  };

  return { todo, doing, done, DragEndHandler };
};
