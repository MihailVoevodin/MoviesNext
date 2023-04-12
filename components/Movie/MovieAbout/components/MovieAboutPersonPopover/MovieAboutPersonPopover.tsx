import Image from 'next/image';
import styles from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover.module.scss';
import Link from 'next/link';

export const MovieAboutPersonPopover = ({person}: any) => {
    return (
        <div className={styles.personCard}>
            <Link href={`/name/${person.staffId}`}>
                <Image width={100} height={150} src={person.posterUrl} alt="." />
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
