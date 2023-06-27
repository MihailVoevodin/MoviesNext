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
    top250PageId: number;
    top100PageId: number;
    topAwaitPageId: number;
    imagesPageId: number;
    reviewsPageId: number;
    isSearch: boolean;
}

const initialState: IFilmsState = {
    searchMovies: [],
    top250PageId: 1,
    top100PageId: 1,
    topAwaitPageId: 1,
    imagesPageId: 1,
    reviewsPageId: 1,
    isSearch: false,
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
        setIsSearch(state) {
            state.isSearch = !state.isSearch;
        },
        setSearchMovies(state, action: PayloadAction<IMovie[]>) {
            state.searchMovies = action.payload;
        },
    },
});

export const {setTop250PageId, setTop100PageId, setTopAwaitPageId, setImagesPageId, setReviewsPageId, setIsSearch, setSearchMovies} =
    filmsSlice.actions;

export default filmsSlice.reducer;
