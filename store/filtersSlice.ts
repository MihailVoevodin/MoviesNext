import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IFiltersState {
    filters: {
        genreId: string | null;
        countryId: string | null;
        orderId: string;
        typeId: string;
        ratingFrom: string;
        ratingTo: string;
        yearFrom: string;
        yearTo: string;
        keyword: string | undefined;
    };
}

const initialState: IFiltersState = {
    filters: {
        genreId: null,
        countryId: null,
        orderId: 'RATING',
        typeId: 'ALL',
        ratingFrom: '0',
        ratingTo: '10',
        yearFrom: '1000',
        yearTo: '3000',
        keyword: undefined,
    },
};

/**
 * Срез фильтров поиска фильмов.
 */
const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setGenreId(state, action: PayloadAction<string>) {
            state.filters.genreId = action.payload;
        },
        setCountryId(state, action: PayloadAction<string>) {
            state.filters.countryId = action.payload;
        },
        setOrderId(state, action: PayloadAction<string>) {
            state.filters.orderId = action.payload;
        },
        setTypeId(state, action: PayloadAction<string>) {
            state.filters.typeId = action.payload;
        },
        setRatingFrom(state, action: PayloadAction<string>) {
            state.filters.ratingFrom = action.payload;
        },
        setRatingTo(state, action: PayloadAction<string>) {
            state.filters.ratingTo = action.payload;
        },
        setYearFrom(state, action: PayloadAction<string>) {
            state.filters.yearFrom = action.payload;
        },
        setYearTo(state, action: PayloadAction<string>) {
            state.filters.yearTo = action.payload;
        },
        setKeyword(state, action: PayloadAction<string>) {
            state.filters.keyword = action.payload;
        },
    },
});

export const {setGenreId, setCountryId, setOrderId, setTypeId, setRatingFrom, setRatingTo, setYearFrom, setYearTo, setKeyword} =
    filtersSlice.actions;

export default filtersSlice.reducer;
