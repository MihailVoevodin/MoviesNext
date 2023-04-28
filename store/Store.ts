import {configureStore} from '@reduxjs/toolkit';
import filmsSlice, {IState} from 'store/filmsSlice';

export interface IAppState {
    films: IState;
}

export const store = configureStore<IAppState>({
    reducer: {
        films: filmsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
