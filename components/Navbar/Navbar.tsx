import {Input} from 'antd';
import styles from 'components/Navbar/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {FC, ChangeEvent} from 'react';
import {loadMoviesBySearch, setIsSearch} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {SearchOutlined} from '@ant-design/icons';

/**
 * Компонент навигационной панели.
 */
const Navbar: FC = () => {
    const dispatch = useAppDispatch();
    const {top250PageId, isSearch, searchMovies} = useAppSelector((state) => state.films);

    const NavigationItems = [
        {id: 0, title: 'Главная', path: '/'},
        {id: 1, title: 'Фильмы', path: `/movies/top250movies/page/${top250PageId}`},
        {id: 2, title: 'Личности', path: '/persons'},
    ];

    const onClickSearch = () => {
        dispatch(setIsSearch());
    };

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        dispatch(loadMoviesBySearch(e.target.value));
    };

    return (
        <nav>
            <ul className={styles.navbarList}>
                {NavigationItems.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        {title}
                    </Link>
                ))}
                <div className={styles.searchContainer}>
                    {isSearch && (
                        <Input
                            autoFocus={true}
                            className={styles.searchInput}
                            onChange={onChangeSearch}
                            placeholder="Введите название фильма"
                        />
                    )}
                    {isSearch && (
                        <div className={styles.searchMovies}>
                            Возможно, вы искали:
                            <div>
                                {searchMovies.map((movie) => (
                                    <Link className={styles.searchMovieLink} key={movie.filmId} href={`/movie/${movie.filmId}`}>
                                        <div className={styles.searchMovie}>
                                            <Image width={80} height={120} src={movie.posterUrl} alt={movie.nameRu || movie.nameEn} />
                                            <div>
                                                <div>{movie.nameRu || movie.nameEn}</div>
                                                <div className={styles.searchMovieText}>
                                                    <div className={styles.searchMovieRating}>{movie.rating}</div>
                                                    <div>{movie.year}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                    <SearchOutlined className={styles.searchBtn} onClick={onClickSearch} />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
