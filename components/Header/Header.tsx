import styles from 'components/Header/Header.module.css';
import Navbar from 'components/Navbar/Navbar';
import Image from 'next/image';
import logo from 'public/logo.png';

/**
 * Компонент статичного хедера сайта.
 */
const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image width={200} height={80} src={logo} priority={true} alt="Movies" />
                </div>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
