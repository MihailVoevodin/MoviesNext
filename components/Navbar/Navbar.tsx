import Link from 'next/link';
import styles from 'components/Navbar/Navbar.module.css';
import {useAppSelector} from 'store/hooks';

const Navbar = () => {
    const {pageId} = useAppSelector(state => state.films)

    const NavigationItems = [
        {id: '1', title: 'Home', path: '/'},
        {id: '2', title: 'Movies', path: `/movies/page/${pageId}`},
        {id: '3', title: 'Series', path: '/series'},
    ]

    return (
        <nav>
            <ul className={styles.navbarList}>
                {NavigationItems.map(({id, title, path}) =>
                    <Link key={id} href={path}>{title}</Link>
                )}
            </ul>
        </nav>
    )
};

export default Navbar;
