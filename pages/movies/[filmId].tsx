import axios from 'axios';
import Link from 'next/link';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {filmId} = context.params
    console.log(filmId)
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`);
    const film = response.data;
    return {
        props: {film},
    }
}

const Movie = ({film}: any) => {

    return (
        <div>
            <Link href={'/movies'}>назад</Link>
            {film.nameRu}
        </div>
    )
};

export default Movie;