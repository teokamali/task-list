import { CheckAccess } from '@components/Auth/CheckAccess/CheckAccess';
import { wrapper } from '@redux/store';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

type Props = AppProps;

export const App = ({ Component, ...props }: Props | any) => {
  const { pageProps } = props;
  const Page = (page: any) => page;
  const checkAuth = Component.needAuth
    ? (page: any) => <CheckAccess>{page}</CheckAccess>
    : Page;

  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      {checkAuth(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
