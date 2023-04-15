import {EMovieMainStaff, EMovieBox, EMovieAwards} from 'Common/Enums';

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
        [EMovieBox.USA_BOX_OFFICE]: 'Сборы в США',
        [EMovieBox.RUS_BOX_OFFICE]: 'Сборы в России',
        [EMovieBox.WORLD_BOX_OFFICE]: 'Сборы в мире',
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
    distributionsTextArray: [
        {
            id: 1,
            type: 'COUNTRY_SPECIFIC',
            text: 'Премьера в России',
        },
        {
            id: 2,
            type: 'WORLD_PREMIER',
            text: 'Мировая премьера',
        },
        {
            id: 3,
            type: 'PREMIERE',
            text: 'Премьеры в странах',
        },
        {
            id: 4,
            type: 'ALL',
            text: 'На DVD',
        },
    ],
    imagesTextArray: [
        {
            id: 1,
            type: 'STILL',
            text: 'Кадры',
        },
        {
            id: 2,
            type: 'SHOOTING',
            text: 'Съемки',
        },
        {
            id: 3,
            type: 'POSTER',
            text: 'Постеры',
        },
        {
            id: 4,
            type: 'FAN_ART',
            text: 'Фан-арты',
        },
        {
            id: 5,
            type: 'PROMO',
            text: 'Промо',
        },
        {
            id: 6,
            type: 'CONCEPT',
            text: 'Концепты',
        },
        {
            id: 7,
            type: 'WALLPAPER',
            text: 'Обои',
        },
        {
            id: 8,
            type: 'COVER',
            text: 'Обложки',
        },
        {
            id: 9,
            type: 'SCREENSHOT',
            text: 'Скриншоты',
        },
    ],
    factsTextArray: [
        {
            id: 1,
            type: 'BLOOPER',
            text: 'Ляпы',
        },
        {
            id: 2,
            type: 'FACT',
            text: 'Факты',
        },
    ],
    castTextArray: [
        {
            id: 1,
            type: 'DIRECTOR',
            text: ['Режиссер', 'Режиссеры'],
        },
        {
            id: 2,
            type: 'ACTOR',
            text: ['Актер', 'Актеры'],
        },
        {
            id: 3,
            type: 'PRODUCER',
            text: ['Продюсер', 'Продюсеры'],
        },
        {
            id: 4,
            type: 'WRITER',
            text: ['Сценарист', 'Сценаристы'],
        },
        {
            id: 5,
            type: 'OPERATOR',
            text: ['Оператор', 'Операторы'],
        },
        {
            id: 6,
            type: 'COMPOSER',
            text: ['Композитор', 'Композиторы'],
        },
        {
            id: 7,
            type: 'DESIGN',
            text: ['Художник', 'Художники'],
        },
        {
            id: 8,
            type: 'EDITOR',
            text: ['Монтажер', 'Монтажеры'],
        },
        {
            id: 9,
            type: 'PRODUCER_USSR',
            text: ['Директор фильма', 'Директора фильма'],
        },
        {
            id: 10,
            type: 'TRANSLATOR',
            text: ['Переводчик', 'Переводчики'],
        },
        {
            id: 11,
            type: 'VOICE_DIRECTOR',
            text: ['Режиссер дубляжа', 'Режиссеры дубляжа'],
        },
        {
            id: 12,
            type: 'UNKNOWN',
            text: ['Другой', 'Другие'],
        },
    ],
};
