import {
    EMovieAwards,
    EMovieBox,
    EMovieDistributions,
    EMovieImages,
    EMovieMainStaff,
    EMovieFacts,
    EMovieStaff,
    EReviewsSelect,
} from 'Common/Enums';
import {T} from 'Common/Text';

/** Словарь для профессий деталей фильма. */
export const MAIN_STAFF_DICTIONARY = [
    {
        type: EMovieMainStaff.DIRECTOR,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.DIRECTOR],
    },
    {
        type: EMovieMainStaff.WRITER,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.WRITER],
    },
    {
        type: EMovieMainStaff.PRODUCER,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.PRODUCER],
    },
    {
        type: EMovieMainStaff.OPERATOR,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.OPERATOR],
    },
    {
        type: EMovieMainStaff.COMPOSER,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.COMPOSER],
    },
    {
        type: EMovieMainStaff.DESIGN,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.DESIGN],
    },
    {
        type: EMovieMainStaff.EDITOR,
        text: T.Movie.Staff.MainDictionary[EMovieMainStaff.EDITOR],
    },
];

/** Словарь для бюджетов. */
export const BOX_DICTIONARY = [
    {
        type: EMovieBox.BUDGET,
        text: T.Movie.Box.Dictionary[EMovieBox.BUDGET],
    },
    {
        type: EMovieBox.MARKETING,
        text: T.Movie.Box.Dictionary[EMovieBox.MARKETING],
    },
    {
        type: EMovieBox.USA,
        text: T.Movie.Box.Dictionary[EMovieBox.USA],
    },
    {
        type: EMovieBox.RUS,
        text: T.Movie.Box.Dictionary[EMovieBox.RUS],
    },
    {
        type: EMovieBox.WORLD,
        text: T.Movie.Box.Dictionary[EMovieBox.WORLD],
    },
];

/** Словарь для типов премий. */
export const AWARDS_DICTIONARY = [
    {
        type: EMovieAwards.OSCAR,
        text: T.Movie.Awards.Dictionary[EMovieAwards.OSCAR],
    },
    {
        type: EMovieAwards.GOLDEN_GLOBE,
        text: T.Movie.Awards.Dictionary[EMovieAwards.GOLDEN_GLOBE],
    },
    {
        type: EMovieAwards.BRITISH_ACADEMY,
        text: T.Movie.Awards.Dictionary[EMovieAwards.BRITISH_ACADEMY],
    },
    {
        type: EMovieAwards.CESAR,
        text: T.Movie.Awards.Dictionary[EMovieAwards.CESAR],
    },
    {
        type: EMovieAwards.ACTORS_GUILD_AWARDS,
        text: T.Movie.Awards.Dictionary[EMovieAwards.ACTORS_GUILD_AWARDS],
    },
    {
        type: EMovieAwards.NIKA,
        text: T.Movie.Awards.Dictionary[EMovieAwards.NIKA],
    },
    {
        type: EMovieAwards.GOLDEN_EAGLE,
        text: T.Movie.Awards.Dictionary[EMovieAwards.GOLDEN_EAGLE],
    },
    {
        type: EMovieAwards.SATURN,
        text: T.Movie.Awards.Dictionary[EMovieAwards.SATURN],
    },
    {
        type: EMovieAwards.GOYA,
        text: T.Movie.Awards.Dictionary[EMovieAwards.GOYA],
    },
    {
        type: EMovieAwards.EMMY,
        text: T.Movie.Awards.Dictionary[EMovieAwards.EMMY],
    },
    {
        type: EMovieAwards.ASIAN_FILM_ACADEMY,
        text: T.Movie.Awards.Dictionary[EMovieAwards.ASIAN_FILM_ACADEMY],
    },
    {
        type: EMovieAwards.EUROPEAN_FILM_ACADEMY,
        text: T.Movie.Awards.Dictionary[EMovieAwards.EUROPEAN_FILM_ACADEMY],
    },
    {
        type: EMovieAwards.MTV,
        text: T.Movie.Awards.Dictionary[EMovieAwards.MTV],
    },
    {
        type: EMovieAwards.MTV_RUSSIA,
        text: T.Movie.Awards.Dictionary[EMovieAwards.MTV_RUSSIA],
    },
    {
        type: EMovieAwards.GOLDEN_RASPBERRY,
        text: T.Movie.Awards.Dictionary[EMovieAwards.GOLDEN_RASPBERRY],
    },
    {
        type: EMovieAwards.GEORGE_MELIES,
        text: T.Movie.Awards.Dictionary[EMovieAwards.GEORGE_MELIES],
    },
    {
        type: EMovieAwards.CANNES_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.CANNES_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.BERLIN_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.BERLIN_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.VENICE_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.VENICE_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.MOSCOW_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.MOSCOW_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.KARLOVY_VARY_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.KARLOVY_VARY_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.KINOTAVR,
        text: T.Movie.Awards.Dictionary[EMovieAwards.KINOTAVR],
    },
    {
        type: EMovieAwards.SAN_SEBASTIAN_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.SAN_SEBASTIAN_FILM_FESTIVAL],
    },
    {
        type: EMovieAwards.SUNDANCE_FILM_FESTIVAL,
        text: T.Movie.Awards.Dictionary[EMovieAwards.SUNDANCE_FILM_FESTIVAL],
    },
];

