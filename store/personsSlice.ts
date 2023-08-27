import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPerson} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param persons - Массив личностей по поиску.
 * @param name - Имя введенное в поиск.
 */
export interface IPersonsState {
    persons: IPerson[];
    name: string;
    isLoading: boolean;
    isError: boolean;
}

const initialState: IPersonsState = {
    persons: [],
    name: '',
    isLoading: false,
    isError: false,
};

export const loadPersonsList = createAsyncThunk('persons/loadPersonsList', async (name: string, {rejectWithValue}) => {
    const response = await Services.getPersonsList(name);

    if (response.status !== 200) {
        return rejectWithValue('Server Error!');
    }

    return response.data.items;
});

/**
 * Срез списка личностей.
 */
const personsSlice = createSlice({
    name: 'persons',
    initialState: initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPersonsList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadPersonsList.rejected, (state) => {
                state.isError = true;
            })
            .addCase(loadPersonsList.fulfilled, (state, action) => {
                state.persons = action.payload;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const {setName} = personsSlice.actions;

export default personsSlice.reducer;
