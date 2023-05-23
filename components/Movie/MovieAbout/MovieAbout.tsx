import {Tooltip} from 'antd';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutActors} from 'components/Movie/MovieAbout/components/MovieAboutActors';
import {MovieAboutBox} from 'components/Movie/MovieAbout/components/MovieAboutBox';
import {MovieAboutStaff} from 'components/Movie/MovieAbout/components/MovieAboutStaff';
import Link from 'next/link';
import {FC} from 'react';
import {RightOutlined} from '@ant-design/icons';
import {BOX_DICTIONARY, MAIN_STAFF_DICTIONARY} from 'Common/Consts';
import {EMovieStaff} from 'Common/Enums';
import {CountableTexts, MpaaTooltipText} from 'Common/Helpers';
import {IMovieBox, IMovieDetails, IMovieStaff} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param movie Детальная модель фильма.
 * @param movieBox Массив бюджета фильма.
 * @param movieStaff Массив создателей фильма.
 */
interface IProps {
    movie: IMovieDetails;
    movieBox: IMovieBox[];
    movieStaff: IMovieStaff[];
}

/**
 * Компонент отображения информации о фильме.
 */
const MovieAbout: FC<IProps> = ({movie, movieStaff, movieBox}) => {
    const numberOfActors = movieStaff.filter((person) => person.professionKey == EMovieStaff.ACTOR).length;

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <h3>{movie.serial ? T.Movie.movieTitle : T.Movie.serialTitle}</h3>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.year}</div>
                    <div>
                        {movie.year}{' '}
                        {movie.serial && (
                            <span>
                                {movie.endYear - movie.startYear}{' '}
                                {CountableTexts(movie.endYear - movie.startYear, T.Movie.countable.seasons)}
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.country}</div>
                    <div className={styles.aboutItemContent}>
                        {movie.countries.map((item, id: number) => (
                            <span key={id}>
                                {item.country}
                                {id !== movie.countries.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.genre}</div>
                    <div className={styles.aboutItemContent}>
                        {movie.genres.map((item, id: number) => (
                            <span key={id}>
                                {item.genre}
                                {id !== movie.genres.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.slogan}</div>
                    <div className={styles.aboutItemContent}>
                        {movie.slogan ? <span>&#171;{movie.slogan}&#187;</span> : <span>&#8212;</span>}
                    </div>
                </div>
                {MAIN_STAFF_DICTIONARY.map((person) => (
                    <MovieAboutStaff key={person.type} movieStaff={movieStaff} type={person.type} text={person.text} />
                ))}
                {BOX_DICTIONARY.map((box) => (
                    <MovieAboutBox key={box.type} movieBox={movieBox} type={box.type} text={box.text} />
                ))}
                {movie.ratingAgeLimits && <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.age}</div>
                    <div className={styles.aboutItemBorder}>{movie.ratingAgeLimits.slice(3, 5)}+</div>
                </div>}
                {movie.ratingMpaa && (
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>{T.Movie.ratingMPAA}</div>
                        <div className={styles.aboutItemBorder}>
                            <Tooltip
                                color="white"
                                overlayInnerStyle={{color: '#000'}}
                                placement="right"
                                title={MpaaTooltipText(movie.ratingMpaa)}
                            >
                                {movie.ratingMpaa.toUpperCase()}
                            </Tooltip>
                        </div>
                    </div>
                )}
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.duration}</div>
                    <div>
                        {movie.filmLength} мин. / {Math.floor(movie.filmLength / 60)}:{movie.filmLength % 60 < 10 && 0}
                        {movie.filmLength % 60}
                    </div>
                </div>
            </div>
            <div className={styles.actors}>
                <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Staff.route}`}>
                    <h3>
                        {T.Movie.castTitle} <RightOutlined />
                    </h3>
                </Link>
                <MovieAboutActors movieStaff={movieStaff} professionKey={EMovieStaff.ACTOR} />
                <div className={styles.actorsCount}>
                    <Link href={`/movie/${movie.kinopoiskId}/${T.Pages.Staff.route}`}>
                        {numberOfActors} {CountableTexts(numberOfActors, T.Movie.countable.actors)}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {MovieAbout};
