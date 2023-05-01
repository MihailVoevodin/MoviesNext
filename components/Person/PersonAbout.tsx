import styles from 'components/Person/PersonAbout.module.scss';
import {PersonBestFilms} from 'components/Person/PersonBestFilms';
import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';
import {FC} from 'react';
import {IPerson} from 'Common/Models';
import {T} from 'Common/Text';
moment.locale('ru');

type Props = {
    person: IPerson;
};

export const PersonAbout: FC<Props> = ({person}) => {
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
                                {moment(person.birthday).format(T.date)} {!person.death && `• ${moment(person.birthday).fromNow(true)}`}
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
                                    {moment(person.death).format(T.date)} • {moment(person.death).from(person.birthday, true)}
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
                    <PersonBestFilms films={person.films} />
                </div>
            </div>
        </>
    );
};
