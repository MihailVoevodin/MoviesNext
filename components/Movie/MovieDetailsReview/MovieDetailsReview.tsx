import {Rate} from 'antd';
import styles from 'components/Movie/MovieDetailsReview/MovieDetailsReview.module.scss';
import {FC} from 'react';
import {StarFilled} from '@ant-design/icons';
import {CountableTexts} from 'Common/Helpers';
import {IMovieDetails} from 'Common/Models';
import {T} from 'Common/Text';

type Props = {
    movie: IMovieDetails;
};

const MovieDetailsReview: FC<Props> = ({movie}) => {
    return (
        <div className={styles.movieReview}>
            <div>{movie.description}</div>
            <div className={styles.ratingContainer}>
                <span>Рейтинг фильма</span>
                <div className={styles.ratingContent}>
                    <Rate style={{color: '#ff6200'}} defaultValue={Math.round(movie.ratingKinopoisk)} count={10} />
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
