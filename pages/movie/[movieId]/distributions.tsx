import axios from 'axios';
import {DISTRIBUTIONS_DICTIONARY} from 'Common/Consts';
import {IMovieDistributions} from 'Common/Models';
import {MovieDistribution} from 'components/Movie/MovieDistributions/MovieDistribution';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieDistributions: IMovieDistributions;
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseDistributions = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/distributions`);
    const movieName = responseFilm.data.nameRu;
    const movieDistributions = responseDistributions.data;
    return {
        props: {movieDistributions, movieName},
    };
};

const Distributions: React.FC<Props> = ({movieDistributions, movieName}) => {
    const router = useRouter();
    const {items} = movieDistributions;

    return (
        <>
            <Head>
                <title>Прокат: {movieName}</title>
            </Head>
            <div className="movieDetailsPage">
                <div className="movieDetailsContainer">
                    <div className="movieDetailsTitle">
                        <span>Прокат</span> / {movieName}
                    </div>
                    <div className="backToMovieContainer">
                        <hr />
                        <span className="backToMovie" onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            Информация о фильме
                        </span>
                        <hr />
                    </div>
                    <div>
                        {DISTRIBUTIONS_DICTIONARY.map((distribution) => (
                            <MovieDistribution
                                key={distribution.type}
                                movieDistributions={items}
                                type={distribution.type}
                                text={distribution.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Distributions;
