import Head from 'next/head';
import {FC} from 'react';
import Link from "next/link";
import { useAppSelector } from "store/hooks";
import { GetServerSideProps } from "next";
import { Services } from "Common/Services";
import Slider from "react-slick";
import Image from "next/image";
import styles from "styles/main.module.scss";
import { IMovie } from "Common/Models";
import { HomePageTop } from "components/HomePageTop/HomePageTop";

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
  top250Movies: IMovie[];
  top100Movies: IMovie[];
  topAwaitMovies: IMovie[];
}

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
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

const Home: FC<IProps> = ({top250Movies, top100Movies, topAwaitMovies}) => {
  const {pageId} = useAppSelector((state) => state.films);

  return (
        <>
            <Head>
                <title>Movies</title>
            </Head>
            <main>
              <HomePageTop movies={top250Movies} link={`/movies/page/${pageId}`} text={'Топ 250 фильмов'} />
              <HomePageTop movies={top100Movies} link={`/movies/page/${pageId}`} text={'Топ 100 популярных фильмов'} />
              <HomePageTop movies={topAwaitMovies} link={`/movies/page/${pageId}`} text={'Топ ожидаемых фильмов'} />
            </main>
        </>
    );
};

export default Home;
