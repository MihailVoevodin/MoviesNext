import {HeadComponent} from 'components/Head/Head';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/videos/videos.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import ReactPlayer from 'react-player';
import mainStyles from 'styles/main.module.scss';
import {IMovieVideo} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieVideos Массив видео о фильме.
 */
interface IProps {
    movieName: string;
    movieVideos: IMovieVideo[];
}

/**
 * @param movieId Идентификатор фильма.
 */
interface Params extends ParsedUrlQuery {
    movieId: string;
}
export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const videoResponse = await Services.getMovieVideos(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieVideos = videoResponse.data.items;

    if (!movieVideos) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movieVideos, movieName},
    };
};

/**
 * Страница отображения видео о фильме.
 */
const Videos: FC<IProps> = ({movieVideos, movieName}) => {
    const router = useRouter();

    return (
        <>
            <HeadComponent title={T.Pages.Videos.label} movieName={movieName} />
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Videos.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieVideos.length > 0 ? (
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
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Videos.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Videos;
