import {Popover} from 'antd';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import Link from 'next/link';

export const MovieAboutActors = ({array, professionKey}: any) => {
    const filteredArray = array.filter((a: any) => a.professionKey == professionKey);

    return (
        <ul className={styles.actorsList}>
            {filteredArray.slice(0, 10).map((actor: any) => {
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
