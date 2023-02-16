import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    pageId: 1,
};

/**
 * Срез списка фильмов.
 */
const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setPageId(state, action) {
            console.log(action.payload)
            state.pageId = action.payload
        }
    },
});

export const {setPageId} = filmsSlice.actions;

export default filmsSlice.reducer;