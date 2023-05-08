import filmsSlice, {IFilmsState} from 'store/filmsSlice';
import {configureStore} from '@reduxjs/toolkit';
import personsSlice, {IPersonsState} from "store/personsSlice";

/**
 * @param films - Стор фильмов.
 * @param persons - Стор личностей.
 */
export interface IAppState {
    films: IFilmsState;
    persons: IPersonsState;
}

export const store = configureStore<IAppState>({
    reducer: {
        films: filmsSlice,
        persons: personsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
