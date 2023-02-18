import {ConfigProvider, Pagination} from 'antd';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {setPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movies/page/Movies.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {pageId} = context.params
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`);
    const movies = response.data.films;
    return {
        props: {movies},
    }
}

const Movie = ({movies}: any) => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const {pageId} = useAppSelector(state => state.films)

    const onChange = (pageId: number) => {
        dispatch(setPageId(pageId));
        router.replace(`/movies/page/${pageId}`);
    }

    return (
        <>
            <Head>
                <title>Movies App</title>
            </Head>
            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            colorPrimary: 'black',
                            colorText: 'white',
                            colorBgTextHover: '#ff6200',
                            colorPrimaryHover: '#ff6200',
                        }
                    }
                }}
            >
                <main>
                    <div className={styles.movies}>
                        {movies.map((movie: any) =>
                            <div className={styles.moviesItem} key={movie.filmId}>
                                <div className={styles.moviesItemContent}>
                                    <Link href={`/movies/movie/${movie.filmId}`}>
                                        <div className={styles.moviesItemInnerContent}>
                                            <div className={styles.movieItemRating}>{movie.rating}</div>
                                            <div>{movie.year}</div>
                                            <div>{movie.countries[0].country}</div>
                                            <div>{movie.filmLength}</div>
                                        </div>
                                        <Image className={styles.movieItemImg} width={200} height={300} src={movie.posterUrl} alt='.' />
                                        <div className={styles.moviesItemName}>{movie.nameRu}</div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Pagination className={styles.pagination} current={pageId} onChange={onChange} total={250} defaultPageSize={20} showSizeChanger={false} />
                </main>
            </ConfigProvider>
        </>
    )
};

export default Movie;
