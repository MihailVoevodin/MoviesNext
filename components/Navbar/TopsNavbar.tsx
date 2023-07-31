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

    const pagesIdArray: number[] = [top250PageId, top100PageId, topAwaitPageId, findMoviesPageId];

    return (
        <div className={styles.topsNavbarContainer}>
            {T.Pages.MainPages.map((page, id) => (
                <Link
                    key={id}
                    onClick={() => dispatch(setActiveTabName(page.path))}
                    className={router.pathname.includes(page.path) ? styles.active : undefined}
                    href={page.link(pagesIdArray[id])}
                >
                    {page.text}
                </Link>
            ))}
        </div>
    );
};
