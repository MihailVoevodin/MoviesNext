import styles from 'components/Person/PersonAbout.module.scss';
import {PersonBestMovies} from 'components/Person/PersonBestMovies';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import Link from 'next/link';
import {FC} from 'react';
import {IPerson} from 'Common/Models';
import {T} from 'Common/Text';
dayjs.locale('ru');
dayjs.extend(relativeTime);

/**
 * @param person Модель личности.
 */
interface IProps {
    person: IPerson;
}

/**
 * Компонент отображения детальной информации о личности.
 */
export const PersonAbout: FC<IProps> = ({person}) => {
    return (
        <>
            <div className={styles.personNameRu}>{person.nameRu}</div>
            <div className={styles.personNameOriginal}>{person.nameEn}</div>
            <div className={styles.kinopoiskUrl}>
                <Link href={person.webUrl}>Открыть на Кинопоиске</Link>
            </div>
            <div className={styles.personAboutContainer}>
                <div>
                    <h3 className={styles.personAboutTitle}>{T.Person.title}</h3>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.Person.profession}</div>
                        <div>{person.profession}</div>
                    </div>
                    {person.growth !== 0 && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>{T.Person.growth}</div>
                            <div>{person.growth / 100} м</div>
                        </div>
                    )}
                    {person.birthday && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>{T.Person.birthday}</div>
                            <div>
                                {dayjs(person.birthday).format(T.date)} {!person.death && `• ${dayjs(person.birthday).fromNow(true)}`}
                            </div>
                        </div>
                    )}
                    {person.birthplace && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>{T.Person.birthPlace}</div>
                            <div>{person.birthplace}</div>
                        </div>
                    )}
                    {person.death && (
                        <>
                            <div className={styles.personItem}>
                                <div className={styles.personItemText}>{T.Person.death}</div>
                                <div>
                                    {dayjs(person.death).format(T.date)} • {dayjs(person.death).from(person.birthday, true)}
                                </div>
                            </div>
                            <div className={styles.personItem}>
                                <div className={styles.personItemText}>{T.Person.deathPlace}</div>
                                <div>{person.deathplace}</div>
                            </div>
                        </>
                    )}
                    {person.spouses.length > 0 && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>
                                {person.spouses.length === 1
                                    ? person.sex === 'MALE'
                                        ? T.Person.Spouses.female
                                        : T.Person.Spouses.male
                                    : T.Person.Spouses.plural}
                            </div>
                            <div>
                                {person.spouses.map((spouse) => (
                                    <div key={spouse.personId}>
                                        {spouse.name} {spouse.divorced && spouse.divorcedReason}{' '}
                                        {spouse.children > 0 &&
                                            `(${spouse.children} ${
                                                spouse.children === 1 ? T.Person.Spouses.childs.single : T.Person.Spouses.childs.plural
                                            })`}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.Person.filmsCount}</div>
                        <div>{person.films.length}</div>
                    </div>
                </div>
                <div>
                    <h3 className={styles.personAboutTitle}>{T.Person.bestFilms}</h3>
                    <PersonBestMovies films={person.films} />
                </div>
            </div>
        </>
    );
};
