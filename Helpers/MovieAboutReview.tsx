import {MovieAboutReviewBgColor} from 'Helpers/MovieAboutReviewBgColor';
import Image from 'next/image';
import User from 'public/User.png';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const MovieAboutReview = ({review}: any) => {

    return (
        <div style={{backgroundColor: MovieAboutReviewBgColor(review.type)}} className={styles.review}>
            <div className={styles.reviewAbout}>
                <div className={styles.reviewAuthor}><Image src={User} alt={'.'} /> <span>{review.author}</span></div>
                <div>{moment(review.date).format('DD MMMM YYYY | hh:mm')}</div>
            </div>
            <div className={styles.reviewTitle}>{review.title}</div>
            <div className={styles.reviewDescription}>{review.description.replace(/<[^>]+>|&[^>]+;/g, '')}</div>
        </div>
    )
}