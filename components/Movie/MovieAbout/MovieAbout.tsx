import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutStaff} from 'Helpers/MovieAboutStaff';
import {MovieAboutBox} from 'Helpers/MovieAboutBox';
import {T} from 'Common/Text';

const MovieAbout = ({movie, movieStaff, movieBox}: any) => {

    return (
        <div className={styles.about}>
            <h3>{movie.serial ? 'О сериале' : 'О фильме'}</h3>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Год производства</div>
                <div>{movie.year} {movie.serial && ((movie.endYear - movie.startYear) + 'сезонов')}</div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Страна</div>
                <div>
                    {movie.countries.map((item: any, id: number) => <span key={id}>{item.country}{id !== movie.countries.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Жанр</div>
                <div>
                    {movie.genres.map((item: any, id: number) => <span key={id}>{item.genre}{id !== movie.genres.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Слоган</div>
                <div>{movie.slogan ? <span>&#171;{movie.slogan}&#187;</span> : <span>&#8212;</span>}</div>
            </div>
            {T.staffTextArray.map((person: any) => <MovieAboutStaff key={person.id} array={movieStaff} profession={person.profession} text={person.text} />)}
            {T.boxTextArray.map((box: any) => <MovieAboutBox key={box.id} array={movieBox.items} boxType={box.boxType} boxText={box.boxText} />)}
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Возраст</div>
                <div className={styles.aboutItemBorder}>{movie.ratingAgeLimits.slice(3, 5)}+</div>
            </div>
            {movie.ratingMpaa && <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Рейтинг MPAA</div>
                <div className={styles.aboutItemBorder}>{movie.ratingMpaa.toUpperCase()}</div>
            </div>}
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Время</div>
                <div>{movie.filmLength} мин. / {Math.floor(movie.filmLength / 60)}:{movie.filmLength % 60 < 10 && 0}{movie.filmLength % 60}</div>
            </div>
        </div>
    )
}

export {MovieAbout}
