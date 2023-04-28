import {IMovieStaff} from 'Common/Models';
import styles from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

type Props = {
    person: IMovieStaff;
};

export const MovieAboutPersonPopover: FC<Props> = ({person}) => {
    return (
        <div className={styles.personCard}>
            <Link href={`/name/${person.staffId}`}>
                <Image width={100} height={150} src={person.posterUrl} alt={person.nameRu} />
            </Link>
            <div className={styles.personContent}>
                <Link href={`/name/${person.staffId}`}>
                    <div className={styles.personName}>{person.nameRu}</div>
                    <div>{person.nameEn}</div>
                    <div className={styles.personDescription}>{person.description}</div>
                </Link>
            </div>
        </div>
    );
};
