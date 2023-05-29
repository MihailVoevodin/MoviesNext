import {ConfigProvider, Pagination} from 'antd';
import {Filters} from 'components/Filters/Filters';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from 'pages/movies/top100popular/page/Movies.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import mainStyles from 'styles/main.module.scss';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovie[];
}

/**
 * @param pageId Номер страницы списка фильмов.
 */
interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {pageId} = context.params!;
    const moviesResponse = await Services.getMoviesAwait(pageId);
    const movies = moviesResponse.data.films;
    return {
        props: {movies},
    };
};

/**
 * Страница отображения топа фильмов.
 */
const Movie: FC<IProps> = ({movies}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {pageId} = useAppSelector((state) => state.films);

    const onChange = (pageId: number) => {
        dispatch(setPageId(pageId));
        void router.replace(`/movies/topAwaitMovies/page/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>Фильмы: Ожидаемые</title>
            </Head>
            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            colorPrimary: 'black',
                            colorText: 'white',
                            colorBgTextHover: '#ff6200',
                            colorPrimaryHover: '#ff6200',
                            colorTextDisabled: '#363836',
                        },
                        Select: {
                            colorPrimaryHover: '#ff6200',
                        },
                    },
                }}
            >
                <main>
                    <Filters />
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
                                        <Image
                                            className={styles.movieItemImg}
                                            width={200}
                                            height={300}
                                            src={movie.posterUrl}
                                            alt={movie.nameRu}
                                        />
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
