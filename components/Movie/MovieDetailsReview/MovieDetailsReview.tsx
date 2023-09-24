import {Rate} from 'antd';
import styles from 'components/Movie/MovieDetailsReview/MovieDetailsReview.module.scss';
import {FC, useEffect} from 'react';
import {selectFilmRating} from 'store/films/filmsSelectors';
import {setFilmRating} from 'store/films/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {StarFilled} from '@ant-design/icons';
import {CountableTexts, CountRatingBackgroundColor} from 'Common/Helpers';
import {IMovieDetails} from 'Common/Models';
import {T} from 'Common/Text';

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
    const dispatch = useAppDispatch();
    const filmRating = useAppSelector(selectFilmRating);

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const myKey = localStorage.key(i);
            if (myKey === (movie.nameRu || movie.nameOriginal)) {
                console.log(myKey);
                dispatch(setFilmRating({[myKey]: localStorage.getItem(myKey)}));
            }
        }

        return () => {
            dispatch(setFilmRating({}));
        };
    }, [movie.nameRu]);

    const onChangeFilmRating = (value: number) => {
        localStorage.setItem(movie.nameRu || movie.nameOriginal, value.toString());
        dispatch(setFilmRating({[movie.nameRu || movie.nameOriginal]: value.toString()}));
    };

    const onDeleteFilmRating = () => {
        localStorage.removeItem(movie.nameRu || movie.nameOriginal);
        dispatch(setFilmRating({}));
    };

    return (
        <div className={styles.movieReview}>
            <div>{movie.description}</div>
            <div className={styles.ratingContainer}>
                <span>Рейтинг фильма</span>
                <div className={styles.ratingContent}>
                    <Rate
                        style={{color: '#ff6200'}}
                        onChange={onChangeFilmRating}
                        value={Number(filmRating[movie.nameRu]) || movie.ratingKinopoisk}
                        count={10}
                    />
                    <div className={styles.ratingNumbers}>
                        <div style={{color: CountRatingBackgroundColor(movie.ratingKinopoisk)}} className={styles.ratingKinopoisk}>
                            {movie.ratingKinopoisk}
                        </div>
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
                {Object.prototype.hasOwnProperty.call(filmRating, movie.nameRu) && (
                    <div className={styles.myRating}>
                        <div>Моя оценка</div>
                        <div
                            style={{backgroundColor: CountRatingBackgroundColor(Number(filmRating[movie.nameRu]))}}
                            className={styles.rating}
                        >
                            {filmRating[movie.nameRu]}
                        </div>
                        <button onClick={onDeleteFilmRating}>Удалить</button>
                    </div>
                )}
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
