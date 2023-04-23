import {IMovieDetails, IMovieBox, IMovieStaff} from 'Common/Models';
import {Services} from 'Common/Services';
import {MovieAbout} from 'components/Movie/MovieAbout/MovieAbout';
import {MovieMainInfo} from 'components/Movie/MovieMainInfo/MovieMainInfo';
import {GetServerSideProps} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React, {useEffect} from 'react';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch} from 'store/hooks';
import {T} from 'Common/Text';
import styles from 'pages/movie/Movie.module.scss';
import mainStyles from 'styles/main.module.scss';
import {MovieDetailsReview} from 'components/Movie/MovieDetailsReview/MovieDetailsReview';

type Props = {
    movie: IMovieDetails;
    movieBox: IMovieBox;
    movieStaff: IMovieStaff[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const responseBox = await Services.getMovieBox(movieId);
    const responseStaff = await Services.getMovieStaff(movieId);
    const movie = movieResponse.data;
    const movieBox = responseBox.data;
    const movieStaff = responseStaff.data;

    return {
        props: {movie, movieBox, movieStaff},
    };
};

const Movie: React.FC<Props> = ({movie, movieBox, movieStaff}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(setImagesPageId(1));
    });

    return (
        <>
            <Head>
                <title>{movie.nameRu}</title>
            </Head>
            <main>
                <div className={styles.background}>
                    <div className={styles.movieMain}>
                        <div className={styles.movieCoverImg}>
                            <Image width={700} height={500} src={movie.coverUrl} alt="." />
                            <div className={styles.gradient}></div>
                        </div>
                    </div>
                </div>
                <div className={mainStyles.backBtn}>
                    <button onClick={() => router.back()}>
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
                </div>
            </main>
            <div className={styles.movieDetails}>
                <div className={styles.movieDetailsContainer}>
                    <ul className={styles.movieTabsList}>
                        <li className={styles.movieListDefault}>{T.Pages.default}</li>
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
