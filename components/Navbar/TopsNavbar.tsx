import styles from 'components/Navbar/TopsNavbar.module.scss';
import Link from 'next/link';
import {FC} from 'react';

/**
 * @param top250PageId Id страницы с топ 250 фильмов.
 * @param top100PageId Id страницы с топ 100 фильмов.
 * @param topAwaitPageId Id страницы с топом ожидаемых фильмов.
 * @param findMoviesPageId Id страницы с фильмами по поиску.
 */
interface IProps {
    top250PageId: number;
    top100PageId: number;
    topAwaitPageId: number;
    findMoviesPageId: number;
}

export const TopsNavbar: FC<IProps> = ({top250PageId, top100PageId, topAwaitPageId, findMoviesPageId}) => {
    return (
        <div className={styles.topsNavbarContainer}>
            <Link href={`/movies/top250movies/page/${top250PageId}`}>Топ 250 фильмов</Link>
            <Link href={`/movies/top100popular/page/${top100PageId}`}>Топ 100 фильмов</Link>
            <Link href={`/movies/topAwaitMovies/page/${topAwaitPageId}`}>Топ ожидаемых фильмов</Link>
            <Link href={`/movies/findMovies/page/${findMoviesPageId}`}>Найти фильмы</Link>
        </div>
    );
};
