import {TopPage} from 'components/Movies/TopPage';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setTop250PageId} from 'store/filmsSlice';
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
    const moviesResponse = await Services.getMoviesTop_250(pageId);
    const movies = moviesResponse.data;
    return {
        props: {movies},
    };
};

/**
 * Страница отображения топ 250 фильмов.
 */
const Movie: FC<IProps> = ({movies}) => {
    const {pagesCount, films} = movies;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top250PageId} = useAppSelector((state) => state.films);

    const onChangePage = (pageId: number) => {
        dispatch(setTop250PageId(pageId));
        void router.replace(`/movies/top250movies/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Топ 250</title>
            </Head>
            <TopPage films={films} pageId={top250PageId} pagesCount={pagesCount} onChangePage={onChangePage} />
        </>
    );
};

export default Movie;
