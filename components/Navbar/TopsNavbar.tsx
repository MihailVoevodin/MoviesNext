import styles from 'components/Navbar/TopsNavbar.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
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
    const router = useRouter();

    return (
        <div className={styles.topsNavbarContainer}>
            <Link
                className={router.pathname.includes('top250movies') ? styles.active : undefined}
                href={T.Pages.MainPages.Top250Movies.link(top250PageId)}
            >
                {T.Pages.MainPages.Top250Movies.text}
            </Link>
            <Link
                className={router.pathname.includes('top100popular') ? styles.active : undefined}
                href={T.Pages.MainPages.Top100Movies.link(top100PageId)}
            >
                {T.Pages.MainPages.Top100Movies.text}
            </Link>
            <Link
                className={router.pathname.includes('topAwaitMovies') ? styles.active : undefined}
                href={T.Pages.MainPages.TopAwaitMovies.link(topAwaitPageId)}
            >
                {T.Pages.MainPages.TopAwaitMovies.text}
            </Link>
            <Link
                className={router.pathname.includes('findMovies') ? styles.active : undefined}
                href={T.Pages.MainPages.FindMovies.link(findMoviesPageId)}
            >
                {T.Pages.MainPages.FindMovies.text}
            </Link>
        </div>
    );
};
