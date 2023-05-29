import {ConfigProvider, Pagination} from 'antd';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/images/MovieImages.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC, useEffect, useState} from 'react';
import {setImagesPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import mainStyles from 'styles/main.module.scss';
import {CloseIcon} from 'Common/CloseIcon';
import {IMAGES_DICTIONARY} from 'Common/Consts';
import {IMovieImages, IMovieImage} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieImages Массив изображений фильма.
 */
interface IProps {
    movieName: string;
    movieImages: IMovieImages;
}

/**
 * @param movieId Идентификатор фильма.
 * @param pageId Номер страницы изображений.
 */
interface Params extends ParsedUrlQuery {
    movieId: string;
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {movieId, pageId} = context.params!;
    const {type} = context.query;
    const movieResponse = await Services.getMovie(movieId);
    const imagesResponse = await Services.getMovieImages(movieId, type, pageId);
    const movieName = movieResponse.data.nameRu;
    const movieImages = imagesResponse.data;
    return {
        props: {movieName, movieImages},
    };
};

/**
 * Страница отображения изображений фильма.
 */
const Images: FC<IProps> = ({movieName, movieImages}) => {
    const [image, setImage] = useState<string>('');
    const router = useRouter();
    const {imagesPageId} = useAppSelector((state) => state.films);
    const {total, totalPages, items: images} = movieImages;
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
                <div className={mainStyles.movieDetailsPage}>
                    <div className={mainStyles.movieDetailsContainer}>
                        <div className={mainStyles.movieDetailsTitle}>
                            <span>{T.Pages.Images.label}</span> / {movieName}
                        </div>
                        <div className={mainStyles.backToMovieContainer}>
                            <hr />
                            <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                                {T.Pages.backToMovie}
                            </span>
                            <hr />
                        </div>
                        {images.length > 0 ? (
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
                                    {images.map((image, id: number) => (
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
                        ) : (
                            <div className={mainStyles.emptyPage}>{T.Pages.Images.empty}</div>
                        )}
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};

export default Images;
