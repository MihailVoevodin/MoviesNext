import {HeadComponent} from 'components/Head/Head';
import {useSession} from 'next-auth/react';

const Signin = () => {
    const {data: session} = useSession();

    return (
        <>
            <HeadComponent title={`Профиль ${session?.user?.name}`} />
            <main>
                <div>{session?.user?.name}</div>
            </main>
        </>
    );
};

export default Signin;
