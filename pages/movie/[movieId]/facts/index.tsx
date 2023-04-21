import axios from 'axios';
import {FACTS_DICTIONARY} from 'Common/Consts';
import {IMovieFacts} from 'Common/Models';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieFacts} from 'components/Movie/MovieFacts/MovieFacts';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';
import mainStyles from 'styles/main.module.scss';
import {T} from 'Common/Text';

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
                <title>
                    {T.Pages.Facts.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Facts.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.BackToMovie.label}
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
