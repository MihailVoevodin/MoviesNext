import { FC, ChangeEvent, useEffect, useState } from "react";
import Head from "next/head";
import {ConfigProvider, Input} from 'antd';
import {T} from "Common/Text";
import styles from 'pages/persons/Persons.module.scss';
import { IPerson } from "Common/Models";
import { Services } from "Common/Services";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {setPersonsList, setName} from "store/personsSlice";

const {Search} = Input;

/**
 * @param persons Массив моделей личности.
 */
interface IProps {
  persons: IPerson[];
}

const Persons: FC<IProps> = () => {
  const {name, persons} = useAppSelector((state) => state.persons);
  const [searchName, setSearchName] = useState<string>(name)
  const router = useRouter();
  const dispatch = useAppDispatch();
  console.log(persons);

  const onPersonsSearch = (name: string) => {
    dispatch(setName(name))
    void router.replace(`/persons?name=${name}`);
  }

  const handleChangeSearchValue = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearchName(target.value);
  }

  useEffect(() => {
      const personsResponse = async () => {
        await Services.getPersonsList(name)
          .then((response) => dispatch(setPersonsList(response.data.items)));

      }
      void personsResponse();

  }, [name])

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
          <Search className={styles.search} value={searchName} onChange={handleChangeSearchValue} placeholder={T.Persons.searchPlaceholder} onSearch={onPersonsSearch} style={{ width: 300 }} />
          <ul className={styles.personsList}>
            {persons.map((person: IPerson) =>
            <li key={person.kinopoiskId}>
              <Link href={`name/${person.kinopoiskId}`}>
                <Image src={person.posterUrl} width={150} height={200} alt={person.nameEn} />
                <div className={styles.personName}>{person.nameRu}</div>
              </Link>
            </li>)}
          </ul>
        </main>
      </ConfigProvider>
    </>
  )
}

export default Persons;
