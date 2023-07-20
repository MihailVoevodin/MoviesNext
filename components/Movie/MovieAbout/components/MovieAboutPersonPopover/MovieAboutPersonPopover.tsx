import styles from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {IMovieStaff} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param person Модель личности создателя фильма.
 */
interface IProps {
    person: IMovieStaff;
}

/**
 * Компонент выпадашки при наведении на персону.
 */
export const MovieAboutPersonPopover: FC<IProps> = ({person}) => {
    return (
        <div className={styles.personCard}>
            <Link href={T.Pages.Persons.link(person.staffId)}>
                <Image width={100} height={150} src={person.posterUrl} alt={person.nameRu} />
            </Link>
            <div className={styles.personContent}>
                <Link href={T.Pages.Persons.link(person.staffId)}>
                    <div className={styles.personName}>{person.nameRu}</div>
                    <div>{person.nameEn}</div>
                    <div className={styles.personDescription}>{person.description}</div>
                </Link>
            </div>
        </div>
    );
};
