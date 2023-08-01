import {HomePageTop} from 'components/HomePageTop/HomePageTop';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {FC} from 'react';
import {useAppSelector} from 'store/hooks';
import styles from 'styles/main.module.scss';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

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
    const {top250PageId, top100PageId, topAwaitPageId} = useAppSelector((state) => state.films);
    const pagesIdArray = [top250PageId, top100PageId, topAwaitPageId];
    const moviesArrays = [top250Movies, top100Movies, topAwaitMovies];

    return (
        <>
            <Head>
                <title>Фильмы</title>
            </Head>
            <div className={styles.homePreview}>
                <span>Узнай больше про свои любимые фильмы, сериалы или актёров</span>
            </div>
            <main>
                {T.Pages.MainPages.slice(0, 3).map((page, id) => (
                    <HomePageTop key={id} movies={moviesArrays[id]} link={page.link(pagesIdArray[id])} text={page.text} />
                ))}
            </main>
        </>
    );
};

export default Home;
