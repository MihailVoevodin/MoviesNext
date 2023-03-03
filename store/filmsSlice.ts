import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    pageId: 1,
    imagesPageId: 1,
};

/**
 * Срез списка фильмов.
 */
const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setPageId(state, action) {
            state.pageId = action.payload
        },
        setImagesPageId(state, action) {
            state.imagesPageId = action.payload
        }
    },
});

export const {setPageId, setImagesPageId} = filmsSlice.actions;

export default filmsSlice.reducer;