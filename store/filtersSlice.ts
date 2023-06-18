import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';

export interface IFiltersState {
    movies?: IMovie[];
    genreId: string;
    countryId: string;
    orderId: string;
    typeId: string;
    ratingFrom: string;
    ratingTo: string;
    yearFrom: string;
    yearTo: string;
    keyword: string;
    findMoviesPageId: number;
}

const initialState: IFiltersState = {
    movies: [],
    genreId: '1',
    countryId: '1',
    orderId: 'RATING',
    typeId: 'ALL',
    ratingFrom: '0',
    ratingTo: '10',
    yearFrom: '1000',
    yearTo: '3000',
    keyword: '',
    findMoviesPageId: 1,
};

export const loadFilmsByFilters = createAsyncThunk(
    'filters/getFilmsByFilters',
    async (
        {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword, findMoviesPageId}: IFiltersState,
        {rejectWithValue}
    ) => {
        console.log(findMoviesPageId);
        const response = await Services.getFilmsByFilters(
            orderId,
            genreId,
            countryId,
            typeId,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            keyword,
            findMoviesPageId
        );

        if (response.status !== 200) {
            return rejectWithValue('Server Error!');
        }

        return response.data.items;
    }
);

/**
 * Срез фильтров поиска фильмов.
 */
const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setGenreId(state, action: PayloadAction<string>) {
            state.genreId = action.payload;
        },
        setCountryId(state, action: PayloadAction<string>) {
            state.countryId = action.payload;
        },
        setOrderId(state, action: PayloadAction<string>) {
            state.orderId = action.payload;
        },
        setTypeId(state, action: PayloadAction<string>) {
            state.typeId = action.payload;
        },
        setRatingFrom(state, action: PayloadAction<string>) {
            state.ratingFrom = action.payload;
        },
        setRatingTo(state, action: PayloadAction<string>) {
            state.ratingTo = action.payload;
        },
        setYearFrom(state, action: PayloadAction<string>) {
            state.yearFrom = action.payload;
        },
        setYearTo(state, action: PayloadAction<string>) {
            state.yearTo = action.payload;
        },
        setKeyword(state, action: PayloadAction<string>) {
            state.keyword = action.payload;
        },
        setFindMoviesPageId(state, action: PayloadAction<number>) {
            state.findMoviesPageId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadFilmsByFilters.fulfilled, (state, action) => {
            console.log(action.payload);
            state.movies = action.payload;
        });
    },
});

export const {
    setGenreId,
    setCountryId,
    setOrderId,
    setTypeId,
    setRatingFrom,
    setRatingTo,
    setYearFrom,
    setYearTo,
    setKeyword,
    setFindMoviesPageId,
} = filtersSlice.actions;

export default filtersSlice.reducer;
