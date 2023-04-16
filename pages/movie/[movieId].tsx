import axios from 'axios';
import {IMovieDetails, IMovieBox, IMovieStaff} from 'Common/Models';
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
import styles from 'pages/movie/Movie.module.scss';
import {MovieDetailsReview} from 'components/Movie/MovieDetailsReview/MovieDetailsReview';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

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
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseBox = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/box_office`);
    const responseStaff = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`);
    const movie = responseFilm.data;
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
                <div className="backBtn">
                    <button onClick={() => router.back()}>
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <div className={styles.movie}>
                    <div className={styles.movieContainer}>
                        <div>
                            <Image width={300} height={450} src={movie.posterUrl} alt="." />
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
                        <li className={styles.movieListDefault}>Обзор</li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/awards`}>Награды</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/distributions`}>Прокат</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/images/1?&type=STILL`}>Изображения</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/videos`}>Трейлеры</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/facts`}>Факты</Link>
                        </li>
                        <li>
                            <Link href={`/movie/${movie.kinopoiskId}/reviews/1?&order=DATE_ASC`} shallow={true}>
                                Рецензии
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
