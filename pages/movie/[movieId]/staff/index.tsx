import axios from 'axios';
import {STAFF_DICTIONARY} from 'Common/Consts';
import {IMovieStaff} from 'Common/Models';
import {MovieStaff} from 'components/Movie/MovieStaff/MovieStaff';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';
import {T} from 'Common/Text';
import mainStyles from 'styles/main.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieStaff: IMovieStaff[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseStaff = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`);
    const movieName = responseFilm.data.nameRu;
    const movieStaff = responseStaff.data;
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
