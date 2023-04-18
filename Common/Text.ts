import {
    EMovieMainStaff,
    EMovieBox,
    EMovieAwards,
    EMovieDistributions,
    EMovieImages,
    EMovieFacts,
    EMovieStaff,
    EReviewsSelect,
} from 'Common/Enums';

export const T = {
    MovieMainStaffDictionary: {
        [EMovieMainStaff.DIRECTOR]: 'Режиссер',
        [EMovieMainStaff.WRITER]: 'Сценарий',
        [EMovieMainStaff.PRODUCER]: 'Продюсер',
        [EMovieMainStaff.OPERATOR]: 'Оператор',
        [EMovieMainStaff.COMPOSER]: 'Композитор',
        [EMovieMainStaff.DESIGN]: 'Художник',
        [EMovieMainStaff.EDITOR]: 'Монтаж',
    },
    MovieBoxDictionary: {
        [EMovieBox.BUDGET]: 'Бюджет',
        [EMovieBox.MARKETING]: 'Маркетинг',
        [EMovieBox.USA]: 'Сборы в США',
        [EMovieBox.RUS]: 'Сборы в России',
        [EMovieBox.WORLD]: 'Сборы в мире',
    },
    MovieAwardsDictionary: {
        [EMovieAwards.OSCAR]: 'Оскар',
        [EMovieAwards.GOLDEN_GLOBE]: 'Золотой глобус',
        [EMovieAwards.BRITISH_ACADEMY]: 'Британская академия',
        [EMovieAwards.CESAR]: 'Сезар',
        [EMovieAwards.ACTORS_GUILD_AWARDS]: 'Премия Гильдии актеров',
        [EMovieAwards.NIKA]: 'Ника',
        [EMovieAwards.GOLDEN_EAGLE]: 'Золотой орел',
        [EMovieAwards.SATURN]: 'Сатурн',
        [EMovieAwards.GOYA]: 'Гойя',
        [EMovieAwards.EMMY]: 'Эмми',
        [EMovieAwards.ASIAN_FILM_ACADEMY]: 'Азиатская киноакадемия',
        [EMovieAwards.EUROPEAN_FILM_ACADEMY]: 'Европейская киноакадемия',
        [EMovieAwards.MTV]: 'Премия канала «MTV»',
        [EMovieAwards.MTV_RUSSIA]: 'Кинонаграды «MTV-Россия»',
        [EMovieAwards.GOLDEN_RASPBERRY]: 'Золотая малина',
        [EMovieAwards.GEORGE_MELIES]: 'Жорж',
        [EMovieAwards.CANNES_FILM_FESTIVAL]: 'Каннский кинофестиваль',
        [EMovieAwards.BERLIN_FILM_FESTIVAL]: 'Берлинский кинофестиваль',
        [EMovieAwards.VENICE_FILM_FESTIVAL]: 'Венецианский кинофестиваль',
        [EMovieAwards.MOSCOW_FILM_FESTIVAL]: 'ММКФ',
        [EMovieAwards.KARLOVY_VARY_FILM_FESTIVAL]: 'Карловы Вары',
        [EMovieAwards.KINOTAVR]: 'Кинотавр',
        [EMovieAwards.SAN_SEBASTIAN_FILM_FESTIVAL]: 'Сан-Себастьян',
        [EMovieAwards.SUNDANCE_FILM_FESTIVAL]: 'Сандэнс',
    },
    MovieDistributionsDictionary: {
        [EMovieDistributions.COUNTRY_SPECIFIC]: 'Премьера в России',
        [EMovieDistributions.WORLD_PREMIER]: 'Мировая премьера',
        [EMovieDistributions.PREMIERE]: 'Премьеры в странах',
        [EMovieDistributions.ALL]: 'На DVD',
    },
    MovieImagesDictionary: {
        [EMovieImages.STILL]: 'Кадры',
        [EMovieImages.SHOOTING]: 'Съемки',
        [EMovieImages.POSTER]: 'Постеры',
        [EMovieImages.FAN_ART]: 'Фан-арты',
        [EMovieImages.PROMO]: 'Промо',
        [EMovieImages.CONCEPT]: 'Концепты',
        [EMovieImages.WALLPAPER]: 'Обои',
        [EMovieImages.COVER]: 'Обложки',
        [EMovieImages.SCREENSHOT]: 'Скриншоты',
    },
    MovieFactsDictionary: {
        [EMovieFacts.BLOOPER]: 'Ляпы',
        [EMovieFacts.FACT]: 'Факты',
    },
    MovieStaffDictionary: {
        [EMovieStaff.DIRECTOR]: ['Режиссер', 'Режиссеры'],
        [EMovieStaff.ACTOR]: ['Актер', 'Актеры'],
        [EMovieStaff.PRODUCER]: ['Продюсер', 'Продюсеры'],
        [EMovieStaff.WRITER]: ['Сценарист', 'Сценаристы'],
        [EMovieStaff.OPERATOR]: ['Оператор', 'Операторы'],
        [EMovieStaff.COMPOSER]: ['Композитор', 'Композиторы'],
        [EMovieStaff.DESIGN]: ['Художник', 'Художники'],
        [EMovieStaff.EDITOR]: ['Монтажер', 'Монтажеры'],
        [EMovieStaff.PRODUCER_USSR]: ['Директор фильма', 'Директора фильма'],
        [EMovieStaff.TRANSLATOR]: ['Переводчик', 'Переводчики'],
        [EMovieStaff.VOICE_DIRECTOR]: ['Режиссер дубляжа', 'Режиссеры дубляжа'],
        [EMovieStaff.UNKNOWN]: ['Другой', 'Другие'],
    },
    ReviewsSelectDictionary: {
        [EReviewsSelect.DATE_ASC]: 'По возрастанию даты',
        [EReviewsSelect.DATE_DESC]: 'По убыванию даты',
        [EReviewsSelect.USER_POSITIVE_RATING_ASC]: 'По возрастанию позитивных рецензий',
        [EReviewsSelect.USER_POSITIVE_RATING_DESC]: 'По убыванию позитивных рецензий',
        [EReviewsSelect.USER_NEGATIVE_RATING_ASC]: 'По возрастанию негативных рецензий',
        [EReviewsSelect.USER_NEGATIVE_RATING_DESC]: 'По убыванию негативных рецензий',
    },
};
