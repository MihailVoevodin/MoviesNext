import {Filters} from 'components/Filters/Filters';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import {loadMoviesByFilters, setFindMoviesPageId} from 'store/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {IMovies} from 'Common/Models';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovies;
}

/**
 * Страница отображения поиска фильмов.
 */
const FindMovies: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {top100PageId, top250PageId, topAwaitPageId} = useAppSelector((state) => state.films);
    const {movies, orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword, findMoviesPageId} = useAppSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(
            loadMoviesByFilters({orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword, findMoviesPageId})
        );
    }, [findMoviesPageId]);

    const onChangePage = (pageId: number) => {
        dispatch(setFindMoviesPageId(pageId));
        void router.replace(`/movies/findMovies/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Найти фильм</title>
            </Head>
            <TopsNavbar
                top100PageId={top100PageId}
                top250PageId={top250PageId}
                topAwaitPageId={topAwaitPageId}
                findMoviesPageId={findMoviesPageId}
            />
            <Filters />
            <TopPage movies={movies} pageId={findMoviesPageId} pagesCount={5} onChangePage={onChangePage} />
        </>
    );
};

export default FindMovies;
