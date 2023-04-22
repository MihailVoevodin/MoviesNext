import axios from 'axios';
import {IMovieVideo} from 'Common/Models';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React from 'react';
import ReactPlayer from 'react-player';
import {T} from 'Common/Text';
import styles from 'pages/movie/[movieId]/videos/videos.module.scss';
import mainStyles from 'styles/main.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieVideos: IMovieVideo[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseVideos = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`);
    const movieName = responseFilm.data.nameRu;
    const movieVideos = responseVideos.data.items;
    return {
        props: {movieVideos, movieName},
    };
};

const Videos: React.FC<Props> = ({movieVideos, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Videos.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Videos.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    <div>
                        {movieVideos
                            .filter((video) => video.site === 'YOUTUBE')
                            .map((video, id: number) => (
                                <>
                                    <div className={styles.videoName}>{video.name}</div>
                                    <div className={styles.video}>
                                        <ReactPlayer key={id} url={video.url} />
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Videos;
