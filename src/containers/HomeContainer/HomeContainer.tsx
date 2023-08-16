import { HomeHeader } from '@components/Home/Header/HomeHeader';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { useAppSelector } from '@redux/hooks';

export const HomeContainer = () => {
  const { tasks } = useAppSelector(state => state.tasks)

  return (
    <HomeLayout>
      <HomeHeader />


    </HomeLayout>
  );
};
