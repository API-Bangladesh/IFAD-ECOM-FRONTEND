import '@/styles/globals.css'
import '../styles/normalize.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/TopManu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SSRProvider} from 'react-bootstrap';
// import NextNProgress from 'nextjs-progressbar';
/*import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';*/
import AOS from "aos";
import {Fragment, useEffect} from 'react';
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import Layout from "../layouts/Layout";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "../store";
import MessengerChatBot from "../components/common/MessengerChatBot";

export default function App({Component, pageProps}) {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    // https://www.npmjs.com/package/nextjs-progressbar

    return (
        <Fragment>
            <SSRProvider>
                <Layout>
                    {/* <NextNProgress options={{easing: 'ease', speed: 500}}/> */}

                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Component {...pageProps} />
                        </PersistGate>
                    </Provider>

                    <ToastContainer
                        autoClose={2500}
                        position="bottom-right"
                    />

                    <MessengerChatBot />
                </Layout>
            </SSRProvider>
        </Fragment>
    )
}
