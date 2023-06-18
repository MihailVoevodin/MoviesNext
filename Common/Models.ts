/**
 * Упрощенная модель фильма
 *
 * @param filmId - Идентификатор фильма.
 * @param filmLength - Длительность фильма.
 * @param nameRu - Название фильма на русском.
 * @param nameEn - Название фильма на английском.
 * @param posterUrl - Ссылка на изображение постера фильма.
 * @param rating - Рейтинг фильма.
 * @param ratingVoteCount - Количество оценок фильма.
 * @param year - Год выхода фильма.
 * @param countries - Страны участвующие в производстве фильма.
 * @param genres - Жанры фильма.
 */
export interface IMovie {
    filmId: number;
    kinopoiskId: number;
    filmLength: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    rating: string;
    ratingKinopoisk: number;
    ratingVoteCount?: number;
    year: string;
    countries: ICountries[];
    genres: IGenres[];
}

/**
 * @param pagesCount Количество страниц.
 * @param films Массив фильмов топа.
 */
export interface IMovies {
    pagesCount: number;
    films: IMovie[];
}

/**
 * Детальная модель фильма
 *
 * @param kinopoiskId - Идентификатор фильма.
 * @param countries - Страны участвующие в производстве фильма.
 * @param coverUrl - Ссылка на изображение заднего фона фильма.
 * @param description - Полное описание сюжета фильма.
 * @param filmLength - Длительность фильма.
 * @param genres - Жанры фильма.
 * @param nameRu - Название фильма на русском.
 * @param nameOriginal - Оригинальное название фильма на английском.
 * @param posterUrl - Ссылка на изображение постера фильма.
 * @param ratingAgeLimits - Возрастная категория фильма.
 * @param year - Год выхода фильма.
 * @param webUrl - Ссылка на оригинальную страницу фильма на Кинопоиске.
 * @param serial - Является фильмом или сериалом.
 * @param startYear - Год начала выпуска(для сериалов).
 * @param endYear - Год конца выпуска(для сериалов).
 * @param slogan - Слоган фильма.
 * @param shortDescription - Краткое описание сюжета фильма.
 * @param ratingRfCritics - Рейтинг кинокритиков из России.
 * @param ratingRfCriticsVoteCount - Количество оценок кинокритиков из России.
 * @param ratingMpaa - Рейтинг оценки содержания фильма.
 * @param ratingKinopoisk - Рейтинг фильма на Кинопоиске.
 * @param ratingKinopoiskVoteCount - Количество оценок фильма на Кинопоиске.
 * @param ratingImdb - Рейтинг фильма на Imdb.
 * @param ratingImdbVoteCount - Количество оценок фильма на Imdb.
 * @param ratingGoodReview - Процент хороших оценок фильма.
 * @param ratingFilmCritics - Рейтинг фильма по мнению критиков.
 * @param ratingFilmCriticsVoteCount - Количество оценок кинокритиков.
 */
export interface IMovieDetails {
    kinopoiskId: number;
    countries: ICountries[];
    coverUrl: string;
    description: string;
    filmLength: number;
    genres: IGenres[];
    nameRu: string;
    nameOriginal: string;
    posterUrl: string;
    ratingAgeLimits: string;
    year: number;
    webUrl: string;
    serial: boolean;
    startYear: number;
    endYear: number;
    slogan: string;
    shortDescription: string;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    ratingMpaa: string;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    ratingGoodReview: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
}

/**
 * Модель стран участвующих в создании фильма
 *
 * @param country - Страна участвующая в создании фильма.
 */
interface ICountries {
    country: string;
}

/**
 * Модель жанров фильма
 *
 * @param genre - Жанр фильма.
 */
interface IGenres {
    genre: string;
}

/**
 * Модель бюджета фильма
 *
 * @param type - Тип бюджета фильма.
 * @param symbol - Символ валюты бюджета.
 * @param amount - Сумма бюджета.
 */
export interface IMovieBox {
    type: string;
    symbol: string;
    amount: number;
}

/**
 * Модель личности создателя фильма
 *
 * @param staffId - Идентификатор личности.
 * @param description - Описание.
 * @param nameEn - Имя на английском.
 * @param nameRu - Имя на русском.
 * @param posterUrl - Ссылка на фотографию личности.
 * @param professionKey - Ключ профессии личности.
 */
export interface IMovieStaff {
    staffId: number;
    description: null | string;
    nameEn: string;
    nameRu: string;
    posterUrl: string;
    professionKey: string;
}

/**
 * Модель факта о фильме
 *
 * @param text - Описание факта.
 * @param type - Тип факта.
 * @param spoiler - Является ли факт спойлером.
 */
export interface IMovieFact {
    text: string;
    type: string;
    spoiler: boolean;
}

