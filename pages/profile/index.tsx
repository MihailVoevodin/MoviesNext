import {HeadComponent} from 'components/Head/Head';
import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';

const Profile = () => {
    const {data: session} = useSession();

    return (
        <>
            <HeadComponent title={`Профиль ${session ? session.user?.name : ''}`} />
            <main>
                <div>
                    {!session && (
                        <>
                            <div>Вы не авторизованы</div>
                            <div onClick={() => signIn()}>Войти</div>
                        </>
                    )}
                    {session && (
                        <>
                            <Image src={`${session.user?.image}`} alt={''} width={100} height={100} />
                            <div>Имя: {session.user?.name}</div>
                            <div>Почта: {session.user?.email}</div>
                            <div onClick={() => signOut()}>Выйти</div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Profile;
