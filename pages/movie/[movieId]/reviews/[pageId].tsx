import {ConfigProvider, Pagination, Select} from 'antd';
import axios from 'axios';
import {IMovieReviews} from 'Common/Models';
import {MovieReview} from 'components/Movie/MovieReview/MovieReview';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import React, {useEffect, useState} from 'react';
import {setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    movieName: string;
    movieReviews: IMovieReviews;
};

interface Params extends ParsedUrlQuery {
    movieId: string;
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId, pageId} = context.params!;
    const {order} = context.query;
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseReviews = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/reviews?page=${pageId}&order=${order}`
    );
    const movieName = responseFilm.data.nameRu;
    const movieReviews = responseReviews.data;
    return {
        props: {movieReviews, movieName},
    };
};

const Reviews: React.FC<Props> = ({movieReviews, movieName}) => {
    const router = useRouter();
    const {total, totalPositiveReviews, totalNegativeReviews, totalNeutralReviews, items} = movieReviews;
    const dispatch = useAppDispatch();
    const {reviewsPageId} = useAppSelector((state) => state.films);
    const [filter, setFilter] = useState<string>('DATE_ASC');

    useEffect(() => {
        void router.push(`/movie/${router.query.movieId}/reviews/${reviewsPageId}/?&order=${filter}`);
    }, [filter]);

    const onChange = (pageId: number) => {
        dispatch(setReviewsPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/reviews/${pageId}/?&order=${filter}`);
    };

    const handleFilterChange = (value: string) => {
        setFilter(value);
        dispatch(setReviewsPageId(1));
    };

    return (
        <>
            <Head>
                <title>Рецензии: {movieName}</title>
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
                        Select: {
                            colorPrimaryHover: '#ff6200',
                        },
                    },
                }}
            >
                <div className="movieDetailsPage">
                    <div className="movieDetailsContainer">
                        <div className="movieDetailsTitle">
                            <span>Рецензии</span> / {movieName}
                        </div>
                        <div className="backToMovieContainer">
                            <hr />
                            <span className="backToMovie" onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                                Информация о фильме
                            </span>
                            <hr />
                        </div>
                        <div>
                            <div className={styles.countsReviewsContainer}>
                                <div>
                                    Всего <span>{total}</span>
                                </div>
                                <div>
                                    Позитивные <span>{totalPositiveReviews}</span>
                                </div>
                                <div>
                                    Негативные <span>{totalNegativeReviews}</span>
                                </div>
                                <div>
                                    Нейтральные <span>{totalNeutralReviews}</span>
                                </div>
                            </div>
                            <div className={styles.sorting}>
                                <span className={styles.text}>Сортировать:</span>
                                <Select
                                    defaultValue="DATE_ASC"
                                    style={{width: 300}}
                                    onChange={handleFilterChange}
                                    options={[
                                        {value: 'DATE_ASC', label: 'По возрастанию даты'},
                                        {value: 'DATE_DESC', label: 'По убыванию даты'},
                                        {value: 'USER_POSITIVE_RATING_ASC', label: 'По возрастанию позитивных рецензий'},
                                        {value: 'USER_POSITIVE_RATING_DESC', label: 'По убыванию позитивных рецензий'},
                                        {value: 'USER_NEGATIVE_RATING_ASC', label: 'По возрастанию негативных рецензий'},
                                        {value: 'USER_NEGATIVE_RATING_DESC', label: 'По убыванию негативных рецензий'},
                                    ]}
                                />
                            </div>
                            <Pagination
                                className={'pagination'}
                                current={reviewsPageId}
                                total={total}
                                defaultPageSize={20}
                                onChange={onChange}
                                showSizeChanger={false}
                            />
                            {items.map((review) => (
                                <MovieReview key={review.kinopoiskId} review={review} />
                            ))}
                            <Pagination
                                className={'pagination'}
                                current={reviewsPageId}
                                total={total}
                                defaultPageSize={20}
                                onChange={onChange}
                                showSizeChanger={false}
                            />
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};

export default Reviews;
