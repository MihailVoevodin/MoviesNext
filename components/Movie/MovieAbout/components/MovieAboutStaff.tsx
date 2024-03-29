import {Popover} from 'antd';
import {T} from 'Common/Text';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC} from 'react';
import {EMovieMainStaff} from 'Common/Enums';
import {IMovieStaff} from 'Common/Models';

/**
 * @param movieStaff Массив создателей фильма.
 * @param type Тип профессии создателей.
 * @param text Текст названия профессии создателей.
 */
interface IProps {
    movieStaff: IMovieStaff[];
    type: EMovieMainStaff;
    text: string;
}

/**
 * Компонент отображения создателей фильма по типам.
 */
export const MovieAboutStaff: FC<IProps> = ({movieStaff, type, text}) => {
    const router = useRouter();

    const filteredMovieStaff = movieStaff.filter((person) => person.professionKey == type);

    return (
        <>
            {filteredMovieStaff.length > 0 && (
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredMovieStaff.slice(0, 3).map((person, id: number) => (
                            <Link key={id} href={T.Pages.Persons.link(person.staffId)}>
                                <Popover content={<MovieAboutPersonPopover person={person} />}>{person.nameRu || person.nameEn}</Popover>
                                {id !== filteredMovieStaff.length - 1 ? ', ' : ''}
                            </Link>
                        ))}
                        {filteredMovieStaff.length > 3 ? (
                            <span>
                                <Link href={T.Pages.Staff.link(router.query.movieId)}> ...</Link>
                            </span>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
};
