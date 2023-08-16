import { IPageProps } from '@type/global';
import { HomeContainer } from 'src/containers/HomeContainer/HomeContainer';

const Home: IPageProps = () => {
  return <HomeContainer />;
};

Home.needAuth = true;

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
