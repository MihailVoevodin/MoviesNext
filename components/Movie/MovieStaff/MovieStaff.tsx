import Image from 'next/image';
import Link from 'next/link';
import styles from 'pages/movie/[movieId]/staff/Staff.module.scss';
import {FC} from 'react';
import {EMovieStaff} from 'Common/Enums';
import {IMovieStaff} from 'Common/Models';
import {T} from 'Common/Text';

/**
 * @param movieStaff Массив создателей фильма.
 * @param type Профессия создателей.
 * @param text Текст профессии создателей.
 */
interface IProps {
    movieStaff: IMovieStaff[];
    type: EMovieStaff;
    text: string[];
}

/**
 * Компонент отображения создателей фильма по профессиям.
 */
export const MovieStaff: FC<IProps> = ({movieStaff, type, text}) => {
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
                            <Image className={styles.castImg} src={person.posterUrl} width={70} height={100} alt={person.nameRu} />
                            <div className={styles.castPersonAbout}>
                                <Link href={T.Pages.Persons.link(person.staffId)} className={styles.castPersonNameRu}>
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
