import {IMovieAward, IPerson} from 'Common/Models';
import styles from 'components/Movie/MovieAwards/MovieAward.module.scss';
import {CaretRightFilled} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = {
    movieAwards: IMovieAward[];
    text: string;
};

export const MovieAward: React.FC<Props> = ({movieAwards, text}) => {
    const filteredMovieAwards = movieAwards.filter((award) => award.name === text);
    const filteredMovieAwardsWin = movieAwards.filter((award) => award.name === text && award.win);
    const filteredMovieAwardsLose = movieAwards.filter((award) => award.name === text && !award.win);

    return (
        <>
            {filteredMovieAwards.length > 0 && (
                <div className={styles.awardContainer}>
                    <div className={styles.awardTitle}>
                        {text}, {filteredMovieAwards[0].year} год
                    </div>
                    {filteredMovieAwards[0].imageUrl && (
                        <Image className={styles.awardImage} width={50} height={100} src={filteredMovieAwards[0].imageUrl} alt={text} />
                    )}
                    {filteredMovieAwardsWin.length > 0 && (
                        <div>
                            <div className={styles.awardResults}>Победитель ({filteredMovieAwardsWin.length}):</div>
                            {filteredMovieAwardsWin.map((award, id: number) => (
                                <Award key={id} award={award} />
                            ))}
                        </div>
                    )}
                    {filteredMovieAwardsLose.length > 0 && (
                        <div>
                            <div className={styles.awardResults}>Номинация ({filteredMovieAwardsLose.length}):</div>
                            {filteredMovieAwardsLose.map((award, id: number) => (
                                <Award key={id} award={award} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

type AwardProps = {
    award: IMovieAward;
};

const Award: React.FC<AwardProps> = ({award}) => {
    return (
        <div className={styles.awardList}>
            <CaretRightFilled />
            <div>
                {award.nominationName}
                {award.persons.length > 0 && (
                    <span>
                        {' '}
                        (
                        {award.persons.map((person: IPerson, id: number) => {
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
};
