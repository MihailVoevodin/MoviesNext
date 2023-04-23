import {IMovieAward} from 'Common/Models';
import {Services} from 'Common/Services';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {AWARDS_DICTIONARY} from 'Common/Consts';
import {ParsedUrlQuery} from 'querystring';
import {T} from 'Common/Text';
import React from 'react';
import mainStyles from 'styles/main.module.scss';

type Props = {
    movieName: string;
    movieAwards: IMovieAward[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const awardsResponse = await Services.getMovieAwards(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieAwards = awardsResponse.data.items;
    return {
        props: {movieAwards, movieName},
    };
};

const Awards: React.FC<Props> = ({movieAwards, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Awards.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Awards.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    <div>
                        {AWARDS_DICTIONARY.map((award) => (
                            <MovieAward key={award.type} movieAwards={movieAwards} text={award.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Awards;
