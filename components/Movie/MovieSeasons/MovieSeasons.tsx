import styles from 'components/Movie/MovieSeasons/MovieSeasons.module.scss';
import {FC} from 'react';
import {ISeason} from 'Common/Models';
import {T} from 'Common/Text';

interface IProps {
    movieSeasons: ISeason[];
}

export const MovieSeasons: FC<IProps> = ({movieSeasons}) => {
    console.log(movieSeasons);

    return (
        <>
            <div className={styles.seasonNumberContainer}>
                <div>{T.Pages.Seasons.label}:</div>
                {movieSeasons.map((season) => (
                    <div key={season.number} className={styles.seasonNumber}>
                        {season.number}
                    </div>
                ))}
            </div>
        </>
    );
};
