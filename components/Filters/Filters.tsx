import {Button, Input, Select, Form} from 'antd';
import {ChangeEvent, useState} from 'react';
import {Regulars} from 'Common/Consts';
import {T} from 'Common/Text';

export const Filters = () => {
    const [orderId, setOrderId] = useState<string>('RATING');
    const [, setGenreId] = useState<string>('');
    const [, setCountryId] = useState<string>('');
    const [typeId, setTypeId] = useState<string>('ALL');
    const [ratingFrom, setRatingFrom] = useState<string>('0');
    const [ratingTo, setRatingTo] = useState<string>('10');
    const [yearFrom, setYearFrom] = useState<string>('1000');
    const [yearTo, setYearTo] = useState<string>('3000');
    const [keyword, setKeyword] = useState<string>('');

    const handleChangeGenre = (value: string) => {
        console.log(value);
        setGenreId(value);
    };

    const handleChangeCountry = (value: string) => {
        console.log(value);
        setCountryId(value);
    };

    const handleChangeOrder = (value: string) => {
        console.log(value);
        setOrderId(value);
    };

    const handleChangeType = (value: string) => {
        console.log(value);
        setTypeId(value);
    };

    const handleChangeRatingFrom = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue) || inputValue === '.') {
            console.log(inputValue);
            setRatingFrom(inputValue);
        }
    };

    const handleChangeRatingTo = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue) || inputValue === '.') {
            console.log(inputValue);
            setRatingTo(inputValue);
        }
    };

    const handleChangeYearFrom = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue)) {
            console.log(inputValue);
            setYearFrom(inputValue);
        }
    };

    const handleChangeYearTo = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = Regulars.numbers;
        if (reg.test(inputValue)) {
            console.log(inputValue);
            setYearTo(inputValue);
        }
    };

    const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        console.log(inputValue);
        setKeyword(inputValue);
    };

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form {...layout} onFinish={onFinish}>
            <Form.Item name={['filters', 'genre']} label="Жанр">
                <Select
                    style={{width: 200}}
                    showSearch
                    placeholder="Выберите жанр"
                    onChange={handleChangeGenre}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.genres}
                />
            </Form.Item>
            <Form.Item name={['filters', 'country']} label="Страна">
                <Select
                    style={{width: 200}}
                    showSearch
                    placeholder="Выберите страну"
                    onChange={handleChangeCountry}
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={T.Filters.countries}
                />
            </Form.Item>
            <Form.Item name={['filters', 'order']} label="Сортировка" initialValue={orderId}>
                <Select style={{width: 200}} onChange={handleChangeOrder} options={T.Filters.order} />
            </Form.Item>
            <Form.Item name={['filters', 'type']} label="Тип видеоматериала" initialValue={typeId}>
                <Select style={{width: 200}} onChange={handleChangeType} options={T.Filters.type} />
            </Form.Item>
            <Form.Item name={['filters', 'ratingFrom']} label="Рейтинг от" initialValue={ratingFrom}>
                <Input value={ratingFrom} onChange={handleChangeRatingFrom} placeholder="Введите рейтинг" maxLength={3} />
            </Form.Item>
            <Form.Item name={['filters', 'ratingTo']} label="Рейтинг до" initialValue={ratingTo}>
                <Input value={ratingTo} onChange={handleChangeRatingTo} placeholder="Введите рейтинг" maxLength={3} />
            </Form.Item>
            <Form.Item name={['filters', 'yearFrom']} label="Год от" initialValue={yearFrom}>
                <Input value={yearFrom} onChange={handleChangeYearFrom} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item name={['filters', 'yearTo']} label="Год до" initialValue={yearTo}>
                <Input value={yearTo} onChange={handleChangeYearTo} placeholder="Введите год" maxLength={4} />
            </Form.Item>
            <Form.Item name={['filters', 'keyword']} label="Ключевое слово" initialValue={keyword}>
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