/**
 * Модель наград фильма
 *
 * @param name - Названии награды.
 * @param win - Победил фильм или нет в номинации.
 * @param imageUrl - Ссылка на изображение награды.
 * @param nominationName - Название номинации.
 * @param year - Год номинации.
 * @param persons - Люди которые получили награду.
 */
export interface IMovieAward {
    name: string;
    win: boolean;
    imageUrl: null | string;
    nominationName: string;
    year: number;
    persons: IPerson[];
}

/**
 * Модель премьеры фильма
 *
 * @param type - Какого рода была премьера фильма.
 * @param date - Дата премьеры.
 * @param country - Страна премьеры.
 * @param companies - Компании выпустившие фильм.
 */
export interface IMovieDistribution {
    type: string;
    date: string;
    country: {
        country: null | string;
    };
    companies: ICompanies[];
}

/**
 * Модель компании выпустившей фильм
 *
 * @param name - Название компании.
 */
interface ICompanies {
    name: string;
}

/**
 * Модель видео о фильме
 *
 * @param url - Ссылка на видео.
 * @param name - Название видео.
 * @param site - Ресурс хранения видео.
 */
export interface IMovieVideo {
    url: string;
    name: string;
    site: string;
}

/**
 * Модель картинок о фильме
 *
 * @param total - Количество картинок.
 * @param totalPages - Количество страниц картинок.
 * @param items - Массив картинок.
 */
export interface IMovieImages {
    total: number;
    totalPages: number;
    items: IMovieImage[];
}

/**
 * Модель картинки
 *
 * @param imageUrl - Ссылка на оригинальное изображение.
 * @param previewUrl - Ссылка на уменьшенное изображение.
 */
export interface IMovieImage {
    imageUrl: string;
    previewUrl: string;
}

/**
 * Модель рецензий на фильм
 *
 * @param total - Количество рецензий.
 * @param totalPages - Количество страниц рецензий.
 * @param totalPositiveReviews - Количество позитивных рецензий.
 * @param totalNegativeReviews - Количество негативных рецензий.
 * @param totalNeutralReviews - Количество нейтральных рецензий.
 * @param items - Массив рецензий.
 */
export interface IMovieReviews {
    total: number;
    totalPages: number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    items: IMovieReview[];
}

/**
 * Модель рецензии
 *
 * @param kinopoiskId - Идентификатор рецензии.
 * @param type - Тип рецензии.
 * @param date - Дата рецензии.
 * @param positiveRating - Количество позитивных оценок рецензии.
 * @param negativeRating - Количество негативных оценок рецензии.
 * @param author - Автор рецензии.
 * @param title - Заголовок рецензии.
 * @param description - Текст рецензии.
 */
export interface IMovieReview {
    kinopoiskId: number;
    type: string;
    date: string;
    positiveRating: number;
    negativeRating: number;
    author: string;
    title: string;
    description: string;
}

export interface IMovieSimilars {
    filmId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: string;
}

/**
 * Модель личности
 *
 * @param kinopoiskId - Идентификатор личности.
 * @param webUrl - Ссылка на оригинальную страницу личности на Кинопоиске.
 * @param nameRu - Имя личности на русском.
 * @param nameEn - Имя личности на английском.
 * @param sex - Пол личности.
 * @param posterUrl - Ссылка на фотографию личности.
 * @param growth - Рост.
 * @param birthday - Дата рождения.
 * @param death - Дата смерти.
 * @param age - Возраст.
 * @param birthplace - Место рождения.
 * @param deathplace - Место смерти.
 * @param profession - Профессия.
 * @param facts - Факты о личности.
 * @param spouses - Супруги личности.
 * @param films - Фильмы личности.
 */
export interface IPerson {
    kinopoiskId: number;
    webUrl: string;
    nameRu: string;
    nameEn: string;
    sex: string;
    posterUrl: string;
    growth: number;
    birthday: string;
    death: string;
    age: number;
    birthplace: string;
    deathplace: string;
    profession: string;
    facts: string[];
    spouses: ISpouse[];
    films: IPersonFilm[];
}

/**
 * Модель описания фильма с участием личности
 *
 * @param filmId - Идентификатор фильма.
 * @param nameRu - Название фильма на русском.
 * @param nameEn - Название фильма на английском.
 * @param rating - Рейтинг фильма.
 * @param general - Участвовал ли в главной роли человек в фильме.
 * @param professionKey - Ключ в качестве кого участвовал в фильме.
 */
export interface IPersonFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating: string;
    general: boolean;
    professionKey: string;
}

/**
 * Модель супруга(и) личности
 *
 * @param personId - Идентификатор личности.
 * @param children - Количество детей в браке.
 * @param divorced - Разведены или нет.
 * @param divorcedReason - Причина развода.
 * @param name - Имя супруга(и).
 */
interface ISpouse {
    personId: number;
    children: number;
    divorced: boolean;
    divorcedReason: string;
    name: string;
}
