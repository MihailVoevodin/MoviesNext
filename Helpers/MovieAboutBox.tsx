import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';

export const MovieAboutBox = ({array, boxType, boxText}: any) => {
    const filteredArray = array.filter((a: any) => a.type == boxType)

    return (
        <>
            {filteredArray.length > 0 &&
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{boxText}</div>
                    <div className={styles.aboutItemContent}>{filteredArray.map((a: any, id: number) => <span key={id}>{a.symbol} {a.amount.toLocaleString('ru')}</span>)}</div>
                </div>
            }
        </>
    )
}
