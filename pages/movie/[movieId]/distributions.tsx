import {DISTRIBUTIONS_DICTIONARY} from 'Common/Consts';
import {IMovieDistribution} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';
import {MovieDistribution} from 'components/Movie/MovieDistributions/MovieDistribution';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';
import mainStyles from 'styles/main.module.scss';

type Props = {
    movieName: string;
    movieDistributions: IMovieDistribution[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const distributionsResponse = await Services.getMovieDistributions(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieDistributions = distributionsResponse.data.items;
    return {
        props: {movieDistributions, movieName},
    };
};

const Distributions: React.FC<Props> = ({movieDistributions, movieName}) => {
    const router = useRouter();

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
                                movieDistributions={movieDistributions}
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
