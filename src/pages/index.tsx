import { IPageProps } from '@type/global';
import { HomeContainer } from 'src/containers/HomeContainer';

const Home: IPageProps = () => {
  return <HomeContainer />;
};

Home.needAuth = false;

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
