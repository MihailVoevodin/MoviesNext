import {IPersonFilm} from 'Common/Models';
import Link from 'next/link';
import React from 'react';

type Props = {
    films: IPersonFilm[];
};

export const PersonBestFilms: React.FC<Props> = ({films}) => {
    let arr: IPersonFilm[] = [];

    function itemCheck(item: any) {
        if (arr.indexOf(item.nameRu) === -1) {
            if (item.general) {
                arr.push(item.nameRu);
                return true;
            }
        }
        return false;
    }

    const filteredFilms = films.filter((film) => itemCheck(film)).sort((prev, next) => Number(next.rating) - Number(prev.rating));

    console.log(filteredFilms);

    return (
        <ul>
            {filteredFilms.slice(0, 5).map((film) => {
                return (
                    <li key={film.filmId}>
                        <Link href={`/movie/${film.filmId}`}>{film.nameRu}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
