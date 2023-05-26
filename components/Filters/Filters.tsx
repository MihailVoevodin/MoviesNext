import { Select } from 'antd';
import { T } from "Common/Text";

export const Filters = () => {

  const onChangeGenres = (id: string) => {
    console.log(`selected ${id}`);
  };

  const onSearchGenres = (id: string) => {
    console.log('search:', id);
  };

  return (
    <div>
      <Select
        showSearch
        placeholder="Выберите жанр"
        onChange={onChangeGenres}
        onSearch={onSearchGenres}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={T.Filters.genres}
      />
      <Select
        showSearch
        placeholder="Выберите страну"
        onChange={onChangeGenres}
        onSearch={onSearchGenres}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={T.Filters.countries}
      />
    </div>
  )
}