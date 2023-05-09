import styles from 'components/Navbar/Navbar.module.scss';
import Link from 'next/link';
import {FC, useState} from 'react';
import {useAppSelector} from 'store/hooks';

/**
 * Компонент навигационной панели.
 */
const Navbar: FC = () => {
    const {pageId} = useAppSelector((state) => state.films);

    const NavigationItems = [
        {id: 0, title: 'Главная', path: '/', active: true},
        {id: 1, title: 'Фильмы', path: `/movies/page/${pageId}`, active: false},
        {id: 2, title: 'Личности', path: '/persons', active: false},
    ];
    const [items, setItems] = useState(NavigationItems);

    const handleSelectMenuItem = (id: number) => {
        setItems(items.map((item) => (item.id === id ? {...item, active: true} : {...item, active: false})));
    };

    return (
        <nav>
            <ul className={styles.navbarList}>
                {items.map(({id, title, path, active}) => (
                    <Link className={active ? styles.active : ''} onClick={() => handleSelectMenuItem(id)} key={id} href={path}>
                        {title}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
