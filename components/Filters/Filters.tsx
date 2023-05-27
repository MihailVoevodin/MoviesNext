import { Input, Select } from "antd";
import { T } from "Common/Text";
import { ChangeEvent, useState } from "react";
import { Regulars } from "Common/Consts";

export const Filters = () => {
  const [ratingFrom, setRatingFrom] = useState<string>('')
  const [ratingTo, setRatingTo] = useState<string>('')
  const [yearFrom, setYearFrom] = useState<string>('')
  const [yearTo, setYearTo] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')

  const onChangeGenres = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangeCountries = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleChangeOrder = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleChangeType = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleChangeRatingFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue) || inputValue === '.') {
      setRatingFrom(inputValue);
    }
  };

  const handleChangeRatingTo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue) || inputValue === '.') {
      setRatingTo(inputValue);
    }
  };

  const handleChangeYearFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue)) {
      setYearFrom(inputValue);
    }
  };

  const handleChangeYearTo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = Regulars.numbers;
    if (reg.test(inputValue)) {
      setYearTo(inputValue);
    }
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = e.target;
      setKeyword(inputValue);
  };

  return (
    <div>
      <div>
        <span>Жанр</span>
        <Select
          style={{width: 200}}
          showSearch
          placeholder="Выберите жанр"
          onChange={onChangeGenres}
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
          onChange={onChangeCountries}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={T.Filters.countries}
        />
      </div>
      <div>
        <span>Сортировка</span>
        <Select
          defaultValue={T.Filters.order[0].value}
          style={{ width: 200 }}
          onChange={handleChangeOrder}
          options={T.Filters.order}
        />
      </div>
      <div>
        <span>Тип видеоматериала</span>
        <Select
          defaultValue={T.Filters.type[0].value}
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
    </div>
  )
}