import {ConfigProvider, Pagination, Select} from 'antd';
import axios from 'axios';
import {REVIEWS_SELECT_DICTIONARY, reviewsTheme} from 'Common/Consts';
import {EReviewsSelect} from 'Common/Enums';
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
import mainStyles from 'styles/main.module.scss';
import {T} from 'Common/Text';

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
    const [filter, setFilter] = useState<string>(EReviewsSelect.DATE_ASC);

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
                <title>
                    {T.Pages.Reviews.label}: {movieName}
                </title>
            </Head>
            <ConfigProvider theme={reviewsTheme}>
                <div className={mainStyles.movieDetailsPage}>
                    <div className={mainStyles.movieDetailsContainer}>
                        <div className={mainStyles.movieDetailsTitle}>
                            <span>{T.Pages.Reviews.label}</span> / {movieName}
                        </div>
                        <div className={mainStyles.backToMovieContainer}>
                            <hr />
                            <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                                {T.BackToMovie.label}
                            </span>
                            <hr />
                        </div>
                        <div>
                            <div className={styles.countsReviewsContainer}>
                                <div>
                                    <>
                                        {T.Reviews.Types.All} <span>{total}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Reviews.Types.Positive} <span>{totalPositiveReviews}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Reviews.Types.Negative} <span>{totalNegativeReviews}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Reviews.Types.Neutral} <span>{totalNeutralReviews}</span>
                                    </>
                                </div>
                            </div>
                            <div className={styles.sorting}>
                                <span className={styles.text}>Сортировать:</span>
                                <Select
                                    defaultValue={REVIEWS_SELECT_DICTIONARY[0].value}
                                    style={{width: 300}}
                                    onChange={handleFilterChange}
                                    options={REVIEWS_SELECT_DICTIONARY}
                                />
                            </div>
                            <Pagination
                                className={mainStyles.pagination}
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
                                className={mainStyles.pagination}
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
