import {STAFF_DICTIONARY} from 'Common/Consts';
import {IMovieStaff} from 'Common/Models';
import {Services} from 'Common/Services';
import {MovieStaff} from 'components/Movie/MovieStaff/MovieStaff';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';
import {T} from 'Common/Text';
import mainStyles from 'styles/main.module.scss';

type Props = {
    movieName: string;
    movieStaff: IMovieStaff[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const staffResponse = await Services.getMovieStaff(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieStaff = staffResponse.data;
    return {
        props: {movieStaff, movieName},
    };
};

const Cast: React.FC<Props> = ({movieStaff, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Staff.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Staff.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    <div>
                        {STAFF_DICTIONARY.map((profession) => (
                            <MovieStaff key={profession.type} movieStaff={movieStaff} type={profession.type} text={profession.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cast;
