import {HeadComponent} from 'components/Head/Head';
import {TopPage} from 'components/Movies/TopPage';
import {TopsNavbar} from 'components/Navbar/TopsNavbar';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import {selectPagesId} from 'store/filmsSelectors';
import {setTop100PageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {defaultPagesCount} from 'Common/Consts';
import {IMovie} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movies Массив топа фильмов.
 */
interface IProps {
    movies: IMovie[];
}

/**
 * @param pageId Номер страницы списка фильмов.
 */
interface Params extends ParsedUrlQuery {
    pageId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {pageId} = context.params!;
    const moviesResponse = await Services.getMoviesTop_100(pageId);
    const movies = moviesResponse.data.films;

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
 * Страница отображения топ 100 популярных фильмов.
 */
const Top100Movies: FC<IProps> = ({movies}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {top100: pageId} = useAppSelector(selectPagesId);

    const onChangePage = (pageId: number) => {
        dispatch(setTop100PageId(pageId));
        void router.replace(T.Pages.MainPages[1].link(pageId));
    };

    return (
        <>
            <HeadComponent title={T.Pages.MainPages[1].title} />
            <TopsNavbar />
            <main>
                <h3>{T.Pages.MainPages[1].text}</h3>
                <TopPage movies={movies} pageId={pageId} pagesCount={defaultPagesCount} onChangePage={onChangePage} />
            </main>
        </>
    );
};

export default Top100Movies;
