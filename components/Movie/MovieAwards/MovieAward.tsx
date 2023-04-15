import styles from 'components/Movie/MovieAwards/MovieAward.module.scss';
import {CaretRightFilled} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';

export const MovieAward = ({awardsArray, awardText}: any): any => {
    const awardsArrayFiltered = awardsArray.filter((award: any) => award.name === awardText);
    const AwardsArrayWin = awardsArray.filter((award: any) => award.name === awardText && award.win === true);
    const AwardsArrayLose = awardsArray.filter((award: any) => award.name === awardText && award.win === false);

    return (
        <>
            {awardsArrayFiltered.length > 0 && (
                <div className={styles.awardContainer}>
                    <div className={styles.awardTitle}>
                        {awardText}, {awardsArrayFiltered[0].year} год
                    </div>
                    {awardsArrayFiltered[0].imageUrl && (
                        <Image className={styles.awardImage} width={50} height={100} src={awardsArrayFiltered[0].imageUrl} alt="." />
                    )}
                    {AwardsArrayWin.length > 0 && (
                        <div>
                            <div className={styles.awardResults}>Победитель ({AwardsArrayWin.length}):</div>
                            {AwardsArrayWin.map((award: any, id: number) => {
                                return (
                                    <div key={id} className={styles.awardList}>
                                        <CaretRightFilled />
                                        <div>
                                            {award.nominationName}
                                            {award.persons.length > 0 && (
                                                <span>
                                                    {' '}
                                                    (
                                                    {award.persons.map((person: any, id: number) => {
                                                        return (
                                                            <Link key={id} href={`/name/${person.kinopoiskId}`}>
                                                                {person.nameRu || person.nameEn}
                                                                {id !== award.persons.length - 1 ? ', ' : ''}
                                                            </Link>
                                                        );
                                                    })}
                                                    )
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {AwardsArrayLose.length > 0 && (
                        <div>
                            <div className={styles.awardResults}>Номинация ({AwardsArrayLose.length}):</div>
                            {AwardsArrayLose.map((award: any, id: number) => {
                                return (
                                    <div key={id} className={styles.awardList}>
                                        <CaretRightFilled />
                                        <div>
                                            {award.nominationName}
                                            {award.persons.length > 0 && (
                                                <span>
                                                    {' '}
                                                    (
                                                    {award.persons.map((person: any, id: number) => {
                                                        return (
                                                            <Link key={id} href={`/name/${person.kinopoiskId}`}>
                                                                {person.nameRu || person.nameEn}
                                                                {id !== award.persons.length - 1 ? ', ' : ''}
                                                            </Link>
                                                        );
                                                    })}
                                                    )
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
