import {IPerson} from 'Common/Models';
import styles from 'components/Person/PersonAbout.module.scss';
import stylesMain from 'components/Movie/MovieMainInfo/MovieMainInfo.module.scss';
import {PersonBestFilms} from 'components/Person/PersonBestFilms';
import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';
import React from 'react';
moment.locale('ru');

type Props = {
    person: IPerson;
};

export const PersonAbout: React.FC<Props> = ({person}) => {
    console.log(new Date(person.birthday).getTime());

    return (
        <>
            <div className={styles.personNameRu}>{person.nameRu}</div>
            <div className={styles.personNameOriginal}>{person.nameEn}</div>
            <div className={styles.kinopoiskUrl}>
                <Link href={person.webUrl}>Открыть на Кинопоиске</Link>
            </div>
            <div className={styles.personAboutContainer}>
                <div>
                    <h3 className={styles.personAboutTitle}>О персоне</h3>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>Карьера</div>
                        <div>{person.profession}</div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>Рост</div>
                        <div>{person.growth / 100} м</div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>Дата рождения</div>
                        <div>
                            {moment(person.birthday).format('D MMMM, YYYY')} {!person.death && `• ${moment(person.birthday).fromNow(true)}`}
                        </div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>Место рождения</div>
                        <div>{person.birthplace}</div>
                    </div>
                    {person.death && (
                        <div className={styles.personItem}>
                            <div className={styles.personItemText}>Дата смерти</div>
                            <div>
                                {moment(person.death).format('D MMMM, YYYY')} • {moment(person.death).from(person.birthday, true)}
                            </div>
                        </div>
                    )}
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>{person.spouses.length === 1 ? 'Супруга' : 'Супруги'}</div>
                        <div>
                            {person.spouses.map((spouse) => (
                                <div key={spouse.personId}>
                                    {spouse.name} {spouse.divorced && spouse.divorcedReason}{' '}
                                    {spouse.children > 0 && `${spouse.children} ${spouse.children === 1 ? 'ребёнок' : 'детей'}`}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.personItem}>
                        <div className={styles.personItemText}>Всего фильмов</div>
                        <div>{person.films.length}</div>
                    </div>
                </div>
                <div>
                    <h3 className={styles.personAboutTitle}>Лучшие фильмы</h3>
                    <PersonBestFilms films={person.films} />
                </div>
            </div>
        </>
    );
};
