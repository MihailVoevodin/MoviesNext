import {EMovieAwards, EMovieBox, EMovieMainStaff} from 'Common/Enums';
import {T} from 'Common/Text';

/** Словарь для профессий деталей фильма. */
export const MAIN_STAFF_DICTIONARY = [
    {
        type: EMovieMainStaff.DIRECTOR,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.DIRECTOR],
    },
    {
        type: EMovieMainStaff.WRITER,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.WRITER],
    },
    {
        type: EMovieMainStaff.PRODUCER,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.PRODUCER],
    },
    {
        type: EMovieMainStaff.OPERATOR,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.OPERATOR],
    },
    {
        type: EMovieMainStaff.COMPOSER,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.COMPOSER],
    },
    {
        type: EMovieMainStaff.DESIGN,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.DESIGN],
    },
    {
        type: EMovieMainStaff.EDITOR,
        text: T.MovieMainStaffDictionary[EMovieMainStaff.EDITOR],
    },
];

/** Словарь для бюджетов. */
export const BOX_DICTIONARY = [
    {
        type: EMovieBox.BUDGET,
        text: T.MovieBoxDictionary[EMovieBox.BUDGET],
    },
    {
        type: EMovieBox.MARKETING,
        text: T.MovieBoxDictionary[EMovieBox.MARKETING],
    },
    {
        type: EMovieBox.USA_BOX_OFFICE,
        text: T.MovieBoxDictionary[EMovieBox.USA_BOX_OFFICE],
    },
    {
        type: EMovieBox.RUS_BOX_OFFICE,
        text: T.MovieBoxDictionary[EMovieBox.RUS_BOX_OFFICE],
    },
    {
        type: EMovieBox.WORLD_BOX_OFFICE,
        text: T.MovieBoxDictionary[EMovieBox.WORLD_BOX_OFFICE],
    },
];

/** Словарь для типов премий. */
export const AWARDS_DICTIONARY = [
    {
        type: EMovieAwards.OSCAR,
        text: T.MovieAwardsDictionary[EMovieAwards.OSCAR],
    },
    {
        type: EMovieAwards.GOLDEN_GLOBE,
        text: T.MovieAwardsDictionary[EMovieAwards.GOLDEN_GLOBE],
    },
    {
        type: EMovieAwards.BRITISH_ACADEMY,
        text: T.MovieAwardsDictionary[EMovieAwards.BRITISH_ACADEMY],
    },
    {
        type: EMovieAwards.CESAR,
        text: T.MovieAwardsDictionary[EMovieAwards.CESAR],
    },
    {
        type: EMovieAwards.ACTORS_GUILD_AWARDS,
        text: T.MovieAwardsDictionary[EMovieAwards.ACTORS_GUILD_AWARDS],
    },
    {
        type: EMovieAwards.NIKA,
        text: T.MovieAwardsDictionary[EMovieAwards.NIKA],
    },
    {
        type: EMovieAwards.GOLDEN_EAGLE,
        text: T.MovieAwardsDictionary[EMovieAwards.GOLDEN_EAGLE],
    },
    {
        type: EMovieAwards.SATURN,
        text: T.MovieAwardsDictionary[EMovieAwards.SATURN],
    },
    {
        type: EMovieAwards.GOYA,
        text: T.MovieAwardsDictionary[EMovieAwards.GOYA],
    },
    {
        type: EMovieAwards.EMMY,
        text: T.MovieAwardsDictionary[EMovieAwards.EMMY],
    },
    {
        type: EMovieAwards.ASIAN_FILM_ACADEMY,
        text: T.MovieAwardsDictionary[EMovieAwards.ASIAN_FILM_ACADEMY],
    },
    {
        type: EMovieAwards.EUROPEAN_FILM_ACADEMY,
        text: T.MovieAwardsDictionary[EMovieAwards.EUROPEAN_FILM_ACADEMY],
    },
    {
        type: EMovieAwards.MTV,
        text: T.MovieAwardsDictionary[EMovieAwards.MTV],
    },
    {
        type: EMovieAwards.MTV_RUSSIA,
        text: T.MovieAwardsDictionary[EMovieAwards.MTV_RUSSIA],
    },
    {
        type: EMovieAwards.GOLDEN_RASPBERRY,
        text: T.MovieAwardsDictionary[EMovieAwards.GOLDEN_RASPBERRY],
    },
    {
        type: EMovieAwards.GEORGE_MELIES,
        text: T.MovieAwardsDictionary[EMovieAwards.GEORGE_MELIES],
    },
    {
        type: EMovieAwards.CANNES_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.CANNES_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.BERLIN_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.BERLIN_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.VENICE_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.VENICE_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.MOSCOW_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.MOSCOW_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.KARLOVY_VARY_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.KARLOVY_VARY_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.KINOTAVR,
        text: T.MovieAwardsDictionary[EMovieAwards.KINOTAVR],
    },
    {
        type: EMovieAwards.SAN_SEBASTIAN_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.SAN_SEBASTIAN_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.SUNDANCE_FILM_FESTIVAL,
        text: T.MovieAwardsDictionary[EMovieAwards.SUNDANCE_FILM_FESTIVAL],
    },
];
