import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {T} from 'Common/Text';
import styles from 'styles/Award.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseAwards = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/awards`);
    const movieName = responseFilm.data.nameRu
    const movieAwards = responseAwards.data;
    return {
        props: {movieAwards, movieName},
    }
}

const Awards = ({movieAwards, movieName}: any) => {
    const router = useRouter();
    const {items} = movieAwards;
    console.log(items)


    return (
        <>
            <Head>
                <title>Награды: {movieName}</title>
            </Head>
            <div className='movieDetailsPage'>
                <div className='movieDetailsContainer'>
                    <div className='movieDetailsTitle'><span>Награды</span> / {movieName}</div>
                    <div className='backToMovieContainer'>
                        <hr/>
                        <span className='backToMovie' onClick={() => router.back()}>Информация о фильме</span>
                        <hr/>
                    </div>
                    <div>
                        {T.awardsTypeArray.map((type, id) => <MovieAward key={id} awardsArray={items} awardType={type} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards
