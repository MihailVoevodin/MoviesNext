import {CountableTexts} from 'Common/Helpers';
import {IMovieDetails} from 'Common/Models';
import {T} from 'Common/Text';
import styles from 'components/Movie/MovieMainInfo/MovieMainInfo.module.scss';
import Link from 'next/link';
import {FC} from 'react';

type Props = {
    movie: IMovieDetails;
};

const MovieMainInfo: FC<Props> = ({movie}) => {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.movieMainInfo}>
                <div className={styles.movieName}>
                    {movie.nameRu} ({movie.serial ? movie.startYear - movie.endYear : movie.year})
                </div>
                <div className={styles.movieNameOriginal}>
                    {movie.nameOriginal && <span>{movie.nameOriginal}</span>}
                    <span>{movie.ratingAgeLimits.slice(3, 5)}+</span>
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
