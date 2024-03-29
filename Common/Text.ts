import {
    EMovieMainStaff,
    EMovieBox,
    EMovieAwards,
    EMovieDistributions,
    EMovieImages,
    EMovieFacts,
    EMovieStaff,
    EReviewsSelect,
    EMpaaRating,
} from 'Common/Enums';

export const T = {
    date: 'D MMMM YYYY',
    dateAndTime: 'DD MMMM YYYY | hh:mm',
    Pages: {
        backToMovie: 'Информация о фильме',
        MovieDefault: 'Обзор',
        MovieLink: (movieId: number | string | string[] | undefined): string => `/movie/${movieId}`,
        MainPages: [
            {
                title: 'Фильмы: Топ 250',
                text: 'Топ 250 фильмов',
                link: (pageId: number): string => `/movies/top250movies/page/${pageId}`,
                path: 'top250movies',
            },
            {
                title: 'Фильмы: Топ 100 популярных',
                text: 'Топ 100 популярных фильмов',
                link: (pageId: number): string => `/movies/top100popular/page/${pageId}`,
                path: 'top100popular',
            },
            {
                title: 'Фильмы: Ожидаемые',
                text: 'Ожидаемые фильмы',
                link: (pageId: number): string => `/movies/topAwaitMovies/page/${pageId}`,
                path: 'topAwaitMovies',
            },
            {
                title: 'Фильмы: Поиск фильмов',
                text: 'Поиск фильмов',
                link: (pageId: number): string => `/movies/findMovies/page/${pageId}`,
                path: 'findMovies',
            },
        ],
        Facts: {
            label: 'Факты',
            link: (movieId: number): string => `/movie/${movieId}/facts`,
            empty: 'Интересные факты о фильме не найдены',
        },
        Staff: {
            label: 'Создатели',
            link: (movieId: number | string | string[] | undefined): string => `/movie/${movieId}/staff`,
            empty: 'Нет данных о создателях',
        },
        Videos: {
            label: 'Видео',
            link: (movieId: number): string => `/movie/${movieId}/videos`,
            empty: 'Видеоматериалы отсутствуют',
        },
        Awards: {
            label: 'Награды',
            link: (movieId: number): string => `/movie/${movieId}/awards`,
            empty: 'Нет данных о наградах',
        },
        Distributions: {
            label: 'Прокат',
            link: (movieId: number): string => `/movie/${movieId}/distributions`,
            empty: 'Нет данных о прокате',
        },
        Images: {
            label: 'Изображения',
            link: (movieId: number | string | string[] | undefined, type: string, pageId: number): string =>
                `/movie/${movieId}/images/${pageId}?&type=${type}`,
            empty: 'Нет данных об изображениях',
        },
        Reviews: {
            label: 'Рецензии',
            link: (movieId: number | string | string[] | undefined, order: string, pageId: number): string =>
                `/movie/${movieId}/reviews/${pageId}?&order=${order}`,
            empty: 'Рецензии на фильм отсутствуют',
        },
        Persons: {
            label: 'Личности',
            link: (personId: number): string => `/name/${personId}`,
            searchLink: (name: string): string => `/persons?name=${name}`,
        },
        Profile: {
            label: 'Профиль',
            link: '/profile',
        },
    },
    FiltersInputs: {
        genre: {
            name: 'genreId',
            placeholder: 'Выберите жанр',
            text: 'Жанр:',
        },
        country: {
            name: 'countryId',
            placeholder: 'Выберите страну',
            text: 'Страна:',
        },
        order: {
            name: 'orderId',
            placeholder: 'Выберите порядок',
            text: 'Сортировка:',
        },
        type: {
            name: 'typeId',
            placeholder: 'Выберите тип видео',
            text: 'Тип видеоматериала:',
        },
        ratingFrom: {
            name: 'ratingFrom',
            placeholder: 'Введите рейтинг',
            text: 'Рейтинг от:',
        },
        ratingTo: {
            name: 'ratingTo',
            placeholder: 'Введите рейтинг',
            text: 'Рейтинг до:',
        },
        yearFrom: {
            name: 'yearFrom',
            placeholder: 'Введите год',
            text: 'Год от:',
        },
        yearTo: {
            name: 'yearTo',
            placeholder: 'Введите год',
            text: 'Год до:',
        },
        keyword: {
            name: 'keyword',
            placeholder: 'Введите ключевое слово',
            text: 'Ключевое слово:',
        },
        button: {
            text: 'Найти фильмы',
        },
    },
    Movie: {
        movieTitle: 'О фильме',
        serialTitle: 'О сериале',
        year: 'Год производства',
        country: 'Страна',
        slogan: 'Слоган',
        genre: 'Жанр',
        age: 'Возраст',
        ratingMPAA: 'Рейтинг MPAA',
        duration: 'Время',
        castTitle: 'В ролях',
        countable: {
            grade: ['оценка', 'оценки', 'оценок'],
            actors: ['актер', 'актера', 'актеров'],
        },
        Reviews: {
            SortingSelect: {
                label: 'Сортировать:',
                SelectDictionary: {
                    [EReviewsSelect.DATE_ASC]: 'По возрастанию даты',
                    [EReviewsSelect.DATE_DESC]: 'По убыванию даты',
                    [EReviewsSelect.USER_POSITIVE_RATING_ASC]: 'По возрастанию позитивных рецензий',
                    [EReviewsSelect.USER_POSITIVE_RATING_DESC]: 'По убыванию позитивных рецензий',
                    [EReviewsSelect.USER_NEGATIVE_RATING_ASC]: 'По возрастанию негативных рецензий',
                    [EReviewsSelect.USER_NEGATIVE_RATING_DESC]: 'По убыванию негативных рецензий',
                },
            },
            Types: {
                all: 'Всего',
                positive: 'Позитивные',
                negative: 'Негативные',
                neutral: 'Нейтральные',
            },
        },
        Staff: {
            MainDictionary: {
                [EMovieMainStaff.DIRECTOR]: 'Режиссер',
                [EMovieMainStaff.WRITER]: 'Сценарий',
                [EMovieMainStaff.PRODUCER]: 'Продюсер',
                [EMovieMainStaff.OPERATOR]: 'Оператор',
                [EMovieMainStaff.COMPOSER]: 'Композитор',
                [EMovieMainStaff.DESIGN]: 'Художник',
                [EMovieMainStaff.EDITOR]: 'Монтаж',
            },
            Dictionary: {
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
        },
        Box: {
            Dictionary: {
                [EMovieBox.BUDGET]: 'Бюджет',
                [EMovieBox.MARKETING]: 'Маркетинг',
                [EMovieBox.USA]: 'Сборы в США',
                [EMovieBox.RUS]: 'Сборы в России',
                [EMovieBox.WORLD]: 'Сборы в мире',
            },
        },
        Awards: {
            Dictionary: {
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
        },
        Distributions: {
            Dictionary: {
                [EMovieDistributions.COUNTRY_SPECIFIC]: 'Премьера в России',
                [EMovieDistributions.WORLD_PREMIER]: 'Мировая премьера',
                [EMovieDistributions.PREMIERE]: 'Премьеры в странах',
                [EMovieDistributions.ALL]: 'На DVD',
            },
        },
        Facts: {
            Dictionary: {
                [EMovieFacts.BLOOPER]: 'Ляпы',
                [EMovieFacts.FACT]: 'Факты',
            },
        },
        Images: {
            Dictionary: {
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
        },
        MpaaRatng: {
            [EMpaaRating.g]: 'Нет возрастных ограничений',
            [EMpaaRating.pg]: 'Рекомендуется присутствие родителей',
            [EMpaaRating.pg13]: 'Детям до 13 лет просмотр не желателен',
            [EMpaaRating.r]: 'Лицам до 17 лет обязательно присутствие взрослого',
            [EMpaaRating.nc17]: 'Лицам до 18 лет просмотр запрещен',
        },
    },
    Person: {
        title: 'О персоне',
        profession: 'Карьера',
        growth: 'Рост',
        birthday: 'Дата рождения',
        birthPlace: 'Место рождения',
        death: 'Дата смерти',
        deathPlace: 'Место смерти',
        Spouses: {
            female: 'Супруга',
            male: 'Супруг',
            plural: 'Супруги',
            childs: {
                single: 'ребёнок',
                plural: 'детей',
            },
        },
        filmsCount: 'Всего фильмов',
        bestFilms: 'Лучшие фильмы',
    },
    Persons: {
        searchPlaceholder: 'Актеры, режиссёры,и т.д.',
    },
    Filters: {
        genres: [
            {
                value: '1',
                label: 'триллер',
            },
            {
                value: '2',
                label: 'драма',
            },
            {
                value: '3',
                label: 'криминал',
            },
            {
                value: '4',
                label: 'мелодрама',
            },
            {
                value: '5',
                label: 'детектив',
            },
            {
                value: '6',
                label: 'фантастика',
            },
            {
                value: '7',
                label: 'приключения',
            },
            {
                value: '8',
                label: 'биография',
            },
            {
                value: '9',
                label: 'фильм-нуар',
            },
            {
                value: '10',
                label: 'вестерн',
            },
            {
                value: '11',
                label: 'боевик',
            },
            {
                value: '12',
                label: 'фэнтези',
            },
            {
                value: '13',
                label: 'комедия',
            },
            {
                value: '14',
                label: 'военный',
            },
            {
                value: '15',
                label: 'история',
            },
            {
                value: '16',
                label: 'музыка',
            },
            {
                value: '17',
                label: 'ужасы',
            },
            {
                value: '18',
                label: 'мультфильм',
            },
            {
                value: '19',
                label: 'семейный',
            },
            {
                value: '20',
                label: 'мюзикл',
            },
            {
                value: '21',
                label: 'спорт',
            },
            {
                value: '22',
                label: 'документальный',
            },
            {
                value: '23',
                label: 'короткометражка',
            },
            {
                value: '24',
                label: 'аниме',
            },
            {
                value: '25',
                label: 'без жанра',
            },
            {
                value: '26',
                label: 'новости',
            },
            {
                value: '27',
                label: 'концерт',
            },
            {
                value: '28',
                label: 'для взрослых',
            },
            {
                value: '29',
                label: 'церемония',
            },
            {
                value: '30',
                label: 'реальное ТВ',
            },
            {
                value: '31',
                label: 'игра',
            },
            {
                value: '32',
                label: 'ток-шоу',
            },
            {
                value: '33',
                label: 'детский',
            },
        ],
        countries: [
            {
                value: '1',
                label: 'США',
            },
            {
                value: '2',
                label: 'Швейцария',
            },
            {
                value: '3',
                label: 'Франция',
            },
            {
                value: '4',
                label: 'Польша',
            },
            {
                value: '5',
                label: 'Великобритания',
            },
            {
                value: '6',
                label: 'Швеция',
            },
            {
                value: '7',
                label: 'Индия',
            },
            {
                value: '8',
                label: 'Испания',
            },
            {
                value: '9',
                label: 'Германия',
            },
            {
                value: '10',
                label: 'Италия',
            },
            {
                value: '11',
                label: 'Гонконг',
            },
            {
                value: '12',
                label: 'Германия (ФРГ)',
            },
            {
                value: '13',
                label: 'Австралия',
            },
            {
                value: '14',
                label: 'Канада',
            },
            {
                value: '15',
                label: 'Мексика',
            },
            {
                value: '16',
                label: 'Япония',
            },
            {
                value: '17',
                label: 'Дания',
            },
            {
                value: '18',
                label: 'Чехия',
            },
            {
                value: '19',
                label: 'Ирландия',
            },
            {
                value: '20',
                label: 'Люксембург',
            },
            {
                value: '21',
                label: 'Китай',
            },
            {
                value: '22',
                label: 'Норвегия',
            },
            {
                value: '23',
                label: 'Нидерланды',
            },
            {
                value: '24',
                label: 'Аргентина',
            },
            {
                value: '25',
                label: 'Финляндия',
            },
            {
                value: '26',
                label: 'Босния и Герцеговина',
            },
            {
                value: '27',
                label: 'Австрия',
            },
            {
                value: '28',
                label: 'Тайвань',
            },
            {
                value: '29',
                label: 'Новая Зеландия',
            },
            {
                value: '30',
                label: 'Бразилия',
            },
            {
                value: '31',
                label: 'Чехословакия',
            },
            {
                value: '32',
                label: 'Мальта',
            },
            {
                value: '33',
                label: 'СССР',
            },
            {
                value: '34',
                label: 'Россия',
            },
            {
                value: '35',
                label: 'Югославия',
            },
            {
                value: '36',
                label: 'Португалия',
            },
            {
                value: '37',
                label: 'Румыния',
            },
            {
                value: '38',
                label: 'Хорватия',
            },
            {
                value: '39',
                label: 'ЮАР',
            },
            {
                value: '40',
                label: 'Куба',
            },
            {
                value: '41',
                label: 'Колумбия',
            },
            {
                value: '42',
                label: 'Израиль',
            },
            {
                value: '43',
                label: 'Намибия',
            },
            {
                value: '44',
                label: 'Турция',
            },
            {
                value: '45',
                label: 'Бельгия',
            },
            {
                value: '46',
                label: 'Сальвадор',
            },
            {
                value: '47',
                label: 'Исландия',
            },
            {
                value: '48',
                label: 'Венгрия',
            },
            {
                value: '49',
                label: 'Корея Южная',
            },
            {
                value: '50',
                label: 'Лихтенштейн',
            },
            {
                value: '51',
                label: 'Болгария',
            },
            {
                value: '52',
                label: 'Филиппины',
            },
            {
                value: '53',
                label: 'Доминикана',
            },
            {
                value: '54',
                label: '',
            },
            {
                value: '55',
                label: 'Марокко',
            },
            {
                value: '56',
                label: 'Таиланд',
            },
            {
                value: '57',
                label: 'Кения',
            },
            {
                value: '58',
                label: 'Пакистан',
            },
            {
                value: '59',
                label: 'Иран',
            },
            {
                value: '60',
                label: 'Панама',
            },
            {
                value: '61',
                label: 'Аруба',
            },
            {
                value: '62',
                label: 'Ямайка',
            },
            {
                value: '63',
                label: 'Греция',
            },
            {
                value: '64',
                label: 'Тунис',
            },
            {
                value: '65',
                label: 'Кыргызстан',
            },
            {
                value: '66',
                label: 'Пуэрто Рико',
            },
            {
                value: '67',
                label: 'Казахстан',
            },
            {
                value: '68',
                label: 'Югославия (ФР)',
            },
            {
                value: '69',
                label: 'Алжир',
            },
            {
                value: '70',
                label: 'Германия (ГДР)',
            },
            {
                value: '71',
                label: 'Сингапур',
            },
            {
                value: '72',
                label: 'Словакия',
            },
            {
                value: '73',
                label: 'Афганистан',
            },
            {
                value: '74',
                label: 'Индонезия',
            },
            {
                value: '75',
                label: 'Перу',
            },
            {
                value: '76',
                label: 'Бермуды',
            },
            {
                value: '77',
                label: 'Монако',
            },
            {
                value: '78',
                label: 'Зимбабве',
            },
            {
                value: '79',
                label: 'Вьетнам',
            },
            {
                value: '80',
                label: 'Антильские Острова',
            },
            {
                value: '81',
                label: 'Саудовская Аравия',
            },
            {
                value: '82',
                label: 'Танзания',
            },
            {
                value: '83',
                label: 'Ливия',
            },
            {
                value: '84',
                label: 'Ливан',
            },
            {
                value: '85',
                label: 'Кувейт',
            },
            {
                value: '86',
                label: 'Египет',
            },
            {
                value: '87',
                label: 'Литва',
            },
            {
                value: '88',
                label: 'Венесуэла',
            },
            {
                value: '89',
                label: 'Словения',
            },
            {
                value: '90',
                label: 'Чили',
            },
            {
                value: '91',
                label: 'Багамы',
            },
            {
                value: '92',
                label: 'Эквадор',
            },
            {
                value: '93',
                label: 'Коста-Рика',
            },
            {
                value: '94',
                label: 'Кипр',
            },
            {
                value: '95',
                label: 'Уругвай',
            },
            {
                value: '96',
                label: 'Ирак',
            },
            {
                value: '97',
                label: 'Мартиника',
            },
            {
                value: '98',
                label: 'Эстония',
            },
            {
                value: '99',
                label: 'ОАЭ',
            },
            {
                value: '100',
                label: 'Бангладеш',
            },
            {
                value: '101',
                label: 'Македония',
            },
            {
                value: '102',
                label: 'Гвинея',
            },
            {
                value: '103',
                label: 'Иордания',
            },
            {
                value: '104',
                label: 'Латвия',
            },
            {
                value: '105',
                label: 'Армения',
            },
            {
                value: '106',
                label: 'Украина',
            },
            {
                value: '107',
                label: 'Сирия',
            },
            {
                value: '108',
                label: 'Шри-Ланка',
            },
            {
                value: '109',
                label: 'Нигерия',
            },
            {
                value: '110',
                label: 'Берег Слоновой кости',
            },
            {
                value: '111',
                label: 'Грузия',
            },
            {
                value: '112',
                label: 'Сенегал',
            },
            {
                value: '113',
                label: 'Монголия',
            },
            {
                value: '114',
                label: 'Габон',
            },
            {
                value: '115',
                label: 'Замбия',
            },
            {
                value: '116',
                label: 'Албания',
            },
            {
                value: '117',
                label: 'Камерун',
            },
            {
                value: '118',
                label: 'Буркина-Фасо',
            },
            {
                value: '119',
                label: 'Узбекистан',
            },
            {
                value: '120',
                label: 'Малайзия',
            },
            {
                value: '121',
                label: 'Сербия',
            },
            {
                value: '122',
                label: 'Гана',
            },
            {
                value: '123',
                label: 'Таджикистан',
            },
            {
                value: '124',
                label: 'Гаити',
            },
            {
                value: '125',
                label: 'Конго (ДРК)',
            },
            {
                value: '126',
                label: 'Гватемала',
            },
            {
                value: '127',
                label: 'Российская империя',
            },
            {
                value: '128',
                label: 'Беларусь',
            },
            {
                value: '129',
                label: 'Молдова',
            },
            {
                value: '130',
                label: 'Азербайджан',
            },
            {
                value: '131',
                label: 'Палестина',
            },
            {
                value: '132',
                label: 'Оккупированная Палестинская территория',
            },
            {
                value: '133',
                label: 'Корея Северная',
            },
            {
                value: '134',
                label: 'Никарагуа',
            },
            {
                value: '135',
                label: 'Камбоджа',
            },
            {
                value: '136',
                label: 'Ангола',
            },
            {
                value: '137',
                label: 'Сербия и Черногория',
            },
            {
                value: '138',
                label: 'Непал',
            },
            {
                value: '139',
                label: 'Бенин',
            },
            {
                value: '140',
                label: 'Гваделупа',
            },
            {
                value: '141',
                label: 'Гренландия',
            },
            {
                value: '142',
                label: 'Гвинея-Бисау',
            },
            {
                value: '143',
                label: 'Макао',
            },
            {
                value: '144',
                label: 'Парагвай',
            },
            {
                value: '145',
                label: 'Мавритания',
            },
            {
                value: '146',
                label: 'Руанда',
            },
            {
                value: '147',
                label: 'Фарерские острова',
            },
            {
                value: '148',
                label: 'Кот-д’Ивуар',
            },
            {
                value: '149',
                label: 'Гибралтар',
            },
            {
                value: '150',
                label: 'Ботсвана',
            },
            {
                value: '151',
                label: 'Боливия',
            },
            {
                value: '152',
                label: 'Мадагаскар',
            },
            {
                value: '153',
                label: 'Кабо-Верде',
            },
            {
                value: '154',
                label: 'Чад',
            },
            {
                value: '155',
                label: 'Мали',
            },
            {
                value: '156',
                label: 'Фиджи',
            },
            {
                value: '157',
                label: 'Бутан',
            },
            {
                value: '158',
                label: 'Барбадос',
            },
            {
                value: '159',
                label: 'Тринидад и Тобаго',
            },
            {
                value: '160',
                label: 'Мозамбик',
            },
            {
                value: '161',
                label: 'Заир',
            },
            {
                value: '162',
                label: 'Андорра',
            },
            {
                value: '163',
                label: 'Туркменистан',
            },
            {
                value: '164',
                label: 'Гайана',
            },
            {
                value: '165',
                label: 'Корея',
            },
            {
                value: '166',
                label: 'Нигер',
            },
            {
                value: '167',
                label: 'Конго',
            },
            {
                value: '168',
                label: 'Того',
            },
            {
                value: '169',
                label: 'Ватикан',
            },
            {
                value: '170',
                label: 'Черногория',
            },
            {
                value: '171',
                label: 'Бурунди',
            },
            {
                value: '172',
                label: 'Папуа - Новая Гвинея',
            },
            {
                value: '173',
                label: 'Бахрейн',
            },
            {
                value: '174',
                label: 'Гондурас',
            },
            {
                value: '175',
                label: 'Судан',
            },
            {
                value: '176',
                label: 'Эфиопия',
            },
            {
                value: '177',
                label: 'Йемен',
            },
            {
                value: '178',
                label: 'Вьетнам Северный',
            },
            {
                value: '179',
                label: 'Суринам',
            },
            {
                value: '180',
                label: 'Маврикий',
            },
            {
                value: '181',
                label: 'Белиз',
            },
            {
                value: '182',
                label: 'Либерия',
            },
            {
                value: '183',
                label: 'Лесото',
            },
            {
                value: '184',
                label: 'Уганда',
            },
            {
                value: '185',
                label: 'Каймановы острова',
            },
            {
                value: '186',
                label: 'Антигуа и Барбуда',
            },
            {
                value: '187',
                label: 'Западная Сахара',
            },
            {
                value: '188',
                label: 'Сан-Марино',
            },
            {
                value: '189',
                label: 'Гуам',
            },
            {
                value: '190',
                label: 'Косово',
            },
            {
                value: '191',
                label: 'Лаос',
            },
            {
                value: '192',
                label: 'Катар',
            },
            {
                value: '193',
                label: 'Оман',
            },
            {
                value: '194',
                label: 'Американские Виргинские острова',
            },
            {
                value: '195',
                label: 'Сиам',
            },
            {
                value: '196',
                label: 'Сьерра-Леоне',
            },
            {
                value: '197',
                label: 'Эритрея',
            },
            {
                value: '198',
                label: 'Сомали',
            },
            {
                value: '199',
                label: 'Доминика',
            },
            {
                value: '200',
                label: 'Бирма',
            },
            {
                value: '201',
                label: 'Реюньон',
            },
            {
                value: '202',
                label: 'Федеративные Штаты Микронезии',
            },
            {
                value: '203',
                label: 'Самоа',
            },
            {
                value: '204',
                label: 'Американское Самоа',
            },
            {
                value: '205',
                label: 'Свазиленд',
            },
            {
                value: '206',
                label: 'Французская Полинезия',
            },
            {
                value: '207',
                label: 'Мьянма',
            },
            {
                value: '208',
                label: 'Новая Каледония',
            },
            {
                value: '209',
                label: 'Французская Гвиана',
            },
            {
                value: '210',
                label: 'Сент-Винсент и Гренадины',
            },
            {
                value: '211',
                label: 'Малави',
            },
            {
                value: '212',
                label: 'Экваториальная Гвинея',
            },
            {
                value: '213',
                label: 'Коморы',
            },
            {
                value: '214',
                label: 'Кирибати',
            },
            {
                value: '215',
                label: 'Тувалу',
            },
            {
                value: '216',
                label: 'Тимор-Лесте',
            },
            {
                value: '217',
                label: 'ЦАР',
            },
            {
                value: '218',
                label: 'Тонга',
            },
            {
                value: '219',
                label: 'Гренада',
            },
            {
                value: '220',
                label: 'Гамбия',
            },
            {
                value: '221',
                label: 'Антарктида',
            },
            {
                value: '222',
                label: 'Острова Кука',
            },
            {
                value: '223',
                label: 'Остров Мэн',
            },
            {
                value: '224',
                label: 'Внешние малые острова США',
            },
            {
                value: '225',
                label: 'Монтсеррат',
            },
            {
                value: '226',
                label: 'Маршалловы острова',
            },
            {
                value: '227',
                label: 'Бруней-Даруссалам',
            },
            {
                value: '228',
                label: 'Сейшельские острова',
            },
            {
                value: '229',
                label: 'Палау',
            },
            {
                value: '230',
                label: 'Сент-Люсия',
            },
            {
                value: '231',
                label: 'Вануату',
            },
            {
                value: '232',
                label: 'Мальдивы',
            },
            {
                value: '233',
                label: 'Босния',
            },
            {
                value: '234',
                label: 'Уоллис и Футуна',
            },
            {
                value: '235',
                label: 'Белоруссия',
            },
            {
                value: '236',
                label: 'Киргизия',
            },
            {
                value: '239',
                label: 'Джибути',
            },
            {
                value: '240',
                label: 'Виргинские Острова (США)',
            },
            {
                value: '241',
                label: 'Северная Македония',
            },
            {
                value: '242',
                label: 'Виргинские Острова (Великобритания)',
            },
            {
                value: '3545269',
                label: 'Сент-Люсия ',
            },
            {
                value: '3781461',
                label: 'Сент-Китс и Невис',
            },
            {
                value: '3985922',
                label: 'Соломоновы Острова',
            },
            {
                value: '4336645',
                label: 'Виргинские Острова',
            },
            {
                value: '7801402',
                label: 'Фолклендские острова',
            },
            {
                value: '10842163',
                label: 'Остров Святой Елены',
            },
            {
                value: '32518739',
                label: 'острова Теркс и Кайкос',
            },
            {
                value: '47738117',
                label: 'Мелкие отдаленные острова США',
            },
        ],
        order: [
            {
                value: 'RATING',
                label: 'по рейтингу',
            },
            {
                value: 'NUM_VOTE',
                label: 'количество голосов',
            },
            {
                value: 'YEAR',
                label: 'по году',
            },
        ],
        type: [
            {
                value: 'ALL',
                label: 'все',
            },
            {
                value: 'FILM',
                label: 'фильм',
            },
            {
                value: 'TV_SHOW',
                label: 'ТВ-Шоу',
            },
            {
                value: 'TV_SERIES',
                label: 'сериал',
            },
            {
                value: 'MINI_SERIES',
                label: 'мини-сериал',
            },
        ],
    },
    Auth: {
        signIn: 'Войти',
        signOut: 'Выйти',
        notAuth: 'Вы не авторизованы',
    },
};
