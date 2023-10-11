import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from 'Common/Models';
import {TFilmRating} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param top250PageId - Номер страницы топ 250 фильмов.
 * @param top100PageId - Номер страницы топ 100 популярных фильмов.
 * @param topAwaitPageId - Номер страницы топа ожидаемых фильмов.
 * @param imagesPageId - Номер страницы изображений.
 * @param reviewsPageId - Номер страницы рецензий.
 */
export interface IFilmsState {
    searchMovies: IMovie[];
    sequelsAndPrequels: IMovie[];
    activeTabName: string;
    pagesId: {
        top250: number;
        top100: number;
        topAwait: number;
        images: number;
        reviews: number;
    };
    filmRating: TFilmRating;
    isLoading: boolean;
    isError: boolean;
}

const initialState: IFilmsState = {
    searchMovies: [],
    sequelsAndPrequels: [],
    activeTabName: 'top250movies',
    pagesId: {
        top250: 1,
        top100: 1,
        topAwait: 1,
        images: 1,
        reviews: 1,
    },
    filmRating: {},
    isLoading: false,
    isError: false,
};

export const loadMoviesBySearch = createAsyncThunk('films/loadMoviesBySearch', async (keyword: string, {rejectWithValue}) => {
    const response = await Services.getMoviesBySearch(keyword);

    if (response.status !== 200) {
        return rejectWithValue('Server Error!');
    }

    return response.data.films;
});

export const loadMovieSequelsAndPrequels = createAsyncThunk(
    'films/loadMovieSequelsAndPrequels',
    async (movieId: number, {rejectWithValue}) => {
        const response = await Services.getMovieSequelsAndPrequels(movieId);

        if (response.status !== 200) {
            return rejectWithValue('Server Error!');
        }

        return response.data;
    }
);

/**
 * Срез списка фильмов.
 */
const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setActiveTabName(state, action: PayloadAction<string>) {
            state.activeTabName = action.payload;
        },
        setTop250PageId(state, action: PayloadAction<number>) {
            state.pagesId.top250 = action.payload;
        },
        setTop100PageId(state, action: PayloadAction<number>) {
            state.pagesId.top100 = action.payload;
        },
        setTopAwaitPageId(state, action: PayloadAction<number>) {
            state.pagesId.topAwait = action.payload;
        },
        setImagesPageId(state, action: PayloadAction<number>) {
            state.pagesId.images = action.payload;
        },
        setReviewsPageId(state, action: PayloadAction<number>) {
            state.pagesId.reviews = action.payload;
        },
        setSearchMovies(state, action: PayloadAction<IMovie[]>) {
            state.searchMovies = action.payload;
        },
        setFilmRating(state, action) {
            state.filmRating = {};
            state.filmRating = {...action.payload};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadMoviesBySearch.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMoviesBySearch.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(loadMoviesBySearch.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
                state.searchMovies = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(loadMovieSequelsAndPrequels.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMovieSequelsAndPrequels.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(loadMovieSequelsAndPrequels.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
                state.sequelsAndPrequels = action.payload;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const {
    setActiveTabName,
    setTop250PageId,
    setTop100PageId,
    setTopAwaitPageId,
    setImagesPageId,
    setReviewsPageId,
    setSearchMovies,
    setFilmRating,
} = filmsSlice.actions;

export default filmsSlice.reducer;
