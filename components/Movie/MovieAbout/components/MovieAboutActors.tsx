import {Popover} from 'antd';
import {IMovieStaff} from 'Common/Models';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import Link from 'next/link';
import {FC} from 'react';

type Props = {
    movieStaff: IMovieStaff[];
    professionKey: string;
};

export const MovieAboutActors: FC<Props> = ({movieStaff, professionKey}) => {
    const filteredMovieStaff = movieStaff.filter((actor) => actor.professionKey == professionKey);

    return (
        <ul className={styles.actorsList}>
            {filteredMovieStaff.slice(0, 10).map((actor) => {
                return (
                    <li key={actor.staffId}>
                        <Link href={`/name/${actor.staffId}`}>
                            <Popover content={<MovieAboutPersonPopover person={actor} />}>{actor.nameRu}</Popover>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
