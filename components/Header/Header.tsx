import styles from 'components/Header/Header.module.css';
import Navbar from 'components/Navbar/Navbar';
import Image from 'next/image';
import logo from 'public/logo.png';

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image width={200} height={80} src={logo} alt='Movies' />
                </div>
                <Navbar />
            </div>
        </header>
    )
};

export default Header;
