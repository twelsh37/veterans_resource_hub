import { AppProps } from 'next/app';
import { useRouteProtection } from '../app/routes';

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoaded } = useRouteProtection();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
