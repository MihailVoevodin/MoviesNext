import {LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import {Regulars} from 'Common/Consts';
import {EReviewsType} from 'Common/Enums';
import {MovieReviewBgColor} from 'Common/Helpers';
import {IMovieReview} from 'Common/Models';
import {T} from 'Common/Text';
import moment from 'moment';
import Image from 'next/image';
import styles from 'pages/movie/[movieId]/reviews/Reviews.module.scss';
import User from 'public/User.png';
import 'moment/locale/ru';
import {FC, useEffect, useState} from 'react';
moment.locale('ru');

type Props = {
    review: IMovieReview;
};

export const MovieReview: FC<Props> = ({review}) => {
    const [colors, setColors] = useState<string[]>(['none', 'none']);

    useEffect(() => {
        if (review.type === EReviewsType.POSITIVE) {
            setColors(['green', 'none']);
        }
        if (review.type === EReviewsType.NEGATIVE) {
            setColors(['none', 'red']);
        }
    }, []);

    return (
        <div style={{backgroundColor: MovieReviewBgColor(review.type)}} className={styles.review}>
            <div className={styles.reviewAbout}>
                <div className={styles.reviewAuthor}>
                    <Image src={User} alt={'.'} /> <span>{review.author}</span>
                </div>
                <div>
                    <div>{moment(review.date).format(T.dateAndTime)}</div>
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
