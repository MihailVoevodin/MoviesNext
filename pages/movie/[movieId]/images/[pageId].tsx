import {ConfigProvider, Pagination} from 'antd';
import axios from 'axios';
import {CloseIcon} from 'Common/CloseIcon';
import {IMAGES_DICTIONARY, paginationTheme} from 'Common/Consts';
import {IMovieImages, IMovieImage} from 'Common/Models';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/images/MovieImages.module.scss';
import mainStyles from 'styles/main.module.scss';
import {ParsedUrlQuery} from 'querystring';
import React, {useEffect, useState} from 'react';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {T} from 'Common/Text';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieImages: IMovieImages;
};

interface Params extends ParsedUrlQuery {
    movieId: string;
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId, pageId} = context.params!;
    const {type} = context.query;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseImages = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=${type}&page=${pageId}`
    );
    const movieName = responseFilm.data.nameRu;
    const movieImages = responseImages.data;
    return {
        props: {movieName, movieImages},
    };
};

const Images: React.FC<Props> = ({movieName, movieImages}) => {
    const [image, setImage] = useState<string>('');
    const router = useRouter();
    const {imagesPageId} = useAppSelector((state) => state.films);
    const {total, totalPages, items} = movieImages;
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<string>(IMAGES_DICTIONARY[0].type);

    useEffect(() => {
        dispatch(setImagesPageId(1));
    }, []);

    useEffect(() => {
        void router.push(`/movie/${router.query.movieId}/${T.Pages.Images.route}/${imagesPageId}?&type=${filter}`);
    }, [filter]);

    const handleChangeFilter = (type: string) => {
        setFilter(type);
        dispatch(setImagesPageId(1));
    };

    const handleOpenImage = (image: IMovieImage) => {
        setImage(image.imageUrl);
    };

    const handleCloseImage = () => {
        setImage('');
    };

    const onChange = (pageId: number) => {
        dispatch(setImagesPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/${T.Pages.Images.route}/${pageId}?&type=${filter}`);
    };

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Images.label}: {movieName}
                </title>
            </Head>
            <ConfigProvider theme={paginationTheme}>
                <div className={mainStyles.movieDetailsPage}>
                    <div className={mainStyles.movieDetailsContainer}>
                        <div className={mainStyles.movieDetailsTitle}>
                            <span>{T.Pages.Images.label}</span> / {movieName}
                        </div>
                        <div className={mainStyles.backToMovieContainer}>
                            <hr />
                            <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                                {T.BackToMovie.label}
                            </span>
                            <hr />
                        </div>
                        <div>
                            <ul className={styles.titlesList}>
                                {IMAGES_DICTIONARY.map((type) => {
                                    return (
                                        <li
                                            key={type.type}
                                            className={
                                                router.query.type === type.type
                                                    ? `${mainStyles.imagesType} ${mainStyles.activeImagesType}`
                                                    : `${mainStyles.imagesType}`
                                            }
                                            onClick={() => handleChangeFilter(type.type)}
                                        >
                                            {type.text} {router.query.type === type.type && total}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={styles.container}>
                                {items.map((image, id: number) => (
                                    <div key={id}>
                                        <Image
                                            className={styles.image}
                                            onClick={() => handleOpenImage(image)}
                                            width={200}
                                            height={150}
                                            src={image.previewUrl}
                                            alt="."
                                        />
                                    </div>
                                ))}
                                {image && (
                                    <div className={styles.modal}>
                                        <div className={styles.modalContainer}>
                                            <img className={styles.modalImage} src={image} alt="." />
                                        </div>
                                        <div className={styles.modalClose} onClick={handleCloseImage}>
                                            <CloseIcon />
                                        </div>
                                    </div>
                                )}
                            </div>
                            {totalPages > 1 && (
                                <Pagination
                                    className={mainStyles.pagination}
                                    current={imagesPageId}
                                    total={total}
                                    onChange={onChange}
                                    defaultPageSize={20}
                                    showSizeChanger={false}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};

export default Images;
