/**
 * Енам с профессиями для деталей фильма.
 */
export enum EMovieMainStaff {
    DIRECTOR = 'DIRECTOR',
    WRITER = 'WRITER',
    PRODUCER = 'PRODUCER',
    OPERATOR = 'OPERATOR',
    COMPOSER = 'COMPOSER',
    DESIGN = 'DESIGN',
    EDITOR = 'EDITOR',
}

/**
 * Енам типов бюджетов.
 */
export enum EMovieBox {
    /** Бюджет */
    BUDGET = 'BUDGET',
    /** Маркетинг */
    MARKETING = 'MARKETING',
    /** Сборы в США */
    USA = 'USA',
    /** Сборы в России */
    RUS = 'RUS',
    /** Сборы в мире */
    WORLD = 'WORLD',
}

/**
 * Енам типов премий.
 */
export enum EMovieAwards {
    /** Оскар */
    OSCAR = 'OSCAR',
    /** Золотой глобус */
    GOLDEN_GLOBE = 'GOLDEN_GLOBE',
    /** Британская академия */
    BRITISH_ACADEMY = 'BRITISH_ACADEMY',
    /** Сезар */
    CESAR = 'CESAR',
    /** Премия Гильдии актеров */
    ACTORS_GUILD_AWARDS = 'ACTORS_GUILD_AWARDS',
    /** Ника */
    NIKA = 'NIKA',
    /** Золотой орел */
    GOLDEN_EAGLE = 'GOLDEN_EAGLE',
    /** Сатурн */
    SATURN = 'SATURN',
    /** Гойя */
    GOYA = 'GOYA',
    /** Эмми */
    EMMY = 'EMMY',
    /** Азиатская киноакадемия */
    ASIAN_FILM_ACADEMY = 'ASIAN_FILM_ACADEMY',
    /** Европейская киноакадемия */
    EUROPEAN_FILM_ACADEMY = 'EUROPEAN_FILM_ACADEMY',
    /** Премия канала «MTV» */
    MTV = 'MTV',
    /** Кинонаграды «MTV-Россия» */
    MTV_RUSSIA = 'MTV_RUSSIA',
    /** Золотая малина */
    GOLDEN_RASPBERRY = 'GOLDEN_RASPBERRY',
    /** Жорж */
    GEORGE_MELIES = 'GEORGE_MELIES',
    /** Каннский кинофестиваль */
    CANNES_FILM_FESTIVAL = 'CANNES_FILM_FESTIVAL',
    /** Берлинский кинофестиваль */
    BERLIN_FILM_FESTIVAL = 'BERLIN_FILM_FESTIVAL',
    /** Венецианский кинофестиваль */
    VENICE_FILM_FESTIVAL = 'VENICE_FILM_FESTIVAL',
    /** Московский международный кинофестиваль */
    MOSCOW_FILM_FESTIVAL = 'MOSCOW_FILM_FESTIVAL',
    /** Карловы Вары */
    KARLOVY_VARY_FILM_FESTIVAL = 'KARLOVY_VARY_FILM_FESTIVAL',
    /** Кинотавр */
    KINOTAVR = 'KINOTAVR',
    /** Сан-Себастьян */
    SAN_SEBASTIAN_FILM_FESTIVAL = 'SAN_SEBASTIAN_FILM_FESTIVAL',
    /** Сандэнс */
    SUNDANCE_FILM_FESTIVAL = 'SUNDANCE_FILM_FESTIVAL',
}

/**
 * Енам типов премьер.
 */
export enum EMovieDistributions {
    /** Премьера в России */
    COUNTRY_SPECIFIC = 'COUNTRY_SPECIFIC',
    /** Мировая премьера */
    WORLD_PREMIER = 'WORLD_PREMIER',
    /** Премьеры в странах */
    PREMIERE = 'PREMIERE',
    /** Премьеры на DVD */
    ALL = 'ALL',
}

/**
 * Енам типов изображений.
 */
export enum EMovieImages {
    STILL = 'STILL',
    SHOOTING = 'SHOOTING',
    POSTER = 'POSTER',
    FAN_ART = 'FAN_ART',
    PROMO = 'PROMO',
    CONCEPT = 'CONCEPT',
    WALLPAPER = 'WALLPAPER',
    COVER = 'COVER',
    SCREENSHOT = 'SCREENSHOT',
}

/**
 * Енам типов фактов.
 */
export enum EMovieFacts {
    /** Ляпы */
    BLOOPER = 'BLOOPER',
    /** Факты */
    FACT = 'FACT',
}

/**
 * Енам типов профессий для отдельной страницы.
 */
export enum EMovieStaff {
    DIRECTOR = 'DIRECTOR',
    ACTOR = 'ACTOR',
    PRODUCER = 'PRODUCER',
    WRITER = 'WRITER',
    OPERATOR = 'OPERATOR',
    COMPOSER = 'COMPOSER',
    DESIGN = 'DESIGN',
    EDITOR = 'EDITOR',
    PRODUCER_USSR = 'PRODUCER_USSR',
    TRANSLATOR = 'TRANSLATOR',
    VOICE_DIRECTOR = 'VOICE_DIRECTOR',
    UNKNOWN = 'UNKNOWN',
}

/**
 * Енам для селекта фильтров рецензий.
 */
export enum EReviewsSelect {
    /** По возрастанию даты */
    DATE_ASC = 'DATE_ASC',
    /** По убыванию даты */
    DATE_DESC = 'DATE_DESC',
    /** По возрастанию позитивных рецензий */
    USER_POSITIVE_RATING_ASC = 'USER_POSITIVE_RATING_ASC',
    /** По убыванию позитивных рецензий */
    USER_POSITIVE_RATING_DESC = 'USER_POSITIVE_RATING_DESC',
    /** По возрастанию негативных рецензий */
    USER_NEGATIVE_RATING_ASC = 'USER_NEGATIVE_RATING_ASC',
    /** По убыванию негативных рецензий */
    USER_NEGATIVE_RATING_DESC = 'USER_NEGATIVE_RATING_DESC',
}
