import styles from 'components/Movie/MovieDistributions/MovieDistribution.module.scss';
import moment from 'moment';
import {FC} from 'react';
import {EMovieDistributions} from 'Common/Enums';
import {IMovieDistribution} from 'Common/Models';
import {T} from 'Common/Text';
import 'moment/locale/ru';
moment.locale('ru');

/**
 * @param movieDistributions Массив премьер фильма.
 * @param type Тип премьеры фильма.
 * @param text Текст типа премьеры.
 */
interface IProps {
    movieDistributions: IMovieDistribution[];
    type: EMovieDistributions;
    text: string;
}

/**
 * Компонент отображения типа премьер фильма.
 */
export const MovieDistribution: FC<IProps> = ({movieDistributions, type, text}) => {
    const filteredMovieDistributions = movieDistributions.filter((distribution) => distribution.type == type);

    return (
        <>
            {filteredMovieDistributions.length > 0 && (
                <div className={styles.container}>
                    <div className={styles.title}>{text}</div>
                    <ul className={styles.list}>
                        {filteredMovieDistributions.map((distribution, id: number) => {
                            return (
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.date}>{moment(distribution.date).format(T.date)}</div>
                                    <div>
                                        {distribution.companies.length > 0 ? distribution.companies[0].name : distribution.country.country}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};
