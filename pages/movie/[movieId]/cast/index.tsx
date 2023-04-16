import axios from 'axios';
import {STAFF_DICTIONARY} from 'Common/Consts';
import {MovieCast} from 'components/Movie/MovieCast/MovieCast';
import Head from 'next/head';
import {useRouter} from 'next/router';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseStaff = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`);
    const movieName = responseFilm.data.nameRu;
    const movieStaff = responseStaff.data;
    return {
        props: {movieStaff, movieName},
    };
}

const Cast = ({movieStaff, movieName}: any) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Создатели: {movieName}</title>
            </Head>
            <div className="movieDetailsPage">
                <div className="movieDetailsContainer">
                    <div className="movieDetailsTitle">
                        <span>Создатели</span> / {movieName}
                    </div>
                    <div className="backToMovieContainer">
                        <hr />
                        <span className="backToMovie" onClick={() => router.back()}>
                            Информация о фильме
                        </span>
                        <hr />
                    </div>
                    <div>
                        {STAFF_DICTIONARY.map((profession) => (
                            <MovieCast key={profession.type} array={movieStaff} type={profession.type} text={profession.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cast;
