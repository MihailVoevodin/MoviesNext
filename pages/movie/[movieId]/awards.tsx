import {MovieAward} from 'components/Movie/MovieAwards/MovieAward';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {AWARDS_DICTIONARY} from 'Common/Consts';
import {IMovieAward} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieAwards Массив наград фильма.
 */
interface IProps {
    movieName: string;
    movieAwards: IMovieAward[];
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
    const awardsResponse = await Services.getMovieAwards(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieAwards = awardsResponse.data.items;
    return {
        props: {movieAwards, movieName},
    };
};

/**
 * Страница отображения наград фильма.
 */
const Awards: FC<IProps> = ({movieAwards, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Awards.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Awards.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieAwards.length > 0 ? (
                        <div>
                            {AWARDS_DICTIONARY.map((award) => (
                                <MovieAward key={award.type} movieAwards={movieAwards} text={award.text} />
                            ))}
                        </div>
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Awards.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Awards;
