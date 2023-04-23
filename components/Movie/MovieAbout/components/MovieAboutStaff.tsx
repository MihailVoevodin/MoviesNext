import {Popover} from 'antd';
import {EMovieMainStaff} from 'Common/Enums';
import {IMovieStaff} from 'Common/Models';
import {MovieAboutPersonPopover} from 'components/Movie/MovieAbout/components/MovieAboutPersonPopover/MovieAboutPersonPopover';
import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import Link from 'next/link';
import React from 'react';

type Props = {
    movieStaff: IMovieStaff[];
    type: EMovieMainStaff;
    text: string;
};

export const MovieAboutStaff: React.FC<Props> = ({movieStaff, type, text}) => {
    const filteredMovieStaff = movieStaff.filter((person) => person.professionKey == type);

    return (
        <>
            {filteredMovieStaff.length > 0 && (
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredMovieStaff.slice(0, 3).map((person, id: number) => (
                            <Link key={id} href={`/name/${person.staffId}`}>
                                <Popover content={<MovieAboutPersonPopover person={person} />}>{person.nameRu}</Popover>
                                {id !== filteredMovieStaff.length - 1 ? ', ' : ''}
                            </Link>
                        ))}
                        {filteredMovieStaff.length > 3 ? <span> ...</span> : null}
                    </div>
                </div>
            )}
        </>
    );
};
