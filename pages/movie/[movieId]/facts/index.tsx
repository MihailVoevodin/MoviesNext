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

type Props = {
    movieName: string;
    movieFacts: IMovieFact[];
};

interface Params extends ParsedUrlQuery {
    movieId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {movieId} = context.params!;
    const movieResponse = await Services.getMovie(movieId);
    const factsResponse = await Services.getMovieFacts(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieFacts = factsResponse.data.items;

    return {
        props: {movieFacts, movieName},
    };
};

const Facts: FC<Props> = ({movieFacts, movieName}) => {
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
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(`/movie/${router.query.movieId}`)}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    <div>
                        {FACTS_DICTIONARY.map((fact) => (
                            <MovieFacts key={fact.type} movieFacts={movieFacts} type={fact.type} text={fact.text} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Facts;
