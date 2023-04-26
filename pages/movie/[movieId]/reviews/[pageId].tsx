import {ConfigProvider, Pagination, Select} from 'antd';
import {REVIEWS_SELECT_DICTIONARY} from 'Common/Consts';
import {EReviewsSelect} from 'Common/Enums';
import {IMovieReviews} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';
import {MovieReview} from 'components/Movie/MovieReview/MovieReview';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import {ParsedUrlQuery} from 'querystring';
import React, {useEffect, useState} from 'react';
import {setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import mainStyles from 'styles/main.module.scss';

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
    const responseFilm = await Services.getMovie(movieId);
    const responseReviews = await Services.getMovieReviews(movieId, pageId, order);
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
        void router.push(`/movie/${router.query.movieId}/${T.Pages.Reviews.route}/${reviewsPageId}/?&order=${filter}`);
    }, [filter]);

    const onChange = (pageId: number) => {
        dispatch(setReviewsPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/${T.Pages.Reviews.route}/${pageId}/?&order=${filter}`);
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
                <div className={mainStyles.movieDetailsPage}>
                    <div className={mainStyles.movieDetailsContainer}>
                        <div className={mainStyles.movieDetailsTitle}>
                            <span>{T.Pages.Reviews.label}</span> / {movieName}
                        </div>
                        <div className={mainStyles.backToMovieContainer}>
                            <hr />
                            <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                                {T.Pages.backToMovie}
                            </span>
                            <hr />
                        </div>
                        <div>
                            <div className={styles.countsReviewsContainer}>
                                <div>
                                    <>
                                        {T.Movie.Reviews.Types.all} <span>{total}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Movie.Reviews.Types.positive} <span>{totalPositiveReviews}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Movie.Reviews.Types.negative} <span>{totalNegativeReviews}</span>
                                    </>
                                </div>
                                <div>
                                    <>
                                        {T.Movie.Reviews.Types.neutral} <span>{totalNeutralReviews}</span>
                                    </>
                                </div>
                            </div>
                            <div className={styles.sorting}>
                                <span className={styles.text}>{T.Movie.Reviews.SortingSelect.label}</span>
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
