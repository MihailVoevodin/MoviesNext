import axios from 'axios';
import {MovieDistribution} from 'components/Movie/MovieDistributions/MovieDistribution';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {T} from 'Common/Text';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseDistributions = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/distributions`);
    const movieName = responseFilm.data.nameRu
    const movieDistributions = responseDistributions.data;
    return {
        props: {movieDistributions, movieName},
    }
}

const Distributions = ({movieDistributions, movieName}: any) => {
    const router = useRouter();
    const {items} = movieDistributions;

    return (
        <>
            <Head>
                <title>Прокат: {movieName}</title>
            </Head>
            <div className='movieDetailsPage'>
                <div className='movieDetailsContainer'>
                    <div className='movieDetailsTitle'><span>Прокат</span> / {movieName}</div>
                    <div className='backToMovieContainer'>
                        <hr/>
                        <span className='backToMovie' onClick={() => router.replace(`/movie/${router.query.movieId}`)}>Информация о фильме</span>
                        <hr/>
                    </div>
                    <div>
                        {T.distributionsTextArray.map((distrib: any) => <MovieDistribution key={distrib.id} array={items} type={distrib.type} text={distrib.text} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distributions
