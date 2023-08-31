import {HeadComponent} from 'components/Head/Head';
import Image from 'next/image';
import NotFoundImg from 'public/404.png';
import {FC} from 'react';

/**
 * Компонент отображения ошибки.
 */
const PathErrorPage: FC = () => {
    return (
        <>
            <HeadComponent title="404 Not Found" />
            <main>
                <div className="notFound">
                    <Image src={NotFoundImg} alt="404" width={300} height={200} />
                    <h2>Try again later</h2>
                </div>
            </main>
        </>
    );
};

export default PathErrorPage;
