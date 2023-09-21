import {IAppState} from 'store/Store';
import {IFiltersState} from 'store/filtersSlice';

export const selectFindMoviesPageId = (state: IAppState): IFiltersState['findMoviesPageId'] => state.filters.findMoviesPageId;
