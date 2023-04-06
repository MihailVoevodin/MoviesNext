import Image from 'next/image';
import Link from 'next/link';
import styles from 'pages/movie/[movieId]/cast/Cast.module.scss';

export const MovieAboutCast = ({array, type, text}: any) => {
    const filteredArray = array.filter((profession: any) => profession.professionKey === type);

    if (filteredArray.length === 0) {
        return null;
    }

    return (
        <div className={styles.castTypeContainer}>
            <div className={styles.castTypeTitle}>{filteredArray.length > 1 ? text[1] : text[0]}</div>
            <ol className={styles.castTypeList}>
                {filteredArray.map((person: any) => {
                    return (
                        <li className={styles.castPerson} key={person.staffId}>
                            <Image src={person.posterUrl} width={70} height={100} alt="." />
                            <div className={styles.castPersonAbout}>
                                <Link href={`/name/${person.staffId}`} className={styles.castPersonNameRu}>
                                    {person.nameRu}
                                </Link>
                                <div className={styles.castPersonNameEn}>{person.nameEn}</div>
                                <div className={styles.castPersonDescription}>{person.description}</div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
