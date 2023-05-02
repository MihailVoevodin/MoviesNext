import styles from 'pages/movie/[movieId]/facts/Facts.module.scss';
import {FC} from 'react';
import {Regulars} from 'Common/Consts';
import {EMovieFacts} from 'Common/Enums';
import {IMovieFact} from 'Common/Models';

/**
 * @param movieFacts Массив фактов о фильме.
 * @param type Тип фактов о фильме.
 * @param text Текст типа фактов.
 */
interface IProps {
    movieFacts: IMovieFact[];
    type: EMovieFacts;
    text: string;
}

/**
 * Компонент отображения типа фактов фильма.
 */
export const MovieFacts: FC<IProps> = ({movieFacts, type, text}) => {
    const filteredMovieFacts = movieFacts.filter((fact) => fact.type == type);
    console.log(movieFacts);

    return (
        <>
            {filteredMovieFacts.length > 0 && (
                <div className={styles.container}>
                    <div className={styles.title}>{text}</div>
                    <hr />
                    <ul className={styles.list}>
                        {filteredMovieFacts.map((fact, id: number) => (
                            <>
                                <li key={type + id} className={styles.listItem}>
                                    {fact.text.replace(Regulars.fixTagsInText, '')}
                                </li>
                                <hr />
                            </>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};
