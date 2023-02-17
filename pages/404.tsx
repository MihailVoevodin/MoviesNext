import {useRouter} from 'next/router';
import {useEffect} from 'react';

const PathErrorPage = () => {
    const router = useRouter();
    console.log(router)
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    })

    return (
        <>
            <h1>Error 404</h1>
            <div>Path not found</div>
        </>
    )
}

export default PathErrorPage;
