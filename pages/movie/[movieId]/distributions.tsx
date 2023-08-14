import {MovieDistribution} from 'components/Movie/MovieDistributions/MovieDistribution';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {DISTRIBUTIONS_DICTIONARY} from 'Common/Consts';
import {IMovieDistribution} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieDistributions Массив премьер фильма.
 */
interface IProps {
    movieName: string;
    movieDistributions: IMovieDistribution[];
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
    const distributionsResponse = await Services.getMovieDistributions(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieDistributions = distributionsResponse.data.items;

    if (!movieDistributions) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movieDistributions, movieName},
    };
};

/**
 * Страница отображения премьер фильма.
 */
const Distributions: FC<IProps> = ({movieDistributions, movieName}) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    {T.Pages.Distributions.label}: {movieName}
                </title>
            </Head>
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Distributions.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieDistributions.length > 0 ? (
                        <div>
                            {DISTRIBUTIONS_DICTIONARY.map((distribution) => (
                                <MovieDistribution
                                    key={distribution.type}
                                    movieDistributions={movieDistributions}
                                    type={distribution.type}
                                    text={distribution.text}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Distributions.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Distributions;
