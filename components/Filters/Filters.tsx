import {Button, Input, Select, Form} from 'antd';
import styles from 'components/Filters/Filters.module.scss';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';
import {
    setTypeId,
    setKeyword,
    setRatingFrom,
    setRatingTo,
    setYearFrom,
    setYearTo,
    setCountryId,
    setGenreId,
    setOrderId,
    loadMoviesByFilters,
    IFiltersState,
    setFindMoviesPageId,
} from 'store/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {Regulars} from 'Common/Consts';
import {T} from 'Common/Text';

export const Filters = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword, findMoviesPageId} = useAppSelector(
        (state) => state.filters
    );

    const handleChangeGenre = (value: string) => {
        dispatch(setGenreId(value));
    };

    const handleChangeCountry = (value: string) => {
        dispatch(setCountryId(value));
    };

    const handleChangeOrder = (value: string) => {
        dispatch(setOrderId(value));
    };

    const handleChangeType = (value: string) => {
        dispatch(setTypeId(value));
    };

    const handleChangeRatingFrom = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue) || inputValue === '.') {
            dispatch(setRatingFrom(inputValue));
        }
    };

    const handleChangeRatingTo = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue) || inputValue === '.') {
            dispatch(setRatingTo(inputValue));
        }
    };

    const handleChangeYearFrom = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue)) {
            dispatch(setYearFrom(inputValue));
        }
    };

    const handleChangeYearTo = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue)) {
            dispatch(setYearTo(inputValue));
        }
    };

    const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        dispatch(setKeyword(inputValue));
    };

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const onFinish = (values: IFiltersState) => {
        const {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword} = values;
        dispatch(setFindMoviesPageId(1));
        if (values) {
            dispatch(
                loadMoviesByFilters({
                    orderId,
                    genreId,
                    countryId,
                    typeId,
                    ratingFrom,
                    ratingTo,
                    yearFrom,
                    yearTo,
                    keyword,
                    findMoviesPageId,
                })
            );
        }
        void router.replace(`/movies/findMovies/page/${1}`);
    };

    return (
        <Form {...layout} onFinish={onFinish} className={styles.form}>
            <Form.Item name={'genreId'} label={<label style={{color: 'white'}}>Жанр:</label>} initialValue={genreId}>
                <Select
                    style={{width: 200}}
                    className={styles.formItem}
                    showSearch
                    placeholder="Выберите жанр"
                    onChange={handleChangeGenre}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.genres}
                />
            </Form.Item>
            <Form.Item name={'countryId'} label={<label style={{color: 'white'}}>Страна:</label>} initialValue={countryId}>
                <Select
                    style={{width: 200}}
                    showSearch
                    placeholder="Выберите страну"
                    onChange={handleChangeCountry}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.countries}
                />
            </Form.Item>
            <Form.Item name={'orderId'} label={<label style={{color: 'white'}}>Сортировка:</label>} initialValue={orderId}>
                <Select style={{width: 200}} onChange={handleChangeOrder} options={T.Filters.order} />
            </Form.Item>
            <Form.Item name={'typeId'} label={<label style={{color: 'white'}}>Тип видеоматериала:</label>} initialValue={typeId}>
                <Select style={{width: 200}} onChange={handleChangeType} options={T.Filters.type} />
            </Form.Item>
            <Form.Item name={'ratingFrom'} label={<label style={{color: 'white'}}>Рейтинг от:</label>} initialValue={ratingFrom}>
                <Input
                    style={{width: 200}}
                    value={ratingFrom}
                    onChange={handleChangeRatingFrom}
                    placeholder="Введите рейтинг"
                    maxLength={3}
                />
            </Form.Item>
            <Form.Item name={'ratingTo'} label={<label style={{color: 'white'}}>Рейтинг до:</label>} initialValue={ratingTo}>
                <Input style={{width: 200}} value={ratingTo} onChange={handleChangeRatingTo} placeholder="Введите рейтинг" maxLength={3} />
            </Form.Item>
            <Form.Item name={'yearFrom'} label={<label style={{color: 'white'}}>Год от:</label>} initialValue={yearFrom}>
                <Input style={{width: 200}} value={yearFrom} onChange={handleChangeYearFrom} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item name={'yearTo'} label={<label style={{color: 'white'}}>Год до:</label>} initialValue={yearTo}>
                <Input style={{width: 200}} value={yearTo} onChange={handleChangeYearTo} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item
                className={styles.keyword}
                name={'keyword'}
                label={<label style={{color: 'white'}}>Ключевое слово:</label>}
                initialValue={keyword}
            >
                <Input
                    style={{width: 200}}
                    value={keyword}
                    onChange={handleChangeKeyword}
                    placeholder="Введите ключевое слово"
                    maxLength={16}
                />
            </Form.Item>
            <Form.Item className={styles.btn} wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button style={{backgroundColor: '#ff6200'}} type="primary" htmlType="submit">
                    Найти фильмы
                </Button>
            </Form.Item>
        </Form>
    );
};
