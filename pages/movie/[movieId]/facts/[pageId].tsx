import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieFacts} from 'components/Movie/MovieFacts/MovieFacts';
import {T} from 'Common/Text';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseFacts = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/facts`);
    const movieName = responseFilm.data.nameRu;
    const movieFacts = responseFacts.data;
    return {
        props: {movieFacts, movieName},
    };
}

const Facts = ({movieFacts, movieName}: any) => {
    const router = useRouter();
    const {items} = movieFacts;

    return (
        <>
            <Head>
                <title>Факты: {movieName}</title>
            </Head>
            <div className="movieDetailsPage">
                <div className="movieDetailsContainer">
                    <div className="movieDetailsTitle">
                        <span>Факты</span> / {movieName}
                    </div>
                    <div className="backToMovieContainer">
                        <hr />
                        <span className="backToMovie" onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            Информация о фильме
                        </span>
                        <hr />
                    </div>
                    <div>
                        {T.factsTextArray.map((fact: any) => (
                            <MovieFacts key={fact.id} array={items} type={fact.type} text={fact.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Facts;
