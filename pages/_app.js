import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import Layout from '@/components/layout/Layout';
import Starfield from 'react-starfield';
import { DescriptiveCard } from '@/components/home/DescriptiveCard';

// font awesome config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout noMargin={Component.name === 'Home'}>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
  
}
