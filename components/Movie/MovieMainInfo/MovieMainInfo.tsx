import styles from 'components/Movie/MovieMainInfo/MovieMainInfo.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import {CountableTexts} from 'Common/Helpers';
import {IMovieDetails} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param movie Детальная модель фильма.
 */
interface IProps {
    movie: IMovieDetails;
}

/**
 * Компонент отображения главной информации о фильме.
 */
const MovieMainInfo: FC<IProps> = ({movie}) => {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.movieMainInfo}>
                <div className={styles.movieName}>
                    {movie.nameRu}{' '}
                    <span>
                        (
                        {movie.serial && movie.endYear - movie.startYear !== 0
                            ? `сериал ${movie.startYear} - ${movie.endYear || '...'}`
                            : movie.year}
                        )
                    </span>
                </div>
                <div className={styles.movieNameOriginal}>
                    {movie.nameOriginal && <span>{movie.nameOriginal}</span>}
                    <span>{movie.ratingAgeLimits && movie.ratingAgeLimits.slice(3, 5) + '+'}</span>
                </div>
                <p className={styles.movieDescription}>{movie.shortDescription}</p>
                <div className={styles.kinopoiskUrl}>
                    <Link href={movie.webUrl}>Открыть на Кинопоиске</Link>
                </div>
            </div>
            <div className={styles.movieRatingInfo}>
                <div className={styles.ratingKinopoisk}>{movie.ratingKinopoisk}</div>
                <div className={styles.voteCount}>
                    {movie.ratingKinopoiskVoteCount} {CountableTexts(movie.ratingKinopoiskVoteCount, T.Movie.countable.grade)}
                </div>
            </div>
        </div>
    );
};

export {MovieMainInfo};
