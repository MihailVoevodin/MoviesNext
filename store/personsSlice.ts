import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IPerson } from "Common/Models";

/**
 * @param persons - Массив личностей по поиску.
 * @param name - Имя введенное в поиск.
 */
export interface IPersonsState {
  persons: IPerson[];
  name: string;
}

const initialState: IPersonsState = {
  persons: [],
  name: ''
};

/**
 * Срез списка личностей.
 */
const personsSlice = createSlice({
  name: 'persons',
  initialState: initialState,
  reducers: {
    setPersonsList(state, action: PayloadAction<IPerson[]>) {
      state.persons = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const {setPersonsList, setName} = personsSlice.actions;

export default personsSlice.reducer;
