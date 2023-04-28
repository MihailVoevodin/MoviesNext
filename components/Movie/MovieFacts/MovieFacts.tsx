import {Regulars} from 'Common/Consts';
import {EMovieFacts} from 'Common/Enums';
import {IMovieFact} from 'Common/Models';
import styles from 'pages/movie/[movieId]/facts/Facts.module.scss';
import {FC} from 'react';

type Props = {
    movieFacts: IMovieFact[];
    type: EMovieFacts;
    text: string;
};

export const MovieFacts: FC<Props> = ({movieFacts, type, text}) => {
    const filteredMovieFacts = movieFacts.filter((fact) => fact.type == type);

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
