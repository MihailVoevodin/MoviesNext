import {MovieFacts} from 'components/Movie/MovieFacts/MovieFacts';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {FACTS_DICTIONARY} from 'Common/Consts';
import {IMovieFact} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieFacts Массив фактов о фильме.
 */
interface IProps {
    movieName: string;
    movieFacts: IMovieFact[];
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
    const factsResponse = await Services.getMovieFacts(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieFacts = factsResponse.data.items;

    return {
        props: {movieFacts, movieName},
    };
};

/**
 * Страница отображения фактов о фильме.
 */
const Facts: FC<IProps> = ({movieFacts, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Facts.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Facts.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieFacts.length > 0 ? (
                        <div>
                            {FACTS_DICTIONARY.map((fact) => (
                                <MovieFacts key={fact.type} movieFacts={movieFacts} type={fact.type} text={fact.text} />
                            ))}
                        </div>
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Facts.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Facts;
