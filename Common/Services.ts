import axios, {AxiosResponse} from 'axios';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export const Services = {
    /** Получение топ 250 фильмов. */
    async getMoviesTop_250(pageId: string): Promise<AxiosResponse> {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`);
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
};