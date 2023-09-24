import {IAppState} from 'store/store';
import {IFiltersState} from 'store/filters/filtersSlice';

/** Селектор айдишника страницы поиска фильмов. */
export const selectFindMoviesPageId = (state: IAppState): IFiltersState['findMoviesPageId'] => state.filters.findMoviesPageId;

/** Селектор фильтров. */
export const selectFilters = (state: IAppState): IFiltersState['filters'] => state.filters.filters;

/** Селектор фильмов найденных по фильмам. */
export const selectMoviesByFilters = (state: IAppState): IFiltersState['movies'] => state.filters.movies;

/** Селектор количества страниц фильмов по фильтрам. */
export const selectNumberOfPages = (state: IAppState): IFiltersState['numberOfPages'] => state.filters.numberOfPages;

/** Селектор состояния ошибки при работе с фильтрами. */
export const selectIsErrorFilters = (state: IAppState): IFiltersState['isError'] => state.filters.isError;

/** Селектор состояния загрузки при работе с фильтрами. */
export const selectIsLoadingFilters = (state: IAppState): IFiltersState['isLoading'] => state.filters.isLoading;
