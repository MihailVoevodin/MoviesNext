import {ConfigProvider, Pagination} from 'antd';
import {T} from 'Common/Text';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/images/MovieImages.module.scss';
import {useEffect} from 'react';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

const Images = ({movieName, movieImages}: any) => {
    const router = useRouter()
    console.log(router.pathname)
    const dispatch = useAppDispatch();
    const {imagesPageId} = useAppSelector(state => state.films)
    const {total, totalPages, items} = movieImages

    const onChange = (pageId: number) => {
        dispatch(setImagesPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/images/stills/${pageId}`);
    }

    return (
        <>
            <Head>
                <title>Изображения: {movieName}</title>
            </Head>
            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            colorPrimary: 'black',
                            colorText: 'black',
                            colorBgTextHover: '#ff6200',
                            colorPrimaryHover: '#ff6200',
                            colorTextDisabled: '#363836',
                        },

                    },
                }}
            >
                <div className='movieDetailsPage'>
                    <div className='movieDetailsContainer'>
                        <div className='movieDetailsTitle'><span>Изображения</span> / {movieName}</div>
                        <div className='backToMovieContainer'>
                            <hr/>
                            <span className='backToMovie' onClick={() => router.replace(`/movie/${router.query.movieId}`)}>Информация о фильме</span>
                            <hr/>
                        </div>
                        <div>
                            <ul className={styles.titlesList}>
                                {T.imagesTextArray.map((type: any) => {
                                    return (
                                        <Link
                                            key={type.id} href={`/movie/${router.query.movieId}/images/${type.type}/1`}
                                            className={router.pathname.includes(type.type) ? 'imagesType activeImagesType': 'imagesType'}
                                        >
                                            <li>{type.text} {router.pathname.includes(type.type) && total}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                            {items.map((image: any, id: number) => <Image key={id} width={200} height={150} src={image.previewUrl} alt='.' />)}
                            {totalPages > 1 && <Pagination className={'pagination'} current={imagesPageId} total={total} onChange={onChange} defaultPageSize={20} showSizeChanger={false} />}
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    )
};

export default Images;