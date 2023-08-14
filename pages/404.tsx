import Head from 'next/head';
import {FC} from 'react';

/**
 * Компонент отображения ошибки.
 */
const PathErrorPage: FC = () => {
    return (
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <h1>404</h1>
            <div>Try again later</div>
        </>
    );
};

export default PathErrorPage;
