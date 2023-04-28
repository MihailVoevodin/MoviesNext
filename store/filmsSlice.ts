import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IState {
    pageId: number;
    imagesPageId: number;
    reviewsPageId: number;
}

const initialState: IState = {
    pageId: 1,
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
        setPageId(state, action: PayloadAction<number>) {
            state.pageId = action.payload;
        },
        setImagesPageId(state, action: PayloadAction<number>) {
            state.imagesPageId = action.payload;
        },
        setReviewsPageId(state, action: PayloadAction<number>) {
            state.reviewsPageId = action.payload;
        },
    },
});

export const {setPageId, setImagesPageId, setReviewsPageId} = filmsSlice.actions;

export default filmsSlice.reducer;
