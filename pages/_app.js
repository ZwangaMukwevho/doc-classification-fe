import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import Layout from '@/components/layout/Layout';

// font awesome config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
  
}
