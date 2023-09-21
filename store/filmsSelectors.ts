import {createSelector} from 'reselect';
import {IAppState} from 'store/Store';
import {IFilmsState} from 'store/filmsSlice';

export const selectSearchMovies = (state: IAppState): IFilmsState['searchMovies'] => state.films.searchMovies;

export const selectActiveTabName = (state: IAppState): IFilmsState['activeTabName'] => state.films.activeTabName;

export const selectPagesId = (state: IAppState): IFilmsState['pagesId'] => state.films.pagesId;
export const selectPagesIdArray = createSelector([selectPagesId], (pagesId) => [pagesId.top250, pagesId.top100, pagesId.top100]);

export const selectFilmRating = (state: IAppState): IFilmsState['filmRating'] => state.films.filmRating;
