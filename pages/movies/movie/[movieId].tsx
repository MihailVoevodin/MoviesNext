import axios from 'axios';
import {MovieAbout} from 'components/Movie/MovieAbout/MovieAbout';
import {MovieMainInfo} from 'components/Movie/MovieMainInfo/MovieMainInfo';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {useAppSelector} from 'store/hooks';
import styles from 'pages/movies/movie/Movie.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    console.log(movieId)
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseBox = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/box_office`);
    const responseStaff = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`);
    const movie = responseFilm.data;
    const movieBox = responseBox.data;
    const movieStaff = responseStaff.data;
    return {
        props: {movie, movieBox, movieStaff},
    }
}

const Movie = ({movie, movieBox, movieStaff}: any) => {
    const {pageId} = useAppSelector(state => state.films)
    console.log(movie)
    console.log(movieBox)
    console.log(movieStaff)

    return (
        <>
            <Head>
                <title>{movie.nameRu}</title>
            </Head>
            <main>
                <div className={styles.background}>
                    <div className={styles.movieMain}>
                        <div className={styles.movieCoverImg}>
                            <Image width={700} height={500} src={movie.coverUrl} alt='.' />
                            <div className={styles.gradient}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.backLink}>
                    <Link href={`/movies/page/${pageId}`}><ArrowLeftOutlined /></Link>
                </div>
                <div className={styles.movie}>
                    <div className={styles.movieContainer}>
                        <div>
                            <Image width={300} height={450} src={movie.posterUrl} alt='.' />
                        </div>
                        <div>
                            <MovieMainInfo movie={movie} />
                            <MovieAbout movie={movie} movieStaff={movieStaff} movieBox={movieBox}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default Movie;
