import {HeadComponent} from 'components/Head/Head';
import {MovieAbout} from 'components/Movie/MovieAbout/MovieAbout';
import {MovieDetailsReview} from 'components/Movie/MovieDetailsReview/MovieDetailsReview';
import {MovieMainInfo} from 'components/Movie/MovieMainInfo/MovieMainInfo';
import {GetServerSideProps} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'pages/movie/Movie.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC, useEffect} from 'react';
import Slider from 'react-slick';
import {selectMovieSequelsAndPrequels} from 'store/films/filmsSelectors';
import {loadMovieSequelsAndPrequels, setImagesPageId} from 'store/films/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {EMovieImages, EReviewsSelect} from 'Common/Enums';
import {calcSlidesToShow} from 'Common/Helpers';
import {IMovieDetails, IMovieBox, IMovieStaff, IMovie} from 'Common/Models';
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
    movieSimilars: IMovie[];
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

    if (!movie || !movieBox || !movieStaff || !movieSimilars) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movie, movieBox, movieStaff, movieSimilars},
    };
};

/**
 * Страница отображения информации о фильме.
 */
const Movie: FC<IProps> = ({movie, movieBox, movieStaff, movieSimilars}) => {
    const dispatch = useAppDispatch();
    const sequelsAndPrequels = useAppSelector(selectMovieSequelsAndPrequels);

    useEffect(() => {
        dispatch(loadMovieSequelsAndPrequels(movie.kinopoiskId));
    }, [movie.kinopoiskId]);

    useEffect(() => {
        dispatch(setImagesPageId(1));
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: calcSlidesToShow(movieSimilars.length),
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <>
            <HeadComponent title={movie.nameRu} />
            <main>
                <div className={styles.background}>
                    <div className={styles.movieMain}>
                        <div className={styles.movieCoverImg}>
                            {movie.coverUrl && <Image width={700} height={500} src={movie.coverUrl} alt={movie.nameRu} priority={true} />}
                            <div className={styles.gradient}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.movie}>
                    <div className={styles.movieContainer}>
                        <div>
                            <Image width={300} height={450} src={movie.posterUrl} alt={movie.nameRu || movie.nameOriginal} />
                        </div>
                        <div>
                            <MovieMainInfo movie={movie} />
                            <MovieAbout movie={movie} movieStaff={movieStaff} movieBox={movieBox} />
                            {sequelsAndPrequels.length > 0 && (
                                <div className={styles.sequelsContainer}>
                                    <h3 className={styles.sequelsTitle}>Сиквелы и приквелы</h3>
                                    <Slider {...settings}>
                                        {sequelsAndPrequels.map((movie) => (
                                            <Link key={movie.filmId} className={styles.sequelsLink} href={T.Pages.MovieLink(movie.filmId)}>
                                                <div style={{width: 200}}>
                                                    {movie.posterUrl && (
                                                        <Image
                                                            src={movie.posterUrl}
                                                            width={200}
                                                            height={280}
                                                            alt={movie.nameRu || movie.nameOriginal}
                                                        />
                                                    )}
                                                    <div className={styles.sequelsText}>{movie.nameRu}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Slider>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <div className={styles.movieDetails}>
                <div className={styles.movieDetailsContainer}>
                    <ul className={styles.movieTabsList}>
                        <li className={styles.movieListDefault}>{T.Pages.MovieDefault}</li>
                        <li>
                            <Link href={T.Pages.Awards.link(movie.kinopoiskId)}>{T.Pages.Awards.label}</Link>
                        </li>
                        <li>
                            <Link href={T.Pages.Distributions.link(movie.kinopoiskId)}>{T.Pages.Distributions.label}</Link>
                        </li>
                        <li>
                            <Link href={T.Pages.Images.link(movie.kinopoiskId, EMovieImages.STILL, 1)}>{T.Pages.Images.label}</Link>
                        </li>
                        <li>
                            <Link href={T.Pages.Videos.link(movie.kinopoiskId)}>{T.Pages.Videos.label}</Link>
                        </li>
                        <li>
                            <Link href={T.Pages.Facts.link(movie.kinopoiskId)}>{T.Pages.Facts.label}</Link>
                        </li>
                        <li>
                            <Link href={T.Pages.Reviews.link(movie.kinopoiskId, EReviewsSelect.DATE_ASC, 1)}>{T.Pages.Reviews.label}</Link>
                        </li>
                    </ul>
                    <hr />
                    <MovieDetailsReview movie={movie} />
                    {movieSimilars.length > 0 && (
                        <div className={styles.similarsContainer}>
                            <h3 className={styles.similarsTitle}>Похожие фильмы</h3>
                            <Slider {...settings}>
                                {movieSimilars.map((movie) => (
                                    <Link key={movie.filmId} className={styles.similarsLink} href={T.Pages.MovieLink(movie.filmId)}>
                                        <div style={{width: 200}}>
                                            {movie.posterUrl && (
                                                <Image
                                                    src={movie.posterUrl}
                                                    width={200}
                                                    height={280}
                                                    alt={movie.nameRu || movie.nameOriginal}
                                                />
                                            )}
                                            <div className={styles.similarsText}>{movie.nameRu}</div>
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Movie;
