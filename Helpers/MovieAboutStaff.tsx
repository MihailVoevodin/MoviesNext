import {Popover} from 'antd';
import {MovieAboutPersonCard} from 'components/Movie/MoviePersonCard/MovieAboutPersonCard';
import Link from 'next/link';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';

export const MovieAboutStaff = ({array, profession, text}: any) => {
    const filteredArray = array.filter((a: any) => a.professionKey == profession);

    if (filteredArray.length > 3) {
        return (
            <>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredArray.slice(0, 3).map((person: any, id: number) => (
                            <Link key={id} href={`/name/${person.staffId}`}>
                                <Popover content={<MovieAboutPersonCard person={person} />}>{person.nameRu}</Popover>
                                {id !== filteredArray.length - 1 ? ', ' : ''}
                            </Link>
                        ))}
                        <span> ...</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {filteredArray.length > 0 && (
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredArray.slice(0, 3).map((person: any, id: number) => (
                            <Link key={id} href={`/name/${person.staffId}`}>
                                <Popover content={<MovieAboutPersonCard person={person} />}>{person.nameRu}</Popover>
                                {id !== filteredArray.length - 1 ? ', ' : ''}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
