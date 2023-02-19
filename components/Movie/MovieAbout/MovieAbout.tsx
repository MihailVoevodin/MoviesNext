import styles from 'components/Movie/MovieAbout/MovieAbout.module.scss';
import {MovieAboutStaff} from 'Helpers/MovieAboutStaff';
import {MovieAboutBox} from 'Helpers/MovieAboutBox';

const MovieAbout = ({movie, movieStaff, movieBox}: any) => {

    return (
        <div className={styles.about}>
            <h3>О фильме</h3>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Год производства</div>
                <div className={styles.aboutItemContent}>{movie.year}</div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Страна</div>
                <div className={styles.aboutItemContent}>
                    {movie.countries.map((c: any, id: number) => <span key={id}>{c.country}{id !== movie.countries.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Жанр</div>
                <div className={styles.aboutItemContent}>
                    {movie.genres.map((c: any, id: number) => <span key={id}>{c.genre}{id !== movie.genres.length - 1 ? ', ' : ''}</span>)}
                </div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Слоган</div>
                <div className={styles.aboutItemContent}>&#171;{movie.slogan}&#187;</div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Режиссер</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'DIRECTOR'}/></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Сценарий</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'WRITER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Продюсер</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'PRODUCER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Оператор</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'OPERATOR'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Композитор</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'COMPOSER'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Художник</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'DESIGN'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Монтаж</div>
                <div className={styles.aboutItemContent}><MovieAboutStaff array={movieStaff} profession={'EDITOR'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Бюджет</div>
                <div className={styles.aboutItemContent}><MovieAboutBox array={movieBox.items} boxType={'BUDGET'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Маркетинг</div>
                <div className={styles.aboutItemContent}><MovieAboutBox array={movieBox.items} boxType={'MARKETING'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Сборы в США</div>
                <div className={styles.aboutItemContent}><MovieAboutBox array={movieBox.items} boxType={'USA'} /></div>
            </div>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemText}>Сборы в мире</div>
                <div className={styles.aboutItemContent}><MovieAboutBox array={movieBox.items} boxType={'WORLD'} /></div>
            </div>
        </div>
    )
}

export {MovieAbout}
