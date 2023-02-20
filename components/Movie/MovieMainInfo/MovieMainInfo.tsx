import styles from 'components/Movie/MovieMainInfo/MovieMainInfo.module.scss';


const MovieMainInfo = ({movie}: any) => {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.movieMainInfo}>
                <div className={styles.movieName}>{movie.nameRu} ({movie.year})</div>
                <div className={styles.movieNameOriginal}>
                    <span>{movie.nameOriginal}</span>
                    <span>{movie.ratingAgeLimits.slice(3, 5)}+</span>
                </div>
                <p className={styles.movieDescription}>{movie.shortDescription}</p>
                <div className={styles.kinopoiskUrl}><a href={movie.webUrl}>Открыть на Кинопоиске</a></div>
            </div>
            <div className={styles.movieRatingInfo}>
                <div className={styles.ratingKinopoisk}>
                    {movie.ratingKinopoisk}
                </div>
                <div className={styles.voteCount}>{movie.ratingKinopoiskVoteCount} оценок</div>
            </div>
        </div>
    )
}

export {MovieMainInfo};
