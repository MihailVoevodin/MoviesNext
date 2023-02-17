import axios from 'axios';
import Link from 'next/link';
import {useAppSelector} from 'store/hooks';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    console.log(movieId)
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const movie = response.data;
    return {
        props: {movie},
    }
}

const Movie = ({movie}: any) => {
    const {pageId} = useAppSelector(state => state.films)

    return (
        <div>
            <Link href={`/movies/page/${pageId}`}>назад</Link>
            {movie.nameRu}
        </div>
    )
};

export default Movie;
