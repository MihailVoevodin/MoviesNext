import {ConfigProvider, Pagination} from 'antd';
import axios from 'axios';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {setReviewsPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {movieId, pageId} = context.params
    console.log(context)
    const responseFilm = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`);
    const responseReviews = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/reviews?page=${pageId}&order=DATE_ASC`);
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

    useEffect(() => {

    })


    const onChange = (pageId: number) => {
        dispatch(setReviewsPageId(pageId));
        void router.replace(`/movie/${router.query.movieId}/reviews/${pageId}`);
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