import styles from "components/HomePageTop/HomePageTop.module.scss";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { FC } from "react";
import { IMovie } from "Common/Models";
import { T } from "Common/Text";

interface IProps {
  movies: IMovie[];
  link: string;
  text: string;
}


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
      <h3 className={styles.topsTitle}><Link href={link}>{text}</Link></h3>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Link href={`/movie/${movie.filmId}`}>
            <div className={styles.topsItem} key={movie.filmId} style={{width: 230}}>
              <div className={styles.topsInnerContent}>
                <div className={styles.topsRating}>{movie.rating}</div>
                <div>{movie.year}</div>
                <div>{movie.countries[0].country}</div>
                <div>{movie.filmLength}</div>
              </div>
              {movie.posterUrl && <Image className={styles.topsImage} src={movie.posterUrl} width={230} height={330} alt={movie.nameRu} />}
              <div className={styles.topsText}>{movie.nameRu}</div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}