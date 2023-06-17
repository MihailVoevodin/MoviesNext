import {createSlice, PayloadAction} from '@reduxjs/toolkit';

/**
 * @param top250PageId - Номер страницы топ 250 фильмов.
 * @param top100PageId - Номер страницы топ 100 популярных фильмов.
 * @param topAwaitPageId - Номер страницы топа ожидаемых фильмов.
 * @param imagesPageId - Номер страницы изображений.
 * @param reviewsPageId - Номер страницы рецензий.
 */
export interface IFilmsState {
    top250PageId: number;
    top100PageId: number;
    topAwaitPageId: number;
    findMoviesPageId: number;
    imagesPageId: number;
    reviewsPageId: number;
}

const initialState: IFilmsState = {
    top250PageId: 1,
    top100PageId: 1,
    topAwaitPageId: 1,
    findMoviesPageId: 1,
    imagesPageId: 1,
    reviewsPageId: 1,
};

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
        setFindMoviesPageId(state, action: PayloadAction<number>) {
            state.findMoviesPageId = action.payload;
        },
    },
});

export const {setTop250PageId, setTop100PageId, setTopAwaitPageId, setImagesPageId, setReviewsPageId, setFindMoviesPageId} =
    filmsSlice.actions;

export default filmsSlice.reducer;
