import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IFiltersState {
  genreId: string;
  countryId: string;
  orderId: string;
  typeId: string;
  ratingFrom: string;
  ratingTo: string;
  yearFrom: string;
  yearTo: string;
  keyword: string;
}

const initialState: IFiltersState = {
  genreId: '',
  countryId: '',
  orderId: 'RATING',
  typeId: 'ALL',
  ratingFrom: '0',
  ratingTo: '10',
  yearFrom: '1000',
  yearTo: '3000',
  keyword: '',
};

/**
 * Срез фильтров поиска фильмов.
 */
const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setGenreId(state, action: PayloadAction<string>) {
      state.genreId = action.payload;
    },
    setCountryId(state, action: PayloadAction<string>) {
      state.countryId = action.payload;
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload;
    },
    setTypeId(state, action: PayloadAction<string>) {
      state.typeId = action.payload;
    },
    setRatingFrom(state, action: PayloadAction<string>) {
      state.ratingFrom = action.payload;
    },
    setRatingTo(state, action: PayloadAction<string>) {
      state.ratingTo = action.payload;
    },
    setYearFrom(state, action: PayloadAction<string>) {
      state.yearFrom = action.payload;
    },
    setYearTo(state, action: PayloadAction<string>) {
      state.yearTo = action.payload;
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
  },
});

export const {setGenreId, setCountryId, setOrderId, setTypeId, setRatingFrom, setRatingTo, setYearFrom, setYearTo, setKeyword} = filtersSlice.actions;

export default filtersSlice.reducer;