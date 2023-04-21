import {IPerson} from 'Common/Models';
import styles from 'components/Person/PersonAbout.module.scss';
import {PersonBestFilms} from 'components/Person/PersonBestFilms';
import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';
import {T} from 'Common/Text';
import React from 'react';
moment.locale('ru');

type Props = {
    person: IPerson;
};

export const PersonAbout: React.FC<Props> = ({person}) => {
    return (
        <>
            <div className={styles.personNameRu}>{person.nameRu}</div>
            <div className={styles.personNameOriginal}>{person.nameEn}</div>
            <div className={styles.kinopoiskUrl}>
                <Link href={person.webUrl}>Открыть на Кинопоиске</Link>
            </div>
            <div className={styles.personAboutContainer}>
                <div>
                    <h3 className={styles.personAboutTitle}>{T.PersonPage.Title.label}</h3>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.PersonPage.Profession.label}</div>
                        <div>{person.profession}</div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.PersonPage.Growth.label}</div>
                        <div>{person.growth / 100} м</div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.PersonPage.Birthday.label}</div>
                        <div>
                            {moment(person.birthday).format('D MMMM, YYYY')} {!person.death && `• ${moment(person.birthday).fromNow(true)}`}
                        </div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.PersonPage.BirthPlace.label}</div>
                        <div>{person.birthplace}</div>
                    </div>
                    {person.death && (
                        <>
                            <div className={styles.personItem}>
                                <div className={styles.personItemText}>{T.PersonPage.Death.label}</div>
                                <div>
                                    {moment(person.death).format('D MMMM, YYYY')} • {moment(person.death).from(person.birthday, true)}
                                </div>
                            </div>
                            <div className={styles.personItem}>
                                <div className={styles.personItemText}>{T.PersonPage.DeathPlace.label}</div>
                                <div>{person.deathplace}</div>
                            </div>
                        </>
                    )}
                    {person.spouses.length > 0 && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>
                                {person.spouses.length === 1
                                    ? person.sex === 'MALE'
                                        ? T.PersonPage.Spouses.FemaleLabel
                                        : T.PersonPage.Spouses.MaleLabel
                                    : T.PersonPage.Spouses.PluralLabel}
                            </div>
                            <div>
                                {person.spouses.map((spouse) => (
                                    <div key={spouse.personId}>
                                        {spouse.name} {spouse.divorced && spouse.divorcedReason}{' '}
                                        {spouse.children > 0 &&
                                            `(${spouse.children} ${
                                                spouse.children === 1
                                                    ? T.PersonPage.Spouses.Childs.SingleLabel
                                                    : T.PersonPage.Spouses.Childs.PluralLabel
                                            })`}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{T.PersonPage.FilmsCount.label}</div>
                        <div>{person.films.length}</div>
                    </div>
                </div>
                <div>
                    <h3 className={styles.personAboutTitle}>{T.PersonPage.BestFilms.label}</h3>
                    <PersonBestFilms films={person.films} />
                </div>
            </div>
        </>
    );
};
