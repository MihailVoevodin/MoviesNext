import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {RightOutlined} from '@ant-design/icons';
import {MovieAboutActors} from 'Helpers/MovieAboutActors';
import {MovieAboutStaff} from 'Helpers/MovieAboutStaff';
import {MovieAboutBox} from 'Helpers/MovieAboutBox';
import {T} from 'Common/Text';
import Link from 'next/link';

const MovieAbout = ({movie, movieStaff, movieBox}: any) => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <h3>{movie.serial ? 'О сериале' : 'О фильме'}</h3>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>Год производства</div>
                    <div>{movie.year} {movie.serial && ((movie.endYear - movie.startYear) + 'сезонов')}</div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>Страна</div>
                    <div className={styles.aboutItemContent}>
                        {movie.countries.map((item: any, id: number) => <span key={id}>{item.country}{id !== movie.countries.length - 1 ? ', ' : ''}</span>)}
                    </div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>Жанр</div>
                    <div className={styles.aboutItemContent}>
                        {movie.genres.map((item: any, id: number) => <span key={id}>{item.genre}{id !== movie.genres.length - 1 ? ', ' : ''}</span>)}
                    </div>
                </div>
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>Слоган</div>
                    <div className={styles.aboutItemContent}>{movie.slogan ? <span>&#171;{movie.slogan}&#187;</span> : <span>&#8212;</span>}</div>
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
            <div className={styles.actors}>
                <Link href={`/movie/${movie.kinopoiskId}/cast`}><h3>В ролях <RightOutlined /></h3></Link>
                <MovieAboutActors array={movieStaff} professionKey={'ACTOR'} />
                <div className={styles.actorsCount}>
                    <Link href={`/movie/${movie.kinopoiskId}/cast`}>{movieStaff.filter((person: any) => person.professionKey == 'ACTOR').length} актеров</Link>
                </div>
            </div>
        </div>
    )
}

export {MovieAbout}
