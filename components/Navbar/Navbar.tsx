import {Input} from 'antd';
import styles from 'components/Navbar/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, ChangeEvent, useState} from 'react';
import {loadMoviesBySearch} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {T} from 'Common/Text';

/**
 * Компонент навигационной панели.
 */
const Navbar: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>('');
    const {top250PageId, searchMovies, activeTabName} = useAppSelector((state) => state.films);

    const NavigationItems = [
        {id: 0, title: 'Главная', path: '/'},
        {id: 1, title: 'Фильмы', path: `/movies/${activeTabName}/page/${top250PageId}`},
        {id: 2, title: 'Личности', path: '/persons'},
    ];

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        dispatch(loadMoviesBySearch(e.target.value));
    };

    const onSearchMovie = () => {
        setInputValue('');
        dispatch(loadMoviesBySearch(''));
    };

    return (
        <nav className={styles.headerNav}>
            <div className={styles.searchContainer}>
                <Input
                    autoFocus={true}
                    className={styles.searchInput}
                    value={inputValue}
                    onChange={onChangeSearch}
                    placeholder="Введите название фильма"
                />
                {searchMovies.length > 0 && (
                    <div className={styles.searchMovies}>
                        Возможно, вы искали:
                        <div>
                            {searchMovies.map((movie) => (
                                <Link
                                    className={styles.searchMovieLink}
                                    key={movie.filmId}
                                    href={T.Pages.MovieLink(movie.filmId)}
                                    onClick={onSearchMovie}
                                >
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
            </div>
            <ul className={styles.navbarList}>
                {NavigationItems.map(({id, title, path}) => (
                    <Link className={router.asPath === path ? styles.active : undefined} key={id} href={path}>
                        {title}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
