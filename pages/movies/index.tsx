import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import { Pagination } from 'antd';
import {loadFilms, setPageId} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

const Movies = () => {
    const router = useRouter();
    console.log(router)
    const dispatch = useAppDispatch();
    const {films, pageId} = useAppSelector(state => state.films)

    useEffect(() => {
        dispatch(loadFilms(pageId));
    }, [pageId])

    const onChange = (pageId: number) => {
        dispatch(setPageId(pageId));
    }

    return (
        <div>
            {films.map((film: any) => <div key={film.filmId}><Link href={`movies/${film.filmId}`}>{film.filmId}</Link></div>)}
            <Pagination current={pageId} onChange={onChange} total={250} defaultPageSize={20} showSizeChanger={false} />
        </div>
    )
};

export default Movies;