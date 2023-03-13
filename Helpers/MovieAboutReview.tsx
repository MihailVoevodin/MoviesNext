import {MovieAboutReviewBgColor} from 'Helpers/MovieAboutReviewBgColor';
import {LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import Image from 'next/image';
import User from 'public/User.png';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import moment from 'moment';
import 'moment/locale/ru';
import {useEffect, useState} from 'react';
moment.locale('ru');

export const MovieAboutReview = ({review}: any) => {
    const [colors, setColors] = useState(['none', 'none'])

    useEffect(() => {
        if (review.type === 'POSITIVE') {
            setColors(['green', 'none'])
        }
        if (review.type === 'NEGATIVE') {
            setColors(['none', 'red'])
        }
    }, [])


    return (
        <div style={{backgroundColor: MovieAboutReviewBgColor(review.type)}} className={styles.review}>
            <div className={styles.reviewAbout}>
                <div className={styles.reviewAuthor}><Image src={User} alt={'.'} /> <span>{review.author}</span></div>
                <div>
                    <div>{moment(review.date).format('DD MMMM YYYY | hh:mm')}</div>
                    <div className={styles.reviewType}>
                        <span>Тип рецензии: </span>
                        <LikeOutlined style={{color: colors[0]}}/>
                        <DislikeOutlined style={{color: colors[1]}} />
                    </div>
                </div>
            </div>
            <div className={styles.reviewTitle}>{review.title}</div>
            <div className={styles.reviewDescription}>{review.description.replace(/<[^>]+>|&[^>]+;/g, '')}</div>
            <div  className={styles.reviewBenefits}>
                Полезная рецензия? Да / Нет
                <span>{review.positiveRating}</span>
                <span>/</span>
                <span>{review.negativeRating}</span>
            </div>
        </div>
    )
}