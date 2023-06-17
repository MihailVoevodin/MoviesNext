import {TopPage} from 'components/Movies/TopPage';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setTop100PageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovie[];
}

/**
 * @param pageId Номер страницы списка фильмов.
 */
interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {pageId} = context.params!;
    const moviesResponse = await Services.getMoviesTop_100(pageId);
    const movies = moviesResponse.data.films;
    return {
        props: {movies},
    };
};

/**
 * Страница отображения топ 100 популярных фильмов.
 */
const Top100Movies: FC<IProps> = ({movies}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top100PageId, top250PageId, topAwaitPageId, findMoviesPageId} = useAppSelector((state) => state.films);

    const onChangePage = (pageId: number) => {
        dispatch(setTop100PageId(pageId));
        void router.replace(`/movies/top100popular/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Топ 100 популярных</title>
            </Head>
            <div>
                <Link href={`/movies/top250movies/page/${top250PageId}`}>Топ 250 фильмов</Link>
                <Link href={`/movies/top100popular/page/${top100PageId}`}>Топ 100 фильмов</Link>
                <Link href={`/movies/topAwaitMovies/page/${topAwaitPageId}`}>Топ ожидаемых фильмов</Link>
                <Link href={`/movies/findMovies/page/${findMoviesPageId}`}>Найти фильмы</Link>
            </div>
            <TopPage movies={movies} pageId={top100PageId} pagesCount={5} onChangePage={onChangePage} />
        </>
    );
};

export default Top100Movies;
