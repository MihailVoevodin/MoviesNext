import styles from 'components/Navbar/TopsNavbar.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC} from 'react';
import {selectNavbarPagesIdArray} from 'store/films/filmsSelectors';
import {setActiveTabName} from 'store/films/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {T} from 'Common/Text';

/**
 * Компонент отображения табов на топы фильмов.
 */
export const TopsNavbar: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const pagesIdArray = useAppSelector(selectNavbarPagesIdArray);

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
