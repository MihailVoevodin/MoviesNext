import axios, {AxiosResponse} from 'axios';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export const Services = {
    /** Получение топ 250 фильмов. */
    async getMoviesTop_250(pageId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`);
    },
    /** Получение топ 100 популярных фильмов. */
    async getMoviesTop_100(pageId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageId}`);
    },
    /** Получение топа ожидаемых фильмов. */
    async getMoviesAwait(pageId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${pageId}`);
    },
    /** Получение фильма. */
    async getMovie(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    },
    /** Получение фактов о фильме. */
    async getMovieFacts(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/facts`);
    },
    /** Получение изображений фильма. */
    async getMovieImages(movieId: string, type: string | string[] | undefined, pageId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=${type}&page=${pageId}`);
    },
    /** Получение рецензий фильма. */
    async getMovieReviews(movieId: string, pageId: string, order: string | string[] | undefined): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/reviews?page=${pageId}&order=${order}`);
    },
    /** Получение создателей фильма. */
    async getMovieStaff(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`);
    },
    /** Получение видео фильма. */
    async getMovieVideos(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`);
    },
    /** Получение наград фильма. */
    async getMovieAwards(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/awards`);
    },
    /** Получение проката фильма. */
    async getMovieDistributions(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/distributions`);
    },
    /** Получение бюджета фильма. */
    async getMovieBox(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/box_office`);
    },
    /** Получение персоны. */
    async getPerson(nameId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${nameId}`);
    },
    /** Получение списка личностей по поиску. */
    async getPersonsList(name: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/persons?name=${name}`);
    },
    /** Получение списка похожих фильмов. */
    async getMovieSimilars(movieId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/similars`);
    },
    /** Получение списка фильмов по фильтрам. */
    async getFilmsByFilters(
        orderId: string,
        genreId: string,
        countryId: string,
        typeId: string,
        ratingFrom: string,
        ratingTo: string,
        yearFrom: string,
        yearTo: string,
        keyword: string,
        findMoviesPageId: number
    ): Promise<AxiosResponse> {
        return await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${countryId}&genres=${genreId}&order=${orderId}&type=${typeId}&ratingFrom=${ratingFrom}&ratingTo=${ratingTo}&yearFrom=${yearFrom}&yearTo=${yearTo}&keyword=${keyword}&page=${findMoviesPageId}`
        );
    },
};
