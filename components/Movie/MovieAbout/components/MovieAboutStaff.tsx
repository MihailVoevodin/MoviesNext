import {Popover} from 'antd';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import Link from 'next/link';
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
    const filteredMovieStaff = movieStaff.filter((person) => person.professionKey == type);

    return (
        <>
            {filteredMovieStaff.length > 0 && (
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredMovieStaff.slice(0, 3).map((person, id: number) => (
                            <Link key={id} href={`/name/${person.staffId}`}>
                                <Popover content={<MovieAboutPersonPopover person={person} />}>{person.nameRu}</Popover>
                                {id !== filteredMovieStaff.length - 1 ? ', ' : ''}
                            </Link>
                        ))}
                        {filteredMovieStaff.length > 3 ? <span> ...</span> : null}
                    </div>
                </div>
            )}
        </>
    );
};
