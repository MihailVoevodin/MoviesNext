import {Popover} from 'antd';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import Link from 'next/link';
import {FC} from 'react';
import {IMovieStaff} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param movieStaff Массив создателей фильма.
 * @param professionKey Ключ профессии личности.
 */
interface IProps {
    movieStaff: IMovieStaff[];
    professionKey: string;
}

/**
 * Компонент отображения списка актеров фильма.
 */
export const MovieAboutActors: FC<IProps> = ({movieStaff, professionKey}) => {
    const filteredMovieStaff = movieStaff.filter((actor) => actor.professionKey == professionKey);

    return (
        <ul className={styles.actorsList}>
            {filteredMovieStaff.slice(0, 10).map((actor) => {
                return (
                    <li key={actor.staffId}>
                        <Link href={T.Pages.Persons.link(actor.staffId)}>
                            <Popover content={<MovieAboutPersonPopover person={actor} />}>{actor.nameRu}</Popover>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
