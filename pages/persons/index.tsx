import {FC} from 'react';
import Head from "next/head";
import {ConfigProvider, Input} from 'antd';
import {T} from "Common/Text";
import styles from 'pages/persons/Persons.module.scss';

const {Search} = Input;

const Persons: FC = () => {

  const onPersonsSearch = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <Head>
        <title>Личности</title>
      </Head>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              colorPrimaryHover: '#ff6200',
            },
            Button: {
              colorPrimaryHover: '#ff6200',
            }
          },
        }}
      >
        <main>
          <Search className={styles.search} placeholder={T.Persons.searchPlaceholder} onSearch={onPersonsSearch} style={{ width: 300 }} />
        </main>
      </ConfigProvider>
    </>
  )
}

export default Persons;
