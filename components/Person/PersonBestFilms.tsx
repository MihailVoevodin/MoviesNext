import styles from 'components/Person/PersonAbout.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import {IPersonFilm} from 'Common/Models';

type Props = {
    films: IPersonFilm[];
};

export const PersonBestFilms: FC<Props> = ({films}) => {
    let filteredArray: string[] = [];

    const sortedBestFilms = films
        .filter((film) => {
            if (filteredArray.indexOf(film.nameRu) === -1) {
                filteredArray.push(film.nameRu);
                return true;
            }
            return false;
        })
        .sort((prev, next) => Number(next.rating) - Number(prev.rating));

    return (
        <ul className={styles.personBestFilmsList}>
            {sortedBestFilms.slice(0, 10).map((film) => {
                return (
                    <li className={styles.personBestFilmsItem} key={film.filmId}>
                        <Link href={`/movie/${film.filmId}`}>{film.nameRu}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
