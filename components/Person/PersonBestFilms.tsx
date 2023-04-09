import Link from 'next/link';

export const PersonBestFilms = ({films}: any) => {
    let arr: any = [];

    function itemCheck(item: any) {
        if (arr.indexOf(item.nameRu) === -1) {
            if (item.general === true) {
                arr.push(item.nameRu);
                return true;
            }
        }
        return false;
    }

    const filteredFilms = films.filter((film: any) => itemCheck(film)).sort((prev: any, next: any) => next.rating - prev.rating);

    console.log(filteredFilms);

    return (
        <ul>
            {filteredFilms.slice(0, 5).map((film: any) => {
                return (
                    <li key={film.filmId}>
                        <Link href={`/movie/${film.filmId}`}>{film.nameRu}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
