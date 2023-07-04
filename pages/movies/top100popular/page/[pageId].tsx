import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
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
    const {top100PageId, top250PageId, topAwaitPageId} = useAppSelector((state) => state.films);
    const {findMoviesPageId} = useAppSelector((state) => state.filters);

    const onChangePage = (pageId: number) => {
        dispatch(setTop100PageId(pageId));
        void router.replace(`/movies/top100popular/page/${pageId}`);
    };

    console.log(movies);

    return (
        <>
            <Head>
                <title>Фильмы: Топ 100 популярных</title>
            </Head>
            <TopsNavbar
                top100PageId={top100PageId}
                top250PageId={top250PageId}
                topAwaitPageId={topAwaitPageId}
                findMoviesPageId={findMoviesPageId}
            />
            <main>
                <h3>Топ 100 популярных фильмов</h3>
                <TopPage movies={movies} pageId={top100PageId} pagesCount={5} onChangePage={onChangePage} />
            </main>
        </>
    );
};

export default Top100Movies;
