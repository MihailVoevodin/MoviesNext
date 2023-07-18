import {Filters} from 'components/Filters/Filters';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import {loadMoviesByFilters, setFindMoviesPageId} from 'store/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {T} from 'Common/Text';

/**
 * Страница отображения поиска фильмов.
 */
const FindMovies: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {top100PageId, top250PageId, topAwaitPageId} = useAppSelector((state) => state.films);
    const {
        movies,
        orderId,
        genreId,
        countryId,
        typeId,
        ratingFrom,
        ratingTo,
        yearFrom,
        yearTo,
        keyword,
        findMoviesPageId,
        moviesCountPages,
    } = useAppSelector((state) => state.filters);
    console.log(moviesCountPages);

    useEffect(() => {
        dispatch(
            loadMoviesByFilters({orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword, findMoviesPageId})
        );
    }, [findMoviesPageId]);

    const onChangePage = (pageId: number) => {
        dispatch(setFindMoviesPageId(pageId));
        void router.replace(T.Pages.MainPages.FindMovies.link(pageId));
    };

    return (
        <>
            <Head>
                <title>{T.Pages.MainPages.FindMovies.title}</title>
            </Head>
            <TopsNavbar
                top100PageId={top100PageId}
                top250PageId={top250PageId}
                topAwaitPageId={topAwaitPageId}
                findMoviesPageId={findMoviesPageId}
            />
            <main>
                <h3>{T.Pages.MainPages.FindMovies.text}</h3>
                <Filters />
                <TopPage movies={movies} pageId={findMoviesPageId} pagesCount={moviesCountPages} onChangePage={onChangePage} />
            </main>
        </>
    );
};

export default FindMovies;
