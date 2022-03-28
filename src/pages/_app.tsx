import { useEffect } from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import StartApp from 'components/StartApp';
import gtag from 'lib/gtag';
import colors from 'styles/colors';
import ThemeApp from 'styles/theme';
import createEmotionCache from 'utils/createEmotionCache';
import 'react-phone-input-2/lib/style.css';
import 'styles/phone-input.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <CacheProvider value={emotionCache}>
      <MetaTags
        title="OrderGO | AppNameHere"
        description="RPMS Platform (Retailer Process Management System) overhauls the EPOS with innovative integrated payment solutions and seamless omni channel and unified functionality."
      />
      <ThemeApp>
        <CssBaseline />
              <StartApp>
                <Layout>
                  <NextNProgress
                    height={4}
                    options={{ showSpinner: true }}
                    color={colors.primary}
                  />
                  <Component {...pageProps} />
                </Layout>
              </StartApp>
      </ThemeApp>
    </CacheProvider>
  );
}
