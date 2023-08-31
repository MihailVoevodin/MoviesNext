import {HeadComponent} from 'components/Head/Head';
import Image from 'next/image';
import serverErrorImg from 'public/500.png';
import {FC} from 'react';

const ServerErrorPage: FC = () => {
    return (
        <>
            <HeadComponent title="500 Server Error" />
            <main>
                <div className="serverError">
                    <Image src={serverErrorImg} alt="500" width={200} height={200} />
                    <h1>500 - Server-side error occurred. Try again later.</h1>
                </div>
            </main>
        </>
    );
};

export default ServerErrorPage;
