import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/videos/videos.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import ReactPlayer from 'react-player';
import mainStyles from 'styles/main.module.scss';
import {IMovieVideo} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

type Props = {
    movieName: string;
    movieVideos: IMovieVideo[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const videoResponse = await Services.getMovieVideos(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieVideos = videoResponse.data.items;
    return {
        props: {movieVideos, movieName},
    };
};

const Videos: FC<Props> = ({movieVideos, movieName}) => {
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
