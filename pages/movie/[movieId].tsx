import {MovieAbout} from 'components/Movie/MovieAbout/MovieAbout';
import {MovieDetailsReview} from 'components/Movie/MovieDetailsReview/MovieDetailsReview';
import {MovieMainInfo} from 'components/Movie/MovieMainInfo/MovieMainInfo';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from 'pages/movie/Movie.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC, useEffect} from 'react';
import Slider from 'react-slick';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import mainStyles from 'styles/main.module.scss';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {IMovieDetails, IMovieBox, IMovieStaff, IMovieSimilars} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movie Детальная модель фильма.
 * @param movieBox Массив бюджета фильма.
 * @param movieStaff Массив создателей фильма.
 */
interface IProps {
    movie: IMovieDetails;
    movieBox: IMovieBox[];
    movieStaff: IMovieStaff[];
    movieSimilars: IMovieSimilars[];
}

/**
 * @param movieId Идентификатор фильма.
 */
interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const responseBox = await Services.getMovieBox(movieId);
    const responseStaff = await Services.getMovieStaff(movieId);
    const responseSimilars = await Services.getMovieSimilars(movieId);
    const movie = movieResponse.data;
    const movieBox = responseBox.data.items;
    const movieStaff = responseStaff.data;
    const movieSimilars = responseSimilars.data.items;

    return {
        props: {movie, movieBox, movieStaff, movieSimilars},
    };
};

/**
 * Страница отображения информации о фильме.
 */
const Movie: FC<IProps> = ({movie, movieBox, movieStaff, movieSimilars}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {pageId} = useAppSelector((state) => state.films);

    useEffect(() => {
        dispatch(setImagesPageId(1));
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <>
            <Head>
                <title>{movie.nameRu}</title>
            </Head>
            <main>
                <div className={styles.background}>
                    <div className={styles.movieMain}>
                        <div className={styles.movieCoverImg}>
                            {movie.coverUrl && <Image width={700} height={500} src={movie.coverUrl} alt={movie.nameRu} />}
                            <div className={styles.gradient}></div>
                        </div>
                    </div>
                </div>
                <div className={mainStyles.backBtn}>
                    <button onClick={() => router.replace(`/movies/page/${pageId}`)}>
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <div className={styles.movie}>
                    <div className={styles.movieContainer}>
                        <div>
                            <Image width={300} height={450} src={movie.posterUrl} alt={movie.nameRu} />
                        </div>
                        <div>
                            <MovieMainInfo movie={movie} />
                            <MovieAbout movie={movie} movieStaff={movieStaff} movieBox={movieBox} />
                        </div>
                    </div>
                    {movieSimilars.length > 0 && <div className={styles.similarsContainer}>
                        <h3 className={styles.similarsTitle}>Похожие фильмы</h3>
                        <Slider {...settings}>
                            {movieSimilars.map((movie) => (
                              <Link className={styles.similarsLink} href={`/movie/${movie.filmId}`}>
                                <div key={movie.filmId} style={{width: 200}}>
                                    {movie.posterUrl && <Image src={movie.posterUrl} width={200} height={280} alt={movie.nameRu} />}
                                    <div className={styles.similarsText}>{movie.nameRu}</div>
                                </div>
                              </Link>
                            ))}
                        </Slider>
                    </div>}
                </div>
            </main>
            <div className={styles.movieDetails}>
                <div className={styles.movieDetailsContainer}>
                    <ul className={styles.movieTabsList}>
                        <li className={styles.movieListDefault}>{T.Pages.MovieDefault}</li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Awards.route}`}>{T.Pages.Awards.label}</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Distributions.route}`}>{T.Pages.Distributions.label}</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Images.route}/1?&type=STILL`}>{T.Pages.Images.label}</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Videos.route}`}>{T.Pages.Videos.label}</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Facts.route}`}>{T.Pages.Facts.label}</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Reviews.route}/1?&order=DATE_ASC`} shallow={true}>
                                {T.Pages.Reviews.label}
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <MovieDetailsReview movie={movie} />
                </div>
            </div>
        </>
    );
};

export default Movie;
