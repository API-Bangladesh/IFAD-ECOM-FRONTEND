import Layout from './Layout';
import '@/styles/globals.css'
import '../styles/normalize.css';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from 'react-bootstrap';
import NextNProgress from 'nextjs-progressbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";



export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // https://www.npmjs.com/package/nextjs-progressbar

  return (
    <>
    <SSRProvider>
      <Layout>
      <NextNProgress options={{ easing: 'ease', speed: 500 }} />
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
    </>
  )
}
