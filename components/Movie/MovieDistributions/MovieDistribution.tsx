import styles from 'components/Movie/MovieDistributions/MovieDistribution.module.scss';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const MovieDistribution = ({array, type, text}: any) => {
    const filteredArray = array.filter((a: any) => a.type == type);

    return (
        <>
            {filteredArray.length > 0 && (
                <div className={styles.container}>
                    <div className={styles.title}>{text}</div>
                    <ul className={styles.list}>
                        {filteredArray.map((a: any, id: number) => {
                            return (
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.date}>{moment(a.date).format('D MMMM YYYY')}</div>
                                    <div>{a.companies.length > 0 ? a.companies[0].name : a.country.country}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};
