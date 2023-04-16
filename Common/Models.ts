export interface IMovie {
    filmId: number;
    filmLength: string;
    nameRu: string;
    nameEn: string;
    posterUrl: string;
    rating: string;
    ratingVoteCount?: number;
    year: string;
    countries: ICountries[];
    genres: IGenres[];
    ratingChange: null;
}

interface ICountries {
    country: string;
}

interface IGenres {
    genre: string;
}

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
    type: string;
    startYear: number;
    endYear: number;
    slogan: string;
    shortDescription: string;
    serial: boolean;
    reviewsCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    ratingMpaa: string;
    ratingKinopoiskVoteCount: number;
    ratingKinopoisk: number;
    ratingImdbVoteCount: number;
    ratingImdb: number;
    ratingGoodReviewVoteCount: number;
    ratingGoodReview: number;
    ratingFilmCriticsVoteCount: number;
    ratingFilmCritics: number;
}

export interface IMovieBox {
    total: number;
    items: IMovieBoxItem[];
}

export interface IMovieBoxItem {
    type: string;
    symbol: string;
    name: string;
    currencyCode: string;
    amount: number;
}

export interface IMovieStaff {
    staffId: number;
    description: null | string;
    nameEn: string;
    nameRu: string;
    posterUrl: string;
    professionKey: string;
    professionText: string;
}

export interface IMovieFacts {
    total: number;
    items: IMovieFact[];
}

export interface IMovieFact {
    text: string;
    type: string;
    spoiler: boolean;
}

export interface IMovieAwards {
    total: number;
    items: IMovieAward[];
}

export interface IMovieAward {
    name: string;
    win: boolean;
    imageUrl: null | string;
    nominationName: string;
    year: number;
    persons: IPerson[];
}

export interface IMovieDistributions {
    total: number;
    items: IMovieDistribution[];
}

export interface IMovieDistribution {
    type: string;
    date: string;
    country: {
        country: null | string;
    };
    companies: ICompanies[];
}

interface ICompanies {
    name: string;
}

export interface IMovieVideo {
    url: string;
    name: string;
    site: string;
}

export interface IMovieImages {
    total: number;
    totalPages: number;
    items: IMovieImage[];
}

export interface IMovieImage {
    imageUrl: string;
    previewUrl: string;
}

export interface IMovieReviews {
    total: number;
    totalPages: number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    items: IMovieReview[];
}

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

export interface IPersonFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating: string;
    general: boolean;
    description: string;
    professionKey: string;
}

interface ISpouse {
    personId: number;
    children: number;
    divorced: boolean;
    divorcedReason: string;
    name: string;
    relation: string;
    sex: string;
    webUrl: string;
}
