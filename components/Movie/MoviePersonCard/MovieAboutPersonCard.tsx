import Image from 'next/image';
import styles from 'components/Movie/MoviePersonCard/MovieAboutPersonCard.module.scss';
import Link from 'next/link';

export const MovieAboutPersonCard = ({person}: any) => {
    return (
        <div className={styles.personCard}>
            <Link href={`/name/${person.staffId}`}>
                <Image width={70} height={100} src={person.posterUrl} alt='.' />
            </Link>
            <div>
                <Link href={`/name/${person.staffId}`}>
                    <div>{person.nameRu}</div>
                    <div>{person.nameEn}</div>
                    <div>{person.description}</div>
                </Link>
            </div>
        </div>
    )
}
