import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {T} from 'Common/Text';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseStaff = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/awards`);
    const movieName = responseFilm.data.nameRu
    const movieStaff = responseStaff.data;
    return {
        props: {movieStaff, movieName},
    }
}

const Staff = ({movieStaff, movieName}: any) => {
    const router = useRouter();
    const {items} = movieStaff;

    return (
        <>
            <Head>
                <title>Актеры и съемочная группа: {movieName}</title>
            </Head>
            <div className='movieDetailsPage'>
                <div className='movieDetailsContainer'>
                    <div className='movieDetailsTitle'><span>Создатели</span> / {movieName}</div>
                    <div className='backToMovieContainer'>
                        <hr/>
                        <span className='backToMovie' onClick={() => router.back()}>Информация о фильме</span>
                        <hr/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Staff
