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
        void router.replace(T.Pages.MainPages.FindMovies.link(1));
    };

    return (
        <Form {...layout} onFinish={onFinish} className={styles.form}>
            <Form.Item
                name={T.FiltersInputs.genre.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.genre.text}</label>}
                initialValue={genreId}
            >
                <Select
                    style={{width: 200}}
                    className={styles.formItem}
                    placeholder={T.FiltersInputs.genre.placeholder}
                    onChange={handleChangeGenre}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.genres}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.country.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.country.text}</label>}
                initialValue={countryId}
            >
                <Select
                    style={{width: 200}}
                    placeholder={T.FiltersInputs.country.placeholder}
                    onChange={handleChangeCountry}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.countries}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.order.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.order.text}</label>}
                initialValue={orderId}
            >
                <Select
                    style={{width: 200}}
                    placeholder={T.FiltersInputs.order.placeholder}
                    onChange={handleChangeOrder}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.order}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.type.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.type.text}</label>}
                initialValue={typeId}
            >
                <Select
                    style={{width: 200}}
                    placeholder={T.FiltersInputs.type.placeholder}
                    onChange={handleChangeType}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.type}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.ratingFrom.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.ratingFrom.text}</label>}
                initialValue={ratingFrom}
            >
                <Input
                    style={{width: 200}}
                    value={ratingFrom}
                    onChange={handleChangeRatingFrom}
                    placeholder={T.FiltersInputs.ratingFrom.placeholder}
                    maxLength={3}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.ratingTo.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.ratingTo.text}</label>}
                initialValue={ratingTo}
            >
                <Input
                    style={{width: 200}}
                    value={ratingTo}
                    onChange={handleChangeRatingTo}
                    placeholder={T.FiltersInputs.ratingTo.placeholder}
                    maxLength={3}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.yearFrom.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.yearFrom.text}</label>}
                initialValue={yearFrom}
            >
                <Input
                    style={{width: 200}}
                    value={yearFrom}
                    onChange={handleChangeYearFrom}
                    placeholder={T.FiltersInputs.yearFrom.placeholder}
                    maxLength={4}
                />
            </Form.Item>
            <Form.Item
                name={T.FiltersInputs.yearTo.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.yearTo.text}</label>}
                initialValue={yearTo}
            >
                <Input
                    style={{width: 200}}
                    value={yearTo}
                    onChange={handleChangeYearTo}
                    placeholder={T.FiltersInputs.yearTo.placeholder}
                    maxLength={4}
                />
            </Form.Item>
            <Form.Item
                className={styles.keyword}
                name={T.FiltersInputs.keyword.name}
                label={<label style={{color: 'white'}}>{T.FiltersInputs.keyword.text}</label>}
                initialValue={keyword}
            >
                <Input
                    style={{width: 200}}
                    value={keyword}
                    onChange={handleChangeKeyword}
                    placeholder={T.FiltersInputs.keyword.placeholder}
                    maxLength={16}
                />
            </Form.Item>
            <Form.Item className={styles.btn} wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button style={{backgroundColor: '#ff6200'}} type="primary" htmlType="submit">
                    {T.FiltersInputs.button.text}
                </Button>
            </Form.Item>
        </Form>
    );
};
