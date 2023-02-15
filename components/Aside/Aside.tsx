import Navbar from 'components/Navbar/Navbar';
import Image from 'next/image';
import logo from 'public/logo.png';
import styles from 'components/Aside/Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Image width={200} height={80} src={logo} alt='Movies' />
            </div>
            <Navbar />
        </aside>
    )
}

export default Aside;
