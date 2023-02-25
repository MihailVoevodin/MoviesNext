import Link from 'next/link';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';

export const MovieAboutStaff = ({array, profession, text}: any) => {
    const filteredArray = array.filter((a: any) => a.professionKey == profession)

    if (filteredArray.length > 3) {
        return (
            <>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div>
                        {filteredArray.slice(0, 3).map((a: any, id: number) =>
                            <Link key={id} href={`/name/${a.staffId}`}>
                                {a.nameRu}{id !== filteredArray.length - 1 ? ', ' : ''}
                            </Link>)}
                        <span> ...</span>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            {filteredArray.length > 0 && <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>{text}</div>
                <div>
                    {filteredArray.slice(0, 3).map((a: any, id: number) =>
                        <Link key={id} href={`/name/${a.staffId}`}>
                            {a.nameRu}{id !== filteredArray.length - 1 ? ', ' : ''}
                        </Link>)}
                </div>
            </div>}
        </>
    )
}
