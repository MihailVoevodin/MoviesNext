import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {FC} from 'react';
import {EMovieBox} from 'Common/Enums';
import {IMovieBox} from 'Common/Models';

type Props = {
    movieBox: IMovieBox[];
    type: EMovieBox;
    text: string;
};

export const MovieAboutBox: FC<Props> = ({movieBox, type, text}) => {
    const filteredMovieBox = movieBox.filter((box) => box.type == type);

    return (
        <>
            {filteredMovieBox.length > 0 && (
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>{text}</div>
                    <div className={styles.aboutItemContent}>
                        {filteredMovieBox.map((box, id: number) => (
                            <span key={id}>
                                {box.symbol} {box.amount.toLocaleString('ru')}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
