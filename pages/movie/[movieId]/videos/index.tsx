import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import ReactPlayer from 'react-player';
import styles from 'pages/movie/[movieId]/videos/videos.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseVideos = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`);
    const movieName = responseFilm.data.nameRu
    const movieVideos = responseVideos.data.items;
    return {
        props: {movieVideos, movieName},
    }
}

const Videos = ({movieVideos, movieName}: any) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Видео: {movieName}</title>
            </Head>
            <div className='movieDetailsPage'>
                <div className='movieDetailsContainer'>
                    <div className='movieDetailsTitle'><span>Видео</span> / {movieName}</div>
                    <div className='backToMovieContainer'>
                        <hr/>
                        <span className='backToMovie' onClick={() => router.replace(`/movie/${router.query.movieId}`)}>Информация о фильме</span>
                        <hr/>
                    </div>
                    <div>
                        {movieVideos.filter((video: any) => video.site === 'YOUTUBE').map((video: any, id: number) => <>
                            <div className={styles.videoName}>{video.name}</div>
                            <div className={styles.video}>
                                <ReactPlayer key={id} url={video.url} />
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videos
