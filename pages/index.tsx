import {HomePageTop} from 'components/HomePageTop/HomePageTop';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {FC} from 'react';
import {useAppSelector} from 'store/hooks';
import styles from 'styles/main.module.scss';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';

/**
 * @param top250Movies Массив топ 250 фильмов фильмов.
 * @param top100Movies Массив топ 100 популярных фильмов.
 * @param topAwaitMovies Массив топа ожидаемых фильмов.
 */
interface IProps {
    top250Movies: IMovie[];
    top100Movies: IMovie[];
    topAwaitMovies: IMovie[];
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
    const top250MoviesResponse = await Services.getMoviesTop_250('1');
    const top100MoviesResponse = await Services.getMoviesTop_100('1');
    const topAwaitMoviesResponse = await Services.getMoviesAwait('1');
    const top250Movies = top250MoviesResponse.data.films;
    const top100Movies = top100MoviesResponse.data.films;
    const topAwaitMovies = topAwaitMoviesResponse.data.films;
    return {
        props: {top250Movies, top100Movies, topAwaitMovies},
    };
};

/**
 * Компонент отображения главной страницы.
 */
const Home: FC<IProps> = ({top250Movies, top100Movies, topAwaitMovies}) => {
    const {pageId} = useAppSelector((state) => state.films);

    return (
        <>
            <Head>
                <title>Movies</title>
            </Head>
            <div className={styles.homePreview}>
                <span>Узнай больше про свои любимые фильмы, сериалы или актёров</span>
            </div>
            <main>
                <HomePageTop movies={top250Movies} link={`/movies/top250movies/page/${pageId}`} text={'Топ 250 фильмов'} />
                <HomePageTop movies={top100Movies} link={`/movies/top100popular/page/${pageId}`} text={'Топ 100 популярных фильмов'} />
                <HomePageTop movies={topAwaitMovies} link={`/movies/topAwaitMovies/page/${pageId}`} text={'Топ ожидаемых фильмов'} />
            </main>
        </>
    );
};

export default Home;
