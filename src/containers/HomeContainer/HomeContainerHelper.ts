import { useAppSelector } from '@redux/hooks';

export const useHomeContainerHelper = () => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return { tasks };
};
