import {TopPage} from 'components/Movies/TopPage';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setTop100PageId} from 'store/filmsSlice';
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
    const moviesResponse = await Services.getMoviesTop_100(pageId);
    const movies = moviesResponse.data;
    return {
        props: {movies},
    };
};

/**
 * Страница отображения топ 100 популярных фильмов.
 */
const Movie: FC<IProps> = ({movies}) => {
    const {films} = movies;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top100PageId} = useAppSelector((state) => state.films);

    const onChangePage = (pageId: number) => {
        dispatch(setTop100PageId(pageId));
        void router.replace(`/movies/top100popular/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Топ 100 популярных</title>
            </Head>
            <TopPage films={films} pageId={top100PageId} pagesCount={5} onChangePage={onChangePage} />
        </>
    );
};

export default Movie;
