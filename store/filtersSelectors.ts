import {IAppState} from 'store/Store';
import {IFiltersState} from 'store/filtersSlice';

/** Селектор айдишника страницы поиска фильмов. */
export const selectFindMoviesPageId = (state: IAppState): IFiltersState['findMoviesPageId'] => state.filters.findMoviesPageId;

/** Селектор фильтров. */
export const selectFilters = (state: IAppState): IFiltersState['filters'] => state.filters.filters;
