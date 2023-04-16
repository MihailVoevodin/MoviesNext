import axios from 'axios';
import {FACTS_DICTIONARY} from 'Common/Consts';
import {IMovieFacts} from 'Common/Models';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieFacts} from 'components/Movie/MovieFacts/MovieFacts';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieFacts: IMovieFacts;
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseFacts = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/facts`);
    const movieName = responseFilm.data.nameRu;
    const movieFacts = responseFacts.data;
    console.log(movieFacts);
    return {
        props: {movieFacts, movieName},
    };
};

const Facts: React.FC<Props> = ({movieFacts, movieName}) => {
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
                        {FACTS_DICTIONARY.map((fact) => (
                            <MovieFacts key={fact.type} movieFacts={items} type={fact.type} text={fact.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Facts;
