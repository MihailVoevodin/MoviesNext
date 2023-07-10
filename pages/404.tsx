import {T} from 'Common/Text';
import Head from 'next/head';
import {FC} from 'react';

/**
 * Компонент отображения ошибки.
 */
const PathErrorPage: FC = () => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <h1>Error 404</h1>
            <div>Path not found</div>
        </>
    );
};

export default PathErrorPage;
