import {ConfigProvider, Pagination} from 'antd';
import {Filters} from 'components/Filters/Filters';
import styles from 'components/Movies/Movies.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {IMovie} from 'Common/Models';

/**
 * @param films Массив фильмов топа.
 * @param pageId Номер страницы списка фильмов.
 * @param pagesCount Количество страниц.
 * @param onChangePage Функция изменения страницы.
 */
interface IProps {
    movies: IMovie[];
    pageId: number;
    pagesCount: number;
    onChangePage: (pageId: number) => void;
}

/**
 * Компонент топа фильмов.
 */
export const TopPage: FC<IProps> = ({movies, pageId, pagesCount, onChangePage}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Pagination: {
                        colorPrimary: 'black',
                        colorText: 'white',
                        colorBgTextHover: '#ff6200',
                        colorPrimaryHover: '#ff6200',
                        colorTextDisabled: '#363836',
                    },
                    Select: {
                        colorPrimaryHover: '#ff6200',
                    },
                },
            }}
        >
            <main>
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <div className={styles.moviesItem} key={movie.filmId}>
                            <div className={styles.moviesItemContent}>
                                <Link href={`/movie/${movie.filmId}`}>
                                    <div className={styles.moviesItemInnerContent}>
                                        <div className={styles.movieItemRating}>{movie.rating}</div>
                                        <div>{movie.year}</div>
                                        <div>{movie.countries[0].country}</div>
                                        <div>{movie.filmLength}</div>
                                    </div>
                                    <Image
                                        className={styles.movieItemImg}
                                        width={200}
                                        height={300}
                                        src={movie.posterUrl}
                                        alt={movie.nameRu}
                                    />
                                    <div className={styles.moviesItemName}>{movie.nameRu}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination
                    className={mainStyles.pagination}
                    current={pageId}
                    onChange={onChangePage}
                    total={pagesCount * 20}
                    defaultPageSize={20}
                    showSizeChanger={false}
                />
            </main>
        </ConfigProvider>
    );
};
