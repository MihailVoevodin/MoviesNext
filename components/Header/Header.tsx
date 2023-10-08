import styles from 'components/Header/Header.module.scss';
import Navbar from 'components/Navbar/Navbar';
import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import {T} from 'Common/Text';

/**
 * Компонент статичного хедера сайта.
 */
const Header = () => {
    const {data: session} = useSession();
    console.log(session);

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image width={200} height={80} src={logo} priority={true} alt="Movies" />
                </div>
                <Navbar />
            </div>
            <div className={styles.auth}>
                {!session && (
                    <button className={styles.signInBtn} onClick={() => signIn()}>
                        {T.Auth.signIn}
                    </button>
                )}
                {session && (
                    <div className={styles.signOutContainer}>
                        <Link className={styles.profileLink} href={T.Pages.Profile.link}>
                            <Image className={styles.profileImage} src={`${session.user?.image}`} alt={''} width={50} height={50} />
                        </Link>
                        <button className={styles.signOutBtn} onClick={() => signOut()}>
                            {T.Auth.signOut}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
