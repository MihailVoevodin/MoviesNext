import {Input} from 'antd';
import styles from 'components/Navbar/Navbar.module.scss';
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
    const {top250PageId, isSearch} = useAppSelector((state) => state.films);

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
                    <SearchOutlined className={styles.searchBtn} onClick={onClickSearch} />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
