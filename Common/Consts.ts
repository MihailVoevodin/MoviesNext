import {EMovieAwards, EMovieBox, EMovieDistributions, EMovieImages, EMovieMainStaff, EMovieFacts, EMovieStaff} from 'Common/Enums';
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
        type: EMovieBox.USA,
        text: T.MovieBoxDictionary[EMovieBox.USA],
    },
    {
        type: EMovieBox.RUS,
        text: T.MovieBoxDictionary[EMovieBox.RUS],
    },
    {
        type: EMovieBox.WORLD,
        text: T.MovieBoxDictionary[EMovieBox.WORLD],
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

/** Словарь для типов премьер. */
export const DISTRIBUTIONS_DICTIONARY = [
    {
        type: EMovieDistributions.COUNTRY_SPECIFIC,
        text: T.MovieDistributionsDictionary[EMovieDistributions.COUNTRY_SPECIFIC],
    },
    {
        type: EMovieDistributions.WORLD_PREMIER,
        text: T.MovieDistributionsDictionary[EMovieDistributions.WORLD_PREMIER],
    },
    {
        type: EMovieDistributions.PREMIERE,
        text: T.MovieDistributionsDictionary[EMovieDistributions.PREMIERE],
    },
    {
        type: EMovieDistributions.ALL,
        text: T.MovieDistributionsDictionary[EMovieDistributions.ALL],
    },
];

/** Словарь для типов изображений. */
export const IMAGES_DICTIONARY = [
    {
        type: EMovieImages.STILL,
        text: T.MovieImagesDictionary[EMovieImages.STILL],
    },
    {
        type: EMovieImages.SHOOTING,
        text: T.MovieImagesDictionary[EMovieImages.SHOOTING],
    },
    {
        type: EMovieImages.POSTER,
        text: T.MovieImagesDictionary[EMovieImages.POSTER],
    },
    {
        type: EMovieImages.FAN_ART,
        text: T.MovieImagesDictionary[EMovieImages.FAN_ART],
    },
    {
        type: EMovieImages.PROMO,
        text: T.MovieImagesDictionary[EMovieImages.PROMO],
    },
    {
        type: EMovieImages.CONCEPT,
        text: T.MovieImagesDictionary[EMovieImages.CONCEPT],
    },
    {
        type: EMovieImages.WALLPAPER,
        text: T.MovieImagesDictionary[EMovieImages.WALLPAPER],
    },
    {
        type: EMovieImages.COVER,
        text: T.MovieImagesDictionary[EMovieImages.COVER],
    },
    {
        type: EMovieImages.SCREENSHOT,
        text: T.MovieImagesDictionary[EMovieImages.SCREENSHOT],
    },
];

/** Словарь для типов фактов. */
export const FACTS_DICTIONARY = [
    {
        type: EMovieFacts.BLOOPER,
        text: T.MovieFactsDictionary[EMovieFacts.BLOOPER],
    },
    {
        type: EMovieFacts.FACT,
        text: T.MovieFactsDictionary[EMovieFacts.FACT],
    },
];

/** Словарь для типов профессий для отдельной страницы. */
export const STAFF_DICTIONARY = [
    {
        type: EMovieStaff.DIRECTOR,
        text: T.MovieStaffDictionary[EMovieStaff.DIRECTOR],
    },
    {
        type: EMovieStaff.ACTOR,
        text: T.MovieStaffDictionary[EMovieStaff.ACTOR],
    },
    {
        type: EMovieStaff.PRODUCER,
        text: T.MovieStaffDictionary[EMovieStaff.PRODUCER],
    },
    {
        type: EMovieStaff.WRITER,
        text: T.MovieStaffDictionary[EMovieStaff.WRITER],
    },
    {
        type: EMovieStaff.OPERATOR,
        text: T.MovieStaffDictionary[EMovieStaff.OPERATOR],
    },
    {
        type: EMovieStaff.COMPOSER,
        text: T.MovieStaffDictionary[EMovieStaff.COMPOSER],
    },
    {
        type: EMovieStaff.DESIGN,
        text: T.MovieStaffDictionary[EMovieStaff.DESIGN],
    },
    {
        type: EMovieStaff.EDITOR,
        text: T.MovieStaffDictionary[EMovieStaff.EDITOR],
    },
    {
        type: EMovieStaff.PRODUCER_USSR,
        text: T.MovieStaffDictionary[EMovieStaff.PRODUCER_USSR],
    },
    {
        type: EMovieStaff.TRANSLATOR,
        text: T.MovieStaffDictionary[EMovieStaff.TRANSLATOR],
    },
    {
        type: EMovieStaff.VOICE_DIRECTOR,
        text: T.MovieStaffDictionary[EMovieStaff.VOICE_DIRECTOR],
    },
    {
        type: EMovieStaff.UNKNOWN,
        text: T.MovieStaffDictionary[EMovieStaff.UNKNOWN],
    },
];
