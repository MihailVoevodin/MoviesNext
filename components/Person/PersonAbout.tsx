import styles from 'components/Person/PersonAbout.module.scss';
import stylesMain from 'components/Movie/MovieMainInfo/MovieMainInfo.module.scss';
import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';
moment.locale('ru');

export const PersonAbout = ({person}: any) => {
    console.log(new Date(person.birthday).getTime());

    return (
        <>
            <div className={styles.personNameRu}>{person.nameRu}</div>
            <div className={styles.personNameOriginal}>{person.nameEn}</div>
            <div className={stylesMain.kinopoiskUrl}>
                <Link href={person.webUrl}>Открыть на Кинопоиске</Link>
            </div>
            <h3>О персоне</h3>
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
                    {person.spouses.map((spouse: any) => (
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
        </>
    );
};
