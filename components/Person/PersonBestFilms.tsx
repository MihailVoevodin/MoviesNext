import {IPersonFilm} from 'Common/Models';
import styles from 'components/Person/PersonAbout.module.scss';
import Link from 'next/link';
import React from 'react';

type Props = {
    films: IPersonFilm[];
};

export const PersonBestFilms: React.FC<Props> = ({films}) => {
    let arr: IPersonFilm[] = [];

    //TODO: перенести в сервисы и другие похожие функции
    function itemCheck(item: any) {
        if (arr.indexOf(item.nameRu) === -1) {
            if (item.general) {
                arr.push(item.nameRu);
                return true;
            } else {
                arr.push(item.nameRu);
                return true;
            }
        }
    }

    const filteredFilms = films.filter((film) => itemCheck(film)).sort((prev, next) => Number(next.rating) - Number(prev.rating));

    console.log(filteredFilms);

    return (
        <ul className={styles.personBestFilmsList}>
            {filteredFilms.slice(0, 5).map((film) => {
                return (
                    <li className={styles.personBestFilmsItem} key={film.filmId}>
                        <Link href={`/movie/${film.filmId}`}>{film.nameRu}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
