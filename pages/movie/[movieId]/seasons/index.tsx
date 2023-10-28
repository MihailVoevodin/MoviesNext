import {HeadComponent} from 'components/Head/Head';
import {MovieSeasons} from 'components/Movie/MovieSeasons/MovieSeasons';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {ISeason} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

/**
 * @param movieName Название фильма.
 * @param movieSeasons Массив сезонов сериала.
 */
interface IProps {
    movieName: string;
    movieSeasons: ISeason[];
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
    const seasonsResponse = await Services.getSerialSeasons(movieId);
    const movieName = movieResponse.data.nameRu;
    const movieSeasons = seasonsResponse.data.items;

    if (!movieSeasons) {
        return {
            notFound: true,
        };
    }

    return {
        props: {movieSeasons, movieName},
    };
};

/**
 * Страница отображения списка сезонов сериала.
 */
const Seasons: FC<IProps> = ({movieSeasons, movieName}) => {
    const router = useRouter();

    return (
        <>
            <HeadComponent title={T.Pages.Seasons.label} movieName={movieName} />
            <div className={mainStyles.movieDetailsPage}>
                <div className={mainStyles.movieDetailsContainer}>
                    <div className={mainStyles.movieDetailsTitle}>
                        <span>{T.Pages.Seasons.label}</span> / {movieName}
                    </div>
                    <div className={mainStyles.backToMovieContainer}>
                        <hr />
                        <span className={mainStyles.backToMovie} onClick={() => router.replace(T.Pages.MovieLink(router.query.movieId))}>
                            {T.Pages.backToMovie}
                        </span>
                        <hr />
                    </div>
                    {movieSeasons.length > 0 ? (
                        <div>
                            <MovieSeasons movieSeasons={movieSeasons} />
                        </div>
                    ) : (
                        <div className={mainStyles.emptyPage}>{T.Pages.Seasons.empty}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Seasons;
