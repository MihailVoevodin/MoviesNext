import {Filters} from 'components/Filters/Filters';
import {HeadComponent} from 'components/Head/Head';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import {selectFilters, selectFindMoviesPageId} from 'store/filtersSelectors';
import {loadMoviesByFilters, setFindMoviesPageId} from 'store/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {Spinner} from 'Common/Loading';
import {T} from 'Common/Text';

/**
 * Страница отображения поиска фильмов.
 */
const FindMovies: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const findMoviesPageId = useAppSelector(selectFindMoviesPageId);
    const {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword} = useAppSelector(selectFilters);
    const {movies, moviesCountPages, isLoading, isError} = useAppSelector((state) => state.filters);

    useEffect(() => {
        dispatch(
            loadMoviesByFilters({
                filters: {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword},
                findMoviesPageId,
            })
        );
    }, [findMoviesPageId]);

    const onChangePage = (pageId: number) => {
        dispatch(setFindMoviesPageId(pageId));
        void router.replace(T.Pages.MainPages[3].link(pageId));
    };

    if (isError) {
        void router.replace('/500');
    }

    return (
        <>
            <HeadComponent title={T.Pages.MainPages[3].title} />
            <TopsNavbar />
            <main>
                <h3>{T.Pages.MainPages[3].text}</h3>
                <Filters />
                {isLoading ? (
                    <Spinner />
                ) : (
                    <TopPage movies={movies} pageId={findMoviesPageId} pagesCount={moviesCountPages} onChangePage={onChangePage} />
                )}
            </main>
        </>
    );
};

export default FindMovies;
