import styles from 'components/Navbar/Navbar.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import {useAppSelector} from 'store/hooks';

/**
 * Компонент навигационной панели.
 */
const Navbar: FC = () => {
    const {top250PageId} = useAppSelector((state) => state.films);

    const NavigationItems = [
        {id: 0, title: 'Главная', path: '/'},
        {id: 1, title: 'Фильмы', path: `/movies/top250movies/page/${top250PageId}`},
        {id: 2, title: 'Личности', path: '/persons'},
    ];

    return (
        <nav>
            <ul className={styles.navbarList}>
                {NavigationItems.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        {title}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
