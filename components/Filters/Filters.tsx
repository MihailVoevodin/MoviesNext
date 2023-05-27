import { Button, Input, Select } from "antd";
import { T } from "Common/Text";
import { ChangeEvent, useState } from "react";
import { Regulars } from "Common/Consts";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setCountryId, setGenreId, setOrderId, setTypeId, setRatingFrom, setRatingTo, setYearFrom, setYearTo, setKeyword } from "store/filtersSlice";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const {orderId, typeId, ratingFrom, ratingTo, yearFrom, yearTo, keyword} = useAppSelector((state) => state.filters)

  const handleChangeGenres = (value: string) => {
    dispatch(setGenreId(value));
  };

  const handleChangeCountries = (value: string) => {
    dispatch(setCountryId(value));
  };

  const handleChangeOrder = (value: string) => {
    dispatch(setOrderId(value));
  };

  const handleChangeType = (value: string) => {
    dispatch(setTypeId(value));
  };

  const handleChangeRatingFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue) || inputValue === '.') {
      dispatch(setRatingFrom(inputValue));
    }
  };

  const handleChangeRatingTo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue) || inputValue === '.') {
      dispatch(setRatingTo(inputValue));
    }
  };

  const handleChangeYearFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue)) {
      dispatch(setYearFrom(inputValue));
    }
  };

  const handleChangeYearTo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue)) {
      dispatch(setYearTo(inputValue));
    }
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = e.target;
      dispatch(setKeyword(inputValue));
  };

  return (
    <div>
      <div>
        <span>Жанр</span>
        <Select
          style={{width: 200}}
          showSearch
          placeholder="Выберите жанр"
          onChange={handleChangeGenres}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={T.Filters.genres}
        />
      </div>
      <div>
        <span>Страна</span>
        <Select
          style={{width: 200}}
          showSearch
          placeholder="Выберите страну"
          onChange={handleChangeCountries}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={T.Filters.countries}
        />
      </div>
      <div>
        <span>Сортировка</span>
        <Select
          defaultValue={orderId}
          style={{ width: 200 }}
          onChange={handleChangeOrder}
          options={T.Filters.order}
        />
      </div>
      <div>
        <span>Тип видеоматериала</span>
        <Select
          defaultValue={typeId}
          style={{ width: 200 }}
          onChange={handleChangeType}
          options={T.Filters.type}
        />
      </div>
      <div>
        <span>Рейтинг от</span>
        <Input
          value={ratingFrom}
          onChange={handleChangeRatingFrom}
          placeholder="Введите рейтинг"
          maxLength={3}
        />
      </div>
      <div>
        <span>Рейтинг до</span>
        <Input
          value={ratingTo}
          onChange={handleChangeRatingTo}
          placeholder="Введите рейтинг"
          maxLength={3}
        />
      </div>
      <div>
        <span>Год от</span>
        <Input
          value={yearFrom}
          onChange={handleChangeYearFrom}
          placeholder="Введите год"
          maxLength={4}
        />
      </div>
      <div>
        <span>Год до</span>
        <Input
          value={yearTo}
          onChange={handleChangeYearTo}
          placeholder="Введите год"
          maxLength={4}
        />
      </div>
      <div>
        <span>Ключевое слово</span>
        <Input
          value={keyword}
          onChange={handleChangeKeyword}
          placeholder="Введите ключевое слово"
          maxLength={16}
        />
      </div>
      <Button>Найти фильмы</Button>
    </div>
  )
}