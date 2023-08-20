import {Rate} from 'antd';
import styles from 'components/Movie/MovieDetailsReview/MovieDetailsReview.module.scss';
import {FC, useEffect, useState} from 'react';
import {StarFilled} from '@ant-design/icons';
import {CountableTexts} from 'Common/Helpers';
import {IMovieDetails} from 'Common/Models';
import {T} from 'Common/Text';
import {setFilmRating} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

/**
 * @param movie Детальная модель фильма.
 */
interface IProps {
    movie: IMovieDetails;
}

/**
 * Компонент отображения оценок фильма по разным источникам.
 */
const MovieDetailsReview: FC<IProps> = ({movie}) => {
    const {filmRating} = useAppSelector((state) => state.films);
    console.log(filmRating);

    const dispatch = useAppDispatch();

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const myKey = localStorage.key(i);
            if (myKey === movie.nameRu) {
                console.log(myKey);
                dispatch(setFilmRating({[myKey]: localStorage.getItem(myKey)}));
            }
        }

        return () => {
            dispatch(setFilmRating({}));
        };
    }, [movie.nameRu]);

    const onChangeValue = (value: number) => {
        localStorage.setItem(movie.nameRu, value.toString());
        dispatch(setFilmRating({[movie.nameRu]: value.toString()}));
    };

    return (
        <div className={styles.movieReview}>
            <div>{movie.description}</div>
            <div className={styles.ratingContainer}>
                <span>Рейтинг фильма</span>
                <div className={styles.ratingContent}>
                    <Rate
                        style={{color: '#ff6200'}}
                        onChange={onChangeValue}
                        value={Number(filmRating[movie.nameRu]) || movie.ratingKinopoisk}
                        count={10}
                    />
                    {Object.prototype.hasOwnProperty.call(filmRating, movie.nameRu) && <div>Моя оценка {filmRating[movie.nameRu]}</div>}
                    <div className={styles.ratingNumbers}>
                        <div className={styles.ratingKinopoisk}>{movie.ratingKinopoisk}</div>
                        <div className={styles.ratingCount}>
                            <div>
                                {movie.ratingKinopoiskVoteCount} {CountableTexts(movie.ratingKinopoiskVoteCount, T.Movie.countable.grade)}
                            </div>
                            <div className={styles.ratingImdb}>
                                <span>IMDb: {movie.ratingImdb}</span> {movie.ratingImdbVoteCount}{' '}
                                {CountableTexts(movie.ratingImdbVoteCount, T.Movie.countable.grade)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.criticsContainer}>
                <div>
                    <span>Рейтинг кинокритиков в мире</span>
                    <div className={styles.criticsWorldInfo}>
                        <div className={styles.criticsVotePercent}>
                            {Math.floor(movie.ratingGoodReview)}%{' '}
                            <span>
                                {movie.ratingFilmCriticsVoteCount}{' '}
                                {CountableTexts(movie.ratingFilmCriticsVoteCount, T.Movie.countable.grade)}
                            </span>
                        </div>
                        <div>
                            <StarFilled /> {movie.ratingFilmCritics}
                        </div>
                    </div>
                </div>
                {movie.ratingRfCritics && (
                    <div className={styles.criticsRf}>
                        <span>В России</span>
                        <div className={styles.criticsVotePercent}>
                            {movie.ratingRfCritics}%{' '}
                            <span>
                                {movie.ratingRfCriticsVoteCount} {CountableTexts(movie.ratingRfCriticsVoteCount, T.Movie.countable.grade)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export {MovieDetailsReview};
