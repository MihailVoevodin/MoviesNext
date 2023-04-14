import {EMovieStaff} from 'Common/Enums';

export const T = {
    MovieStaffDictionary: {
        [EMovieStaff.DIRECTOR]: 'Режиссер',
        [EMovieStaff.WRITER]: 'Сценарий',
        [EMovieStaff.PRODUCER]: 'Продюсер',
        [EMovieStaff.OPERATOR]: 'Оператор',
        [EMovieStaff.COMPOSER]: 'Композитор',
        [EMovieStaff.DESIGN]: 'Художник',
        [EMovieStaff.EDITOR]: 'Монтаж',
    },
    boxTextArray: [
        {
            id: 1,
            boxType: 'BUDGET',
            boxText: 'Бюджет',
        },
        {
            id: 2,
            boxType: 'MARKETING',
            boxText: 'Маркетинг',
        },
        {
            id: 3,
            boxType: 'USA',
            boxText: 'Сборы в США',
        },
        {
            id: 4,
            boxType: 'RUS',
            boxText: 'Сборы в России',
        },
        {
            id: 5,
            boxType: 'WORLD',
            boxText: 'Сборы в мире',
        },
    ],
    awardsTypeArray: [
        'Оскар',
        'Золотой глобус',
        'Британская академия',
        'Сезар',
        'Премия Гильдии актеров',
        'Ника',
        'Золотой орел',
        'Сатурн',
        'Гойя',
        'Эмми',
        'Азиатская киноакадемия',
        'Европейская киноакадемия',
        'Премия канала «MTV»',
        'Кинонаграды «MTV-Россия»',
        'Золотая малина',
        'Жорж',
        'Каннский кинофестиваль',
        'Берлинский кинофестиваль',
        'Венецианский кинофестиваль',
        'ММКФ',
        'Карловы Вары',
        'Кинотавр',
        'Сан-Себастьян',
        'Сандэнс',
    ],
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
