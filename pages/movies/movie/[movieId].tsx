import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import {useAppSelector} from 'store/hooks';
import styles from 'pages/movies/movie/Movie.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    console.log(movieId)
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseBox = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/box_office`);
    const movie = responseFilm.data;
    const movieBox = responseBox.data;
    return {
        props: {movie, movieBox},
    }
}

const Movie = ({movie, movieBox}: any) => {
    const {pageId} = useAppSelector(state => state.films)
    console.log(movie)
    console.log(movieBox)

    return (
        <main>
            <div className={styles.background}>
                <div className={styles.movieMain}>
                    <div className={styles.movieCoverImg}>
                        <Image width={700} height={500} src={movie.coverUrl} alt='.' />
                        <div className={styles.gradient}></div>
                    </div>
                </div>
            </div>
            <Link href={`/movies/page/${pageId}`}>назад</Link>
            <div className={styles.movie}>
                <div>
                </div>
            </div>
            {movie.nameRu}
        </main>
    )
};

export default Movie;
