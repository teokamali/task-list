import { useAppSelector } from '@redux/hooks';
import { DropResult } from 'react-beautiful-dnd';

export const useHomeContainerHelper = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const todo = tasks.filter((task) => task.status === 'Todo');
  const doing = tasks.filter((task) => task.status === 'Doing');
  const done = tasks.filter((task) => task.status === 'Done');

  const DragEndHandler = (event: DropResult) => {
    const { destination, source, draggableId } = event;
    console.log({ destination, source, draggableId });
  };

  return { todo, doing, done, DragEndHandler };
};