/** Словарь для типов премьер. */
export const DISTRIBUTIONS_DICTIONARY = [
    {
        type: EMovieDistributions.COUNTRY_SPECIFIC,
        text: T.Movie.Distributions.Dictionary[EMovieDistributions.COUNTRY_SPECIFIC],
    },
    {
        type: EMovieDistributions.WORLD_PREMIER,
        text: T.Movie.Distributions.Dictionary[EMovieDistributions.WORLD_PREMIER],
    },
    {
        type: EMovieDistributions.PREMIERE,
        text: T.Movie.Distributions.Dictionary[EMovieDistributions.PREMIERE],
    },
    {
        type: EMovieDistributions.ALL,
        text: T.Movie.Distributions.Dictionary[EMovieDistributions.ALL],
    },
];

/** Словарь для типов изображений. */
export const IMAGES_DICTIONARY = [
    {
        type: EMovieImages.STILL,
        text: T.Movie.Images.Dictionary[EMovieImages.STILL],
    },
    {
        type: EMovieImages.SHOOTING,
        text: T.Movie.Images.Dictionary[EMovieImages.SHOOTING],
    },
    {
        type: EMovieImages.POSTER,
        text: T.Movie.Images.Dictionary[EMovieImages.POSTER],
    },
    {
        type: EMovieImages.FAN_ART,
        text: T.Movie.Images.Dictionary[EMovieImages.FAN_ART],
    },
    {
        type: EMovieImages.PROMO,
        text: T.Movie.Images.Dictionary[EMovieImages.PROMO],
    },
    {
        type: EMovieImages.CONCEPT,
        text: T.Movie.Images.Dictionary[EMovieImages.CONCEPT],
    },
    {
        type: EMovieImages.WALLPAPER,
        text: T.Movie.Images.Dictionary[EMovieImages.WALLPAPER],
    },
    {
        type: EMovieImages.COVER,
        text: T.Movie.Images.Dictionary[EMovieImages.COVER],
    },
    {
        type: EMovieImages.SCREENSHOT,
        text: T.Movie.Images.Dictionary[EMovieImages.SCREENSHOT],
    },
];

/** Словарь для типов фактов. */
export const FACTS_DICTIONARY = [
    {
        type: EMovieFacts.BLOOPER,
        text: T.Movie.Facts.Dictionary[EMovieFacts.BLOOPER],
    },
    {
        type: EMovieFacts.FACT,
        text: T.Movie.Facts.Dictionary[EMovieFacts.FACT],
    },
];

/** Словарь для типов профессий для отдельной страницы. */
export const STAFF_DICTIONARY = [
    {
        type: EMovieStaff.DIRECTOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.DIRECTOR],
    },
    {
        type: EMovieStaff.ACTOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.ACTOR],
    },
    {
        type: EMovieStaff.PRODUCER,
        text: T.Movie.Staff.Dictionary[EMovieStaff.PRODUCER],
    },
    {
        type: EMovieStaff.WRITER,
        text: T.Movie.Staff.Dictionary[EMovieStaff.WRITER],
    },
    {
        type: EMovieStaff.OPERATOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.OPERATOR],
    },
    {
        type: EMovieStaff.COMPOSER,
        text: T.Movie.Staff.Dictionary[EMovieStaff.COMPOSER],
    },
    {
        type: EMovieStaff.DESIGN,
        text: T.Movie.Staff.Dictionary[EMovieStaff.DESIGN],
    },
    {
        type: EMovieStaff.EDITOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.EDITOR],
    },
    {
        type: EMovieStaff.PRODUCER_USSR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.PRODUCER_USSR],
    },
    {
        type: EMovieStaff.TRANSLATOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.TRANSLATOR],
    },
    {
        type: EMovieStaff.VOICE_DIRECTOR,
        text: T.Movie.Staff.Dictionary[EMovieStaff.VOICE_DIRECTOR],
    },
    {
        type: EMovieStaff.UNKNOWN,
        text: T.Movie.Staff.Dictionary[EMovieStaff.UNKNOWN],
    },
];

/** Словарь для селекта сортировки рецензий. */
export const REVIEWS_SELECT_DICTIONARY = [
    {
        value: EReviewsSelect.DATE_ASC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.DATE_ASC],
    },
    {
        value: EReviewsSelect.DATE_DESC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.DATE_DESC],
    },
    {
        value: EReviewsSelect.USER_POSITIVE_RATING_ASC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.USER_POSITIVE_RATING_ASC],
    },
    {
        value: EReviewsSelect.USER_POSITIVE_RATING_DESC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.USER_POSITIVE_RATING_DESC],
    },
    {
        value: EReviewsSelect.USER_NEGATIVE_RATING_ASC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.USER_NEGATIVE_RATING_ASC],
    },
    {
        value: EReviewsSelect.USER_NEGATIVE_RATING_DESC,
        label: T.Movie.Reviews.SortingSelect.SelectDictionary[EReviewsSelect.USER_NEGATIVE_RATING_DESC],
    },
];

/** Константа для регулярных выражений. */
export const Regulars = {
    fixTagsInText: /<[^>]+>|&[^>]+;/g,
};
