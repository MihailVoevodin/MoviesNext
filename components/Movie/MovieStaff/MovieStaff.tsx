import {EMovieStaff} from 'Common/Enums';
import {IMovieStaff} from 'Common/Models';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'pages/movie/[movieId]/staff/Staff.module.scss';
import React from 'react';

type Props = {
    movieStaff: IMovieStaff[];
    type: EMovieStaff;
    text: string[];
};

export const MovieStaff: React.FC<Props> = ({movieStaff, type, text}) => {
    const filteredMovieStaff = movieStaff.filter((person) => person.professionKey === type);

    if (filteredMovieStaff.length === 0) {
        return null;
    }

    return (
        <div className={styles.castTypeContainer}>
            <div className={styles.castTypeTitle}>{filteredMovieStaff.length > 1 ? text[1] : text[0]}</div>
            <ol className={styles.castTypeList}>
                {filteredMovieStaff.map((person) => {
                    return (
                        <li className={styles.castPerson} key={person.staffId}>
                            <Image src={person.posterUrl} width={70} height={100} alt={person.nameRu} />
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
