import 'styles/globals.scss';
import Layout from 'components/Layout/Layout';
import type {AppProps} from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import {Provider} from 'react-redux';
import {store} from 'store/store';

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <Layout>
                <NextNProgress color="#ff6200" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default App;
