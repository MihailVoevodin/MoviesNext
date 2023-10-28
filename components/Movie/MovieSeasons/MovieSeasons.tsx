import {FC} from 'react';
import {ISeason} from 'Common/Models';

interface IProps {
    movieSeasons: ISeason[];
}

export const MovieSeasons: FC<IProps> = ({movieSeasons}) => {
    return (
        <>
            {movieSeasons.map((season) => (
                <div key={season.number}>{season.number}</div>
            ))}
        </>
    );
};
