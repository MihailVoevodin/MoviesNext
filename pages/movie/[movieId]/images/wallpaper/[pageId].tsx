import axios from 'axios';
import MovieAboutImages from 'Helpers/MovieAboutImages';
import {useEffect} from 'react';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch} from 'store/hooks';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId} = context.params
    const {pageId} = context.params
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseImages = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=WALLPAPER&page=${pageId}`);
    const movieName = responseFilm.data.nameRu;
    const movieImages = responseImages.data
    return {
        props: {movieName, movieImages},
    }
}

const Images = ({movieName, movieImages}: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setImagesPageId(1));
    }, [])

    return <MovieAboutImages movieName={movieName} movieImages={movieImages} />
};

export default Images;
