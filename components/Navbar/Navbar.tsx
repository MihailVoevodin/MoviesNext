import Link from 'next/link';
import styles from 'components/Navbar/Navbar.module.css';

const Navbar = () => {

    const NavigationItems = [
        {id: '1', title: 'Home', path: '/'},
        {id: '2', title: 'Movies', path: '/movies'},
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