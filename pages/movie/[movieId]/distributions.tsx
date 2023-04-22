import axios from 'axios';
import {DISTRIBUTIONS_DICTIONARY} from 'Common/Consts';
import {IMovieDistributions} from 'Common/Models';
import {MovieDistribution} from 'components/Movie/MovieDistributions/MovieDistribution';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {T} from 'Common/Text';
import React from 'react';
import mainStyles from 'styles/main.module.scss';

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
                <title>
                    {T.Pages.Distributions.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Distributions.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.Pages.backToMovie}
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
