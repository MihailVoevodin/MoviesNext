import {TopPage} from 'components/Movies/TopPage';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setTopAwaitPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {IMovies} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovies;
}

/**
 * @param pageId Номер страницы списка фильмов.
 */
interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {pageId} = context.params!;
    const moviesResponse = await Services.getMoviesAwait(pageId);
    const movies = moviesResponse.data;
    return {
        props: {movies},
    };
};

/**
 * Страница отображения топа ожидаемых фильмов.
 */
const TopAwaitMovies: FC<IProps> = ({movies}) => {
    const {pagesCount, films} = movies;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top100PageId, top250PageId, topAwaitPageId, findMoviesPageId} = useAppSelector((state) => state.films);

    const onChangePage = (pageId: number) => {
        dispatch(setTopAwaitPageId(pageId));
        void router.replace(`/movies/topAwaitMovies/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Ожидаемые</title>
            </Head>
            <div>
                <Link href={`/movies/top250movies/page/${top250PageId}`}>Топ 250 фильмов</Link>
                <Link href={`/movies/top100popular/page/${top100PageId}`}>Топ 100 фильмов</Link>
                <Link href={`/movies/topAwaitMovies/page/${topAwaitPageId}`}>Топ ожидаемых фильмов</Link>
                <Link href={`/movies/findMovies/page/${findMoviesPageId}`}>Найти фильмы</Link>
            </div>
            <TopPage movies={films} pageId={topAwaitPageId} pagesCount={pagesCount} onChangePage={onChangePage} />
        </>
    );
};

export default TopAwaitMovies;
