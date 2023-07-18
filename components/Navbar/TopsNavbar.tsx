import styles from 'components/Navbar/TopsNavbar.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import {T} from 'Common/Text';

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
            <Link href={T.Pages.MainPages.Top250Movies.link(top250PageId)}>{T.Pages.MainPages.Top250Movies.text}</Link>
            <Link href={T.Pages.MainPages.Top100Movies.link(top100PageId)}>{T.Pages.MainPages.Top100Movies.text}</Link>
            <Link href={T.Pages.MainPages.TopAwaitMovies.link(topAwaitPageId)}>{T.Pages.MainPages.TopAwaitMovies.text}</Link>
            <Link href={T.Pages.MainPages.FindMovies.link(findMoviesPageId)}>{T.Pages.MainPages.FindMovies.text}</Link>
        </div>
    );
};
