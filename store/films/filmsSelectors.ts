import {createSelector} from 'reselect';
import {IFilmsState} from 'store/films/filmsSlice';
import {selectFindMoviesPageId} from 'store/filters/filtersSelectors';
import {IAppState} from 'store/store';

/** Селектор фильмов найденных по поисковой строке. */
export const selectSearchMovies = (state: IAppState): IFilmsState['searchMovies'] => state.films.searchMovies;

/** Селектор сиквелов и приквелов фильма. */
export const selectMovieSequelsAndPrequels = (state: IAppState): IFilmsState['sequelsAndPrequels'] => state.films.sequelsAndPrequels;

/** Селектор сезонов сериала. */
export const selectSerialSeasons = (state: IAppState): IFilmsState['seasons'] => state.films.seasons;

/** Селектор названия активного таба топов фильмов. */
export const selectActiveTabName = (state: IAppState): IFilmsState['activeTabName'] => state.films.activeTabName;

/** Селекторы айдишников номеров страниц. */
export const selectPagesId = (state: IAppState): IFilmsState['pagesId'] => state.films.pagesId;
export const selectPagesIdArray = createSelector([selectPagesId], (pagesId) => [pagesId.top250, pagesId.top100, pagesId.top100]);
export const selectNavbarPagesIdArray = createSelector([selectPagesId, selectFindMoviesPageId], (pagesId, findMovies) => [
    pagesId.top250,
    pagesId.top100,
    pagesId.topAwait,
    findMovies,
]);

/** Селектор рейтинга фильма. */
export const selectFilmRating = (state: IAppState): IFilmsState['filmRating'] => state.films.filmRating;
