import {IAppState} from 'store/store';
import {IPersonsState} from 'store/persons/personsSlice';

/** Селектор личностей. */
export const selectPersonsList = (state: IAppState): IPersonsState['persons'] => state.persons.persons;

/** Селектор имени личности в строке поиска. */
export const selectName = (state: IAppState): IPersonsState['name'] => state.persons.name;

/** Селектор состояния ошибки при работе с поиском личностей. */
export const selectIsErrorPersons = (state: IAppState): IPersonsState['isError'] => state.persons.isError;

/** Селектор состояния загрузки при работе с поиском личностей. */
export const selectIsLoadingPersons = (state: IAppState): IPersonsState['isLoading'] => state.persons.isLoading;
