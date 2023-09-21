import {IAppState} from 'store/Store';
import {IFiltersState} from 'store/filtersSlice';

/** Селектор айдишника страницы поиска фильмов. */
export const selectFindMoviesPageId = (state: IAppState): IFiltersState['findMoviesPageId'] => state.filters.findMoviesPageId;
