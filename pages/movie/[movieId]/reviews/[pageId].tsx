import {ConfigProvider, Pagination, Select} from 'antd';
import {HeadComponent} from 'components/Head/Head';
import {MovieReview} from 'components/Movie/MovieReview/MovieReview';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC, useEffect, useState} from 'react';
import {setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import mainStyles from 'styles/main.module.scss';
import {REVIEWS_SELECT_DICTIONARY} from 'Common/Consts';
import {EReviewsSelect} from 'Common/Enums';
import {IMovieReviews} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieReviews Массив рецензий фильма.
 */
interface IProps {
    movieName: string;
    movieReviews: IMovieReviews;
}

/**
 * @param movieId Идентификатор фильма.
 * @param pageId Номер страницы рецензий.
 */
interface Params extends ParsedUrlQuery {
    movieId: string;
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {movieId, pageId} = context.params!;
    const {order} = context.query;
    const responseFilm = await Services.getMovie(movieId);
    const responseReviews = await Services.getMovieReviews(movieId, pageId, order);
    const movieName = responseFilm.data.nameRu;
    const movieReviews = responseReviews.data;

    if (!movieReviews) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movieReviews, movieName},
    };
};

/**
 * Страница отображения рецензий на фильм.
 */
const Reviews: FC<IProps> = ({movieReviews, movieName}) => {
    const router = useRouter();
    const {total, totalPositiveReviews, totalNegativeReviews, totalNeutralReviews, items: reviews} = movieReviews;
    const dispatch = useAppDispatch();
    const {reviewsPageId} = useAppSelector((state) => state.films);
    const [order, setOrder] = useState<string>(EReviewsSelect.DATE_ASC);

    useEffect(() => {
        void router.push(T.Pages.Reviews.link(router.query.movieId, order, reviewsPageId));
    }, [order]);

    const onChange = (pageId: number) => {
        dispatch(setReviewsPageId(pageId));
        void router.replace(T.Pages.Reviews.link(router.query.movieId, order, pageId));
    };

    const handleFilterChange = (value: string) => {
        setOrder(value);
        dispatch(setReviewsPageId(1));
    };

    return (
        <>
            <HeadComponent title={T.Pages.Reviews.label} movieName={movieName} />
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
                            <span
                                className={mainStyles.backToMovie}
                                onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}
                            >
                                {T.Pages.backToMovie}
                            </span>
                            <hr />
                        </div>
                        {reviews.length > 0 ? (
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
                                {reviews.map((review) => (
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
                        ) : (
                            <div className={mainStyles.emptyPage}>{T.Pages.Reviews.empty}</div>
                        )}
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};

export default Reviews;
