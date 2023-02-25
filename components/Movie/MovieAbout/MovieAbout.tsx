import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutStaff} from 'Helpers/MovieAboutStaff';
import {MovieAboutBox} from 'Helpers/MovieAboutBox';

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
            <MovieAboutStaff array={movieStaff} profession={'DIRECTOR'} text={'Режиссер'}/>
            <MovieAboutStaff array={movieStaff} profession={'WRITER'} text={'Сценарий'}/>
            <MovieAboutStaff array={movieStaff} profession={'PRODUCER'} text={'Продюсер'}/>
            <MovieAboutStaff array={movieStaff} profession={'OPERATOR'} text={'Оператор'}/>
            <MovieAboutStaff array={movieStaff} profession={'COMPOSER'} text={'Композитор'}/>
            <MovieAboutStaff array={movieStaff} profession={'DESIGN'} text={'Художник'}/>
            <MovieAboutStaff array={movieStaff} profession={'EDITOR'} text={'Монтаж'}/>
            <MovieAboutBox array={movieBox.items} boxType={'BUDGET'} boxText={'Бюджет'} />
            <MovieAboutBox array={movieBox.items} boxType={'MARKETING'} boxText={'Маркетинг'} />
            <MovieAboutBox array={movieBox.items} boxType={'USA'} boxText={'Сборы в США'} />
            <MovieAboutBox array={movieBox.items} boxType={'RUS'} boxText={'Сборы в России'} />
            <MovieAboutBox array={movieBox.items} boxType={'WORLD'} boxText={'Сборы в мире'} />
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
