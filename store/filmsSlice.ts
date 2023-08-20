import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from 'Common/Models';
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
    activeTabName: string;
    top250PageId: number;
    top100PageId: number;
    topAwaitPageId: number;
    imagesPageId: number;
    reviewsPageId: number;
    filmRating: any;
}

const initialState: IFilmsState = {
    searchMovies: [],
    activeTabName: 'top250movies',
    top250PageId: 1,
    top100PageId: 1,
    topAwaitPageId: 1,
    imagesPageId: 1,
    reviewsPageId: 1,
    filmRating: {},
};

export const loadMoviesBySearch = createAsyncThunk('films/loadMoviesBySearch', async (keyword: string, {rejectWithValue, dispatch}) => {
    const response = await Services.getMoviesBySearch(keyword);

    if (response.status !== 200) {
        return rejectWithValue('Server Error!');
    }
    console.log(response.data.films);

    dispatch(setSearchMovies(response.data.films));

    return response.data.films;
});

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
            state.top250PageId = action.payload;
        },
        setTop100PageId(state, action: PayloadAction<number>) {
            state.top100PageId = action.payload;
        },
        setTopAwaitPageId(state, action: PayloadAction<number>) {
            state.topAwaitPageId = action.payload;
        },
        setImagesPageId(state, action: PayloadAction<number>) {
            state.imagesPageId = action.payload;
        },
        setReviewsPageId(state, action: PayloadAction<number>) {
            state.reviewsPageId = action.payload;
        },
        setSearchMovies(state, action: PayloadAction<IMovie[]>) {
            state.searchMovies = action.payload;
        },
        setFilmRating(state, action) {
            state.filmRating = {};
            state.filmRating = {...action.payload};
        },
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
