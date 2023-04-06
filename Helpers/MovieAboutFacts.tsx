import styles from 'pages/movie/[movieId]/facts/Facts.module.scss';

export const MovieAboutFacts = ({array, type, text}: any) => {
    const filteredArray = array.filter((a: any) => a.type == type);

    return (
        <>
            {filteredArray.length > 0 && (
                <div className={styles.container}>
                    <div className={styles.title}>{text}</div>
                    <hr />
                    <ul className={styles.list}>
                        {filteredArray.map((a: any, id: number) => (
                            <>
                                <li key={id} className={styles.listItem}>
                                    {a.text.replace(/<[^>]+>|&[^>]+;/g, '')}
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
