import styles from 'components/Navbar/TopsNavbar.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC} from 'react';
import {setActiveTabName} from 'store/filmsSlice';
import {useAppDispatch} from 'store/hooks';
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

/**
 * Компонент отображения табов на топы фильмов.
 */
export const TopsNavbar: FC<IProps> = ({top250PageId, top100PageId, topAwaitPageId, findMoviesPageId}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <div className={styles.topsNavbarContainer}>
            <Link
                onClick={() => dispatch(setActiveTabName(T.Pages.MainPages.Top250.path))}
                className={router.pathname.includes(T.Pages.MainPages.Top250.path) ? styles.active : undefined}
                href={T.Pages.MainPages.Top250.link(top250PageId)}
            >
                {T.Pages.MainPages.Top250.text}
            </Link>
            <Link
                onClick={() => dispatch(setActiveTabName(T.Pages.MainPages.Top100.path))}
                className={router.pathname.includes(T.Pages.MainPages.Top100.path) ? styles.active : undefined}
                href={T.Pages.MainPages.Top100.link(top100PageId)}
            >
                {T.Pages.MainPages.Top100.text}
            </Link>
            <Link
                onClick={() => dispatch(setActiveTabName(T.Pages.MainPages.TopAwait.path))}
                className={router.pathname.includes(T.Pages.MainPages.TopAwait.path) ? styles.active : undefined}
                href={T.Pages.MainPages.TopAwait.link(topAwaitPageId)}
            >
                {T.Pages.MainPages.TopAwait.text}
            </Link>
            <Link
                onClick={() => dispatch(setActiveTabName(T.Pages.MainPages.TopAwait.path))}
                className={router.pathname.includes(T.Pages.MainPages.TopAwait.path) ? styles.active : undefined}
                href={T.Pages.MainPages.FindMovies.link(findMoviesPageId)}
            >
                {T.Pages.MainPages.FindMovies.text}
            </Link>
        </div>
    );
};
