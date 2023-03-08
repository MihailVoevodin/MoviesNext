import {ConfigProvider, Pagination, Select} from 'antd';
import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId, pageId} = context.params
    const {order} = context.query
    console.log(context)
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseReviews = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/reviews?page=${pageId}&order=${order}`);
    const movieName = responseFilm.data.nameRu
    const movieReviews = responseReviews.data;
    return {
        props: {movieReviews, movieName},
    }
}

const Reviews = ({movieReviews, movieName}: any) => {
    const router = useRouter();
    const {total, totalPositiveReviews, totalNegativeReviews, totalNeutralReviews, items} = movieReviews;
    const dispatch = useAppDispatch();
    const {reviewsPageId} = useAppSelector(state => state.films)
    const [filter, setFilter] = useState('DATE_ASC')

    useEffect(() => {
        void router.push(`/movie/${router.query.movieId}/reviews/${router.query.pageId}/?&order=${filter}`);
    }, [filter])


    const onChange = (pageId: number) => {
        dispatch(setReviewsPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/reviews/${pageId}/?&order=${filter}`);
    }

    const handleFilterChange = (value: string) => {
        setFilter(value)
    }

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
                <div className='movieDetailsPage'>
                    <div className='movieDetailsContainer'>
                        <div className='movieDetailsTitle'><span>Рецензии</span> / {movieName}</div>
                        <div className='backToMovieContainer'>
                            <hr/>
                            <span className='backToMovie' onClick={() => router.replace(`/movie/${router.query.movieId}`)}>Информация о фильме</span>
                            <hr/>
                        </div>
                        <div>
                            <div className={styles.countsContainer}>
                                <div>Всего <span>{total}</span></div>
                                <div>Позитивные <span>{totalPositiveReviews}</span></div>
                                <div>Негативные <span>{totalNegativeReviews}</span></div>
                                <div>Нейтральные <span>{totalNeutralReviews}</span></div>
                            </div>
                            <Select
                                defaultValue="DATE_ASC"
                                style={{ width: 300 }}
                                onChange={handleFilterChange}
                                options={[
                                    { value: 'DATE_ASC', label: 'По возрастанию даты' },
                                    { value: 'DATE_DESC', label: 'По убыванию даты' },
                                    { value: 'USER_POSITIVE_RATING_ASC', label: 'По возрастанию позитивных рецензий' },
                                    { value: 'USER_POSITIVE_RATING_DESC', label: 'По убыванию позитивных рецензий' },
                                    { value: 'USER_NEGATIVE_RATING_ASC', label: 'По возрастанию негативных рецензий' },
                                    { value: 'USER_NEGATIVE_RATING_DESC', label: 'По убыванию негативных рецензий' },
                                ]}
                            />
                            {items.map((review: any) => <div key={review.kinopoiskId}>{review.author}</div>)}
                            <Pagination className={'pagination'} current={reviewsPageId} total={total} defaultPageSize={20} onChange={onChange} showSizeChanger={false} />
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    )
}

export default Reviews