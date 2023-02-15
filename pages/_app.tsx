import "styles/globals.css";
import Layout from 'components/Layout/Layout';
import type { AppProps } from "next/app";
import {Provider} from 'react-redux';
import {store} from 'store/Store';

const App = ({ Component, pageProps }: AppProps) => {
   return (
       <Provider store={store}>
           <Layout>
               <Component {...pageProps} />
           </Layout>
       </Provider>

   )
};

export default App;
