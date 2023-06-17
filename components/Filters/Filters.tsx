import {Button, Input, Select, Form} from 'antd';
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
    loadFilmsByFilters,
} from 'store/filtersSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {Regulars} from 'Common/Consts';
import {T} from 'Common/Text';

export const Filters = () => {
    const dispatch = useAppDispatch();
    const {orderId, genreId, countryId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword} = useAppSelector((state) => state.filters);

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

    const onFinish = (values: any) => {
        if (values) {
            dispatch(loadFilmsByFilters(values));
        }
    };

    return (
        <Form {...layout} onFinish={onFinish}>
            <Form.Item name={'genreId'} label={<label style={{color: 'white'}}>Жанр:</label>} initialValue={genreId}>
                <Select
                    style={{width: 200}}
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
                <Input value={ratingFrom} onChange={handleChangeRatingFrom} placeholder="Введите рейтинг" maxLength={3} />
            </Form.Item>
            <Form.Item name={'ratingTo'} label={<label style={{color: 'white'}}>Рейтинг до:</label>} initialValue={ratingTo}>
                <Input value={ratingTo} onChange={handleChangeRatingTo} placeholder="Введите рейтинг" maxLength={3} />
            </Form.Item>
            <Form.Item name={'yearFrom'} label={<label style={{color: 'white'}}>Год от:</label>} initialValue={yearFrom}>
                <Input value={yearFrom} onChange={handleChangeYearFrom} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item name={'yearTo'} label={<label style={{color: 'white'}}>Год до:</label>} initialValue={yearTo}>
                <Input value={yearTo} onChange={handleChangeYearTo} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item name={'keyword'} label={<label style={{color: 'white'}}>Ключевое слово:</label>} initialValue={keyword}>
                <Input value={keyword} onChange={handleChangeKeyword} placeholder="Введите ключевое слово" maxLength={16} />
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button type="primary" htmlType="submit">
                    Найти фильмы
                </Button>
            </Form.Item>
        </Form>
    );
};
