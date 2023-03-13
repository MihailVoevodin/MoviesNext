import {ConfigProvider, Pagination} from 'antd';
import axios from 'axios';
import {CloseIcon} from 'Common/Close';
import {T} from 'Common/Text';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/images/MovieImages.module.scss';
import {useEffect, useState} from 'react';
import {setImagesPageId, setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId, pageId} = context.params
    const {type} = context.query
    console.log(context.query)
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseImages = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=${type}&page=${pageId}`);
    const movieName = responseFilm.data.nameRu;
    const movieImages = responseImages.data
    return {
        props: {movieName, movieImages},
    }
}

const Images = ({movieName, movieImages}: any) => {
    const [image, setImage] = useState<string>('')
    const router = useRouter()
    console.log(router.query)
    const {imagesPageId} = useAppSelector(state => state.films)
    const {total, totalPages, items} = movieImages
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState('STILL')

    useEffect(() => {
        dispatch(setImagesPageId(1));
    }, [])

    useEffect(() => {
        void router.push(`/movie/${router.query.movieId}/images/${imagesPageId}?&type=${filter}`);
    }, [filter])

    const handleChangeFilter = (type: string) => {
        setFilter(type);
        dispatch(setImagesPageId(1));
    }

    const handleOpenImage = (image: any) => {
        setImage(image.imageUrl)
    }

    const handleCloseImage = () => {
        setImage('')
    }

    const onChange = (pageId: number) => {
        dispatch(setImagesPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/images/${pageId}?&type=${filter}`);
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
                                        <li
                                            key={type.id}
                                            className={router.query.type === type.type ? 'imagesType activeImagesType': 'imagesType'}
                                            onClick={() => handleChangeFilter(type.type)}
                                        >
                                            {type.text} {router.query.type === type.type && total}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={styles.container}>
                                {items.map((image: any, id: number) => <div key={id}>
                                        <Image className={styles.image} onClick={() => handleOpenImage(image)} width={200} height={150} src={image.previewUrl} alt='.' />
                                    </div>
                                )}
                                {image && <div className={styles.modal}>
                                    <div className={styles.modalContainer}>
                                        <img className={styles.modalImage} src={image} alt='.' />
                                    </div>
                                    <div className={styles.modalClose} onClick={handleCloseImage}><CloseIcon /></div>
                                </div>}
                            </div>
                            {totalPages > 1 && <Pagination className={'pagination'} current={imagesPageId} total={total} onChange={onChange} defaultPageSize={20} showSizeChanger={false} />}
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    )
};

export default Images;
