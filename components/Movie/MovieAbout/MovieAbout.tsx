import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutStaff} from 'Helpers/MovieAboutStaff';
import {MovieAboutBox} from 'Helpers/MovieAboutBox';

const MovieAbout = ({movie, movieStaff, movieBox}: any) => {

    return (
        <div className={styles.about}>
            <h3>О фильме</h3>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Год производства</div>
                <div>{movie.year}</div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Страна</div>
                <div>
                    {movie.countries.map((c: any, id: number) => <span key={id}>{c.country}{id !== movie.countries.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Жанр</div>
                <div>
                    {movie.genres.map((c: any, id: number) => <span key={id}>{c.genre}{id !== movie.genres.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Слоган</div>
                <div>{movie.slogan ? `&#171;${movie.slogan}&#187;` : '-'}</div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Режиссер</div>
                <div><MovieAboutStaff array={movieStaff} profession={'DIRECTOR'}/></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Сценарий</div>
                <div><MovieAboutStaff array={movieStaff} profession={'WRITER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Продюсер</div>
                <div><MovieAboutStaff array={movieStaff} profession={'PRODUCER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Оператор</div>
                <div><MovieAboutStaff array={movieStaff} profession={'OPERATOR'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Композитор</div>
                <div><MovieAboutStaff array={movieStaff} profession={'COMPOSER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Художник</div>
                <div><MovieAboutStaff array={movieStaff} profession={'DESIGN'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Монтаж</div>
                <div><MovieAboutStaff array={movieStaff} profession={'EDITOR'} /></div>
            </div>
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
                <div>{movie.filmLength} мин. / {Math.floor(movie.filmLength / 60)}:{movie.filmLength % 60}</div>
            </div>
        </div>
    )
}

export {MovieAbout}
