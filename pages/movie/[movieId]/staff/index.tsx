import {MovieStaff} from 'components/Movie/MovieStaff/MovieStaff';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {STAFF_DICTIONARY} from 'Common/Consts';
import {IMovieStaff} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieStaff Массив создателей фильма.
 */
interface IProps {
    movieName: string;
    movieStaff: IMovieStaff[];
}

/**
 * @param movieId Идентификатор фильма.
 */
interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<IProps, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const staffResponse = await Services.getMovieStaff(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieStaff = staffResponse.data;
    return {
        props: {movieStaff, movieName},
    };
};

/**
 * Страница отображения создателей фильма.
 */
const Cast: FC<IProps> = ({movieStaff, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Staff.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Staff.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieStaff.length > 0 ? (
                        <div>
                            {STAFF_DICTIONARY.map((profession) => (
                                <MovieStaff key={profession.type} movieStaff={movieStaff} type={profession.type} text={profession.text} />
                            ))}
                        </div>
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Staff.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cast;
