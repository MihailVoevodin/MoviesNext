import Link from 'next/link';
import styles from 'components/Navbar/Navbar.module.scss';
import React from 'react';
import {useAppSelector} from 'store/hooks';

const Navbar: React.FC = () => {
    const {pageId} = useAppSelector((state) => state.films);

    const NavigationItems = [
        {id: 1, title: 'Главная', path: '/'},
        {id: 2, title: 'Фильмы', path: `/movies/page/${pageId}`},
        {id: 3, title: 'Сериалы', path: '/series'},
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
