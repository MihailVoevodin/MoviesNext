import "styles/globals.css";
import Layout from 'components/Layout/Layout';
import type { AppProps } from "next/app";
import {Provider} from 'react-redux';
import {store} from '../store/Store';

const App = ({ Component, pageProps }: AppProps) => {
   return (
       <Layout>
           <Provider store={store}>
               <Component {...pageProps} />
           </Provider>
       </Layout>

   )
};

export default App;
