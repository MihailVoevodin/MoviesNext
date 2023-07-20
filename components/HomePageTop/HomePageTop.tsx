import styles from 'components/HomePageTop/HomePageTop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import Slider from 'react-slick';
import {IMovie} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param movies Массив фильмов.
 * @param link Ссылка на полный топ фильмов.
 * @param text Название топа фильмов.
 */
interface IProps {
    movies: IMovie[];
    link: string;
    text: string;
}

/**
 * Компонент отображения слайдера одного из топов на главной странице.
 */
export const HomePageTop: FC<IProps> = ({movies, link, text}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div className={styles.topsContainer}>
            <h3 className={styles.topsTitle}>
                <Link href={link}>{text}</Link>
            </h3>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <Link key={movie.filmId} href={T.Pages.MovieLink(movie.filmId)}>
                        <div className={styles.topsItem} style={{width: 230}}>
                            <div className={styles.topsInnerContent}>
                                <div className={styles.topsRating}>{movie.rating}</div>
                                <div>{movie.year}</div>
                                <div>{movie.countries[0].country}</div>
                                <div>{movie.filmLength}</div>
                            </div>
                            {movie.posterUrl && (
                                <Image className={styles.topsImage} src={movie.posterUrl} width={230} height={330} alt={movie.nameRu} />
                            )}
                            <div className={styles.topsText}>{movie.nameRu}</div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};
