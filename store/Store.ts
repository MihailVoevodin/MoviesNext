import filmsSlice, {IFilmsState} from 'store/filmsSlice';
import personsSlice, {IPersonsState} from 'store/personsSlice';
import {configureStore} from '@reduxjs/toolkit';
import filtersSlice, { IFiltersState } from "store/filtersSlice";

/**
 * @param films - Стор фильмов.
 * @param persons - Стор личностей.
 * @param filters - Стор фильтров поиска фильмов.
 */
export interface IAppState {
    films: IFilmsState;
    persons: IPersonsState;
    filters: IFiltersState;
}

export const store = configureStore<IAppState>({
    reducer: {
        films: filmsSlice,
        persons: personsSlice,
        filters: filtersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
