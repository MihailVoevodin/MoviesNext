import {HeadComponent} from 'components/Head/Head';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {selectPagesId} from 'store/films/filmsSelectors';
import {setTop250PageId} from 'store/films/filmsSlice';
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
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {pagesCount, films} = movies;

    const {top250: pageId} = useAppSelector(selectPagesId);

    const onChangePage = (pageId: number) => {
        dispatch(setTop250PageId(pageId));
        void router.replace(T.Pages.MainPages[0].link(pageId));
    };

    return (
        <>
            <HeadComponent title={T.Pages.MainPages[0].title} />
            <TopsNavbar />
            <main>
                <h3>{T.Pages.MainPages[0].text}</h3>
                <TopPage movies={films} pageId={pageId} pagesCount={pagesCount} onChangePage={onChangePage} />
            </main>
        </>
    );
};

export default Top250Movies;
