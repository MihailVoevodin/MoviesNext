import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {setTop250PageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {IMovies} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovies;
}

/**
 * @param pageId Номер страницы списка фильмов.
 */
interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {pageId} = context.params!;
    const moviesResponse = await Services.getMoviesTop_250(pageId);
    const movies = moviesResponse.data;

    if (!movies) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movies},
    };
};

/**
 * Страница отображения топ 250 фильмов.
 */
const Top250Movies: FC<IProps> = ({movies}) => {
    const {pagesCount, films} = movies;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top100PageId, top250PageId, topAwaitPageId} = useAppSelector((state) => state.films);
    const {findMoviesPageId} = useAppSelector((state) => state.filters);

    const onChangePage = (pageId: number) => {
        dispatch(setTop250PageId(pageId));
        void router.replace(T.Pages.MainPages[0].link(pageId));
    };

    return (
        <>
            <Head>
                <title>{T.Pages.MainPages[0].title}</title>
            </Head>
            <TopsNavbar
                top100PageId={top100PageId}
                top250PageId={top250PageId}
                topAwaitPageId={topAwaitPageId}
                findMoviesPageId={findMoviesPageId}
            />
            <main>
                <h3>{T.Pages.MainPages[0].text}</h3>
                <TopPage movies={films} pageId={top250PageId} pagesCount={pagesCount} onChangePage={onChangePage} />
            </main>
        </>
    );
};

export default Top250Movies;
