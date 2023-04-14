import {EMovieStaff} from 'Common/Enums';
import {T} from 'Common/Text';

export const STAFF_DICTIONARY = [
    {
        id: EMovieStaff.DIRECTOR,
        text: T.MovieStaffDictionary[EMovieStaff.DIRECTOR],
    },
    {
        id: EMovieStaff.WRITER,
        text: T.MovieStaffDictionary[EMovieStaff.WRITER],
    },
    {
        id: EMovieStaff.PRODUCER,
        text: T.MovieStaffDictionary[EMovieStaff.PRODUCER],
    },
    {
        id: EMovieStaff.OPERATOR,
        text: T.MovieStaffDictionary[EMovieStaff.OPERATOR],
    },
    {
        id: EMovieStaff.COMPOSER,
        text: T.MovieStaffDictionary[EMovieStaff.COMPOSER],
    },
    {
        id: EMovieStaff.DESIGN,
        text: T.MovieStaffDictionary[EMovieStaff.DESIGN],
    },
    {
        id: EMovieStaff.EDITOR,
        text: T.MovieStaffDictionary[EMovieStaff.EDITOR],
    },
];
