import styles from 'components/Header/Header.module.scss';
import Navbar from 'components/Navbar/Navbar';
import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import logo from 'public/logo.png';

/**
 * Компонент статичного хедера сайта.
 */
const Header = () => {
    const {data: session} = useSession();
    const router = useRouter();
    console.log(session);

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image width={200} height={80} src={logo} priority={true} alt="Movies" />
                </div>
                <Navbar />
            </div>
            {!session && (
                <div className={styles.signIn} onClick={() => signIn()}>
                    Войти
                </div>
            )}
            {session && (
                <div className={styles.signOut}>
                    <Image
                        className={styles.profileImage}
                        src={session.user?.image}
                        alt={''}
                        width={50}
                        height={50}
                        onClick={() => router.replace('/profile')}
                    />
                    <div onClick={() => signOut()}>Выйти</div>
                </div>
            )}
        </header>
    );
};

export default Header;
