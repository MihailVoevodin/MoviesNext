import React from 'react';
import {ConfigProvider, Pagination} from 'antd';
import axios from 'axios';
import {IMovie} from 'Common/Models';
import {GetServerSideProps} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {paginationTheme} from 'Common/Consts';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {setPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movies/page/Movies.module.scss';
import mainStyles from 'styles/main.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movies: IMovie[];
};

interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {pageId} = context.params!;
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`);
    const movies = response.data.films;
    return {
        props: {movies},
    };
};

const Movie: React.FC<Props> = ({movies}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {pageId} = useAppSelector((state) => state.films);

    const onChange = (pageId: number) => {
        dispatch(setPageId(pageId));
        void router.replace(`/movies/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Топ 250</title>
            </Head>
            <ConfigProvider theme={paginationTheme}>
                <main>
                    <div className={styles.movies}>
                        {movies.map((movie) => (
                            <div className={styles.moviesItem} key={movie.filmId}>
                                <div className={styles.moviesItemContent}>
                                    <Link href={`/movie/${movie.filmId}`}>
                                        <div className={styles.moviesItemInnerContent}>
                                            <div className={styles.movieItemRating}>{movie.rating}</div>
                                            <div>{movie.year}</div>
                                            <div>{movie.countries[0].country}</div>
                                            <div>{movie.filmLength}</div>
                                        </div>
                                        <Image className={styles.movieItemImg} width={200} height={300} src={movie.posterUrl} alt="." />
                                        <div className={styles.moviesItemName}>{movie.nameRu}</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        className={mainStyles.pagination}
                        current={pageId}
                        onChange={onChange}
                        total={250}
                        defaultPageSize={20}
                        showSizeChanger={false}
                    />
                </main>
            </ConfigProvider>
        </>
    );
};

export default Movie;
