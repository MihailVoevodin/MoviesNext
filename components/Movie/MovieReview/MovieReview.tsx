import dayjs from 'dayjs';
import Image from 'next/image';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import User from 'public/User.png';
import {FC, useEffect, useState} from 'react';
import {LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import {Regulars} from 'Common/Consts';
import {MovieReviewBgColor, ReviewColors} from 'Common/Helpers';
import {IMovieReview} from 'Common/Models';
import {T} from 'Common/Text';
import 'dayjs/locale/ru';
dayjs.locale('ru');

/**
 * @param review Детальная модель рецензии.
 */
interface IProps {
    review: IMovieReview;
}

/**
 * Компонент отображения рецензии.
 */
export const MovieReview: FC<IProps> = ({review}) => {
    const [colors, setColors] = useState<string[]>(['none', 'none']);

    useEffect(() => {
        ReviewColors(review.type, setColors);
    }, []);

    return (
        <div style={{backgroundColor: MovieReviewBgColor(review.type)}} className={styles.review}>
            <div className={styles.reviewAbout}>
                <div className={styles.reviewAuthor}>
                    <Image src={User} alt={'user'} /> <span>{review.author}</span>
                </div>
                <div>
                    <div>{dayjs(review.date).format(T.dateAndTime)}</div>
                    <div className={styles.reviewType}>
                        <span>Тип рецензии: </span>
                        <LikeOutlined style={{color: colors[0]}} />
                        <DislikeOutlined style={{color: colors[1]}} />
                    </div>
                </div>
            </div>
            <div className={styles.reviewTitle}>{review.title}</div>
            <div className={styles.reviewDescription}>{review.description.replace(Regulars.fixTagsInText, '')}</div>
            <div className={styles.reviewBenefits}>
                Полезная рецензия? Да / Нет
                <span>{review.positiveRating}</span>
                <span>/</span>
                <span>{review.negativeRating}</span>
            </div>
        </div>
    );
};
