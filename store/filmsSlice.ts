import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export const loadFilms = createAsyncThunk('forecast/getForecastWeather', async (page: number, {rejectWithValue, dispatch}) => {
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`);
    const data = response.data.films;
    if (response.status !== 200) {
        return rejectWithValue('Server Error!');
    }

    dispatch(setFilms(data));
    return;
});

const initialState = {
    films: [],
};

/**
 * Срез списка фильмов.
 */
const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setFilms(state, action) {
            console.log(action.payload)
            state.films = action.payload;
        },
    },
});

export const {setFilms} = filmsSlice.actions;

export default filmsSlice.reducer;