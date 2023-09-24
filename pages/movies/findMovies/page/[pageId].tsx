import {Filters} from 'components/Filters/Filters';
import {HeadComponent} from 'components/Head/Head';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import {
    selectFilters,
    selectFindMoviesPageId,
    selectIsErrorFilters,
    selectIsLoadingFilters,
    selectMoviesByFilters,
    selectNumberOfPages,
} from 'store/filters/filtersSelectors';
import {loadMoviesByFilters, setFindMoviesPageId} from 'store/filters/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {Spinner} from 'components/Spinner';
import {T} from 'Common/Text';

/**
 * Страница отображения поиска фильмов.
 */
const FindMovies: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword} = useAppSelector(selectFilters);
    const findMoviesPageId = useAppSelector(selectFindMoviesPageId);
    const movies = useAppSelector(selectMoviesByFilters);
    const numberOfPages = useAppSelector(selectNumberOfPages);
    const isLoading = useAppSelector(selectIsLoadingFilters);
    const isError = useAppSelector(selectIsErrorFilters);

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
                    <TopPage movies={movies} pageId={findMoviesPageId} pagesCount={numberOfPages} onChangePage={onChangePage} />
                )}
            </main>
        </>
    );
};

export default FindMovies;
