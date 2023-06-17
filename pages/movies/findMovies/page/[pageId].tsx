import {Filters} from 'components/Filters/Filters';
import Head from 'next/head';
import Link from 'next/link';
import {FC} from 'react';
import {useAppSelector} from 'store/hooks';
import {IMovies} from 'Common/Models';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovies;
}

/**
 * Страница отображения топ 100 популярных фильмов.
 */
const FindMovies: FC<IProps> = () => {
    const {top100PageId, top250PageId, topAwaitPageId, findMoviesPageId} = useAppSelector((state) => state.films);

    return (
        <>
            <Head>
                <title>Фильмы: Найти фильм</title>
            </Head>
            <div>
                <Link href={`/movies/top250movies/page/${top250PageId}`}>Топ 250 фильмов</Link>
                <Link href={`/movies/top100popular/page/${top100PageId}`}>Топ 100 фильмов</Link>
                <Link href={`/movies/topAwaitMovies/page/${topAwaitPageId}`}>Топ ожидаемых фильмов</Link>
                <Link href={`/movies/findMovies/page/${findMoviesPageId}`}>Найти фильмы</Link>
            </div>
            <Filters />
        </>
    );
};

export default FindMovies;
