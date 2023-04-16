import axios from 'axios';
import {IMovieAwards} from 'Common/Models';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {AWARDS_DICTIONARY} from 'Common/Consts';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieAwards: IMovieAwards;
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseAwards = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/awards`);
    const movieName = responseFilm.data.nameRu;
    const movieAwards = responseAwards.data;
    return {
        props: {movieAwards, movieName},
    };
};

const Awards: React.FC<Props> = ({movieAwards, movieName}) => {
    const router = useRouter();
    const {items} = movieAwards;

    return (
        <>
            <Head>
                <title>Награды: {movieName}</title>
            </Head>
            <div className="movieDetailsPage">
                <div className="movieDetailsContainer">
                    <div className="movieDetailsTitle">
                        <span>Награды</span> / {movieName}
                    </div>
                    <div className="backToMovieContainer">
                        <hr />
                        <span className="backToMovie" onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            Информация о фильме
                        </span>
                        <hr />
                    </div>
                    <div>
                        {AWARDS_DICTIONARY.map((award) => (
                            <MovieAward key={award.type} movieAwards={items} text={award.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Awards;
