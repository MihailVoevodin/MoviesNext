import {BOX_DICTIONARY, MAIN_STAFF_DICTIONARY} from 'Common/Consts';
import {EMovieStaff} from 'Common/Enums';
import {IMovieBox, IMovieDetails, IMovieStaff} from 'Common/Models';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {RightOutlined} from '@ant-design/icons';
import {MovieAboutActors} from 'components/Movie/MovieAbout/components/MovieAboutActors';
import {MovieAboutStaff} from 'components/Movie/MovieAbout/components/MovieAboutStaff';
import {MovieAboutBox} from 'components/Movie/MovieAbout/components/MovieAboutBox';
import Link from 'next/link';
import {T} from 'Common/Text';
import React from 'react';

type Props = {
    movie: IMovieDetails;
    movieBox: IMovieBox;
    movieStaff: IMovieStaff[];
};

const MovieAbout: React.FC<Props> = ({movie, movieStaff, movieBox}) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <h3>{movie.serial ? T.Movie.movieTitle : T.Movie.serialTitle}</h3>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.year}</div>
                    <div>
                        {movie.year} {movie.serial && movie.endYear - movie.startYear + 'сезонов'}
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
                    <MovieAboutBox key={box.type} movieBox={movieBox.items} type={box.type} text={box.text} />
                ))}
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{T.Movie.age}</div>
                    <div className={styles.aboutItemBorder}>{movie.ratingAgeLimits.slice(3, 5)}+</div>
                </div>
                {movie.ratingMpaa && (
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>{T.Movie.ratingMPAA}</div>
                        <div className={styles.aboutItemBorder}>{movie.ratingMpaa.toUpperCase()}</div>
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
                        {movieStaff.filter((person) => person.professionKey == EMovieStaff.ACTOR).length} актеров
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {MovieAbout};
