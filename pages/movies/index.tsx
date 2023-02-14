import axios from 'axios';
import {useEffect, useState} from 'react';
import { Pagination } from 'antd';
import {loadFilms} from 'store/filmsSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

const Movies = ({data}: any) => {
    const dispatch = useAppDispatch();
    const {films} = useAppSelector(state => state.films)
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(loadFilms(page));
    }, [page])

    const onChange = (page: number) => {
        console.log(page)
        setPage(page);
    }

    return (
        <div>
            {films.map((film: any) => <div key={film.filmId}>{film.filmId}</div>)}
            <Pagination current={page} onChange={onChange} total={250} defaultPageSize={20} showSizeChanger={false} />
        </div>
    )
};

export default Movies;