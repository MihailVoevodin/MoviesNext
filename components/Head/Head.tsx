import Head from 'next/head';
import {FC} from 'react';

interface IProps {
    title: string;
    movieName?: string;
}

export const HeadComponent: FC<IProps> = ({title, movieName}) => {
    return (
        <Head>
            <title>
                {title}
                {movieName && ` | ${movieName}`}
            </title>
            <meta name="description" content="Поиск информации о ваших любимых фильмах, сериалах и актёрах" />
            {movieName && <meta name="keywords" content={movieName} />}
            <meta httpEquiv="content-Language" content="ru" />
            <meta name="author" content="Mikhail Voevodin" />
        </Head>
    );
};
