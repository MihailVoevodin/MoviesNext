import {useSession} from 'next-auth/react';

const Signin = () => {
    const {data: session} = useSession();
    console.log(session);

    return <div>login</div>;
};

export default Signin;
