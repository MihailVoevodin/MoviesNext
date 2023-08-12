import Head from 'next/head';
import {FC} from 'react';

const ServerErrorPage: FC = () => {
    return (
        <>
            <Head>
                <title>500 Server Error</title>
            </Head>
            <h1>500 - Server-side error occurred. Try again later.</h1>
        </>
    );
};

export default ServerErrorPage;
