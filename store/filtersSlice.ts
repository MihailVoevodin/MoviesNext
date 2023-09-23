import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';

export interface IFiltersState {
    movies?: IMovie[];
    filters: {
        genreId: string;
        countryId: string;
        orderId: string;
        typeId: string;
        ratingFrom: string;
        ratingTo: string;
        yearFrom: string;
        yearTo: string;
        keyword: string;
    };
    findMoviesPageId: number;
    moviesCountPages: number;
    isLoading?: boolean;
    isError?: boolean;
}

const initialState: IFiltersState = {
    movies: [],
    filters: {
        orderId: 'RATING',
        genreId: '1',
        countryId: '1',
        typeId: 'ALL',
        ratingFrom: '',
        ratingTo: '',
        yearFrom: '',
        yearTo: '',
        keyword: '',
    },
    findMoviesPageId: 1,
    moviesCountPages: 5,
    isLoading: false,
    isError: false,
};

export type LoadMovies = Omit<IFiltersState, 'moviesCountPages'>;
export type TFilters = Omit<IFiltersState, 'movies' | 'moviesCountPages' | 'isError' | 'isLoading'>;

export const loadMoviesByFilters = createAsyncThunk(
    'filters/getMoviesByFilters',
    async (
        {filters: {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword}, findMoviesPageId}: TFilters,
        {rejectWithValue}
    ) => {
        const response = await Services.getMoviesByFilters(
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

        return response.data;
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
        setFindMoviesPageId(state, action: PayloadAction<number>) {
            state.findMoviesPageId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadMoviesByFilters.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMoviesByFilters.rejected, (state) => {
                state.isError = true;
            })
            .addCase(loadMoviesByFilters.fulfilled, (state, action) => {
                const {items, totalPages} = action.payload;
                state.movies = items;
                state.moviesCountPages = totalPages;
                state.isLoading = false;
                state.isError = false;
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
