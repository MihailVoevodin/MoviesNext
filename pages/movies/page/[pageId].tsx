import {Pagination} from 'antd';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {setPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movies/page/Movies.module.css';

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
    console.log(movies)

    const onChange = (pageId: number) => {
        dispatch(setPageId(pageId));
        router.replace(`/movies/page/${pageId}`);
    }

    return (
        <>
            <Head>
                <title>Movies App</title>
            </Head>
            <div className={styles.movies}>
                {movies.map((movie: any) =>
                    <div className={styles.moviesItem} key={movie.filmId}>
                        <Link href={`/movies/movie/${movie.filmId}`}>
                            <Image width={200} height={300} src={movie.posterUrl} alt='.' />
                            <span className={styles.moviesItemName}>{movie.nameRu}</span>
                        </Link>

                    </div>
                )}
            </div>
            <Pagination current={pageId} onChange={onChange} total={250} defaultPageSize={20} showSizeChanger={false} />
        </>
    )
};

export default Movie;
