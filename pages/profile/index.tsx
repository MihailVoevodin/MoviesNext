import {HeadComponent} from 'components/Head/Head';
import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import styles from 'pages/profile/Profile.module.scss';
import {T} from 'Common/Text';

const Profile = () => {
    const {data: session} = useSession();

    return (
        <>
            <HeadComponent title={`${T.Pages.Profile.label} ${session ? session.user?.name : ''}`} />
            <main>
                <div className={styles.profileContainer}>
                    <div className={styles.profile}>
                        {!session && (
                            <>
                                <div>{T.Auth.notAuth}</div>
                                <button className={styles.btn} onClick={() => signIn()}>
                                    {T.Auth.signIn}
                                </button>
                            </>
                        )}
                        {session && (
                            <>
                                <Image src={`${session.user?.image}`} alt={''} width={100} height={100} />
                                <div>{session.user?.name}</div>
                                <div>{session.user?.email}</div>
                                <button className={styles.btn} onClick={() => signOut()}>
                                    {T.Auth.signOut}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
