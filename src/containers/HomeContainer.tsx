import { HomeBody } from '@components/Home/Body/HomeBody';
import { HomeHeader } from '@components/Home/Header/HomeHeader';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';

export const HomeContainer = () => {
  return (
    <HomeLayout>
      <HomeHeader />
      <HomeBody />
    </HomeLayout>
  );
};
