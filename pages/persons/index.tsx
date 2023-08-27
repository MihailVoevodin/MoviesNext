import {ConfigProvider, Input} from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from 'pages/persons/Persons.module.scss';
import {FC, ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setName, loadPersonsList} from 'store/personsSlice';
import {Spinner} from 'Common/Loading';
import {IPerson} from 'Common/Models';
import {T} from 'Common/Text';

const {Search} = Input;

/**
 * @param persons Массив моделей личности.
 */
interface IProps {
    persons: IPerson[];
}

const Persons: FC<IProps> = () => {
    const {name, persons, isError, isLoading} = useAppSelector((state) => state.persons);
    const [searchName, setSearchName] = useState<string>(name);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const onPersonsSearch = (name: string) => {
        dispatch(setName(name));
        void router.replace(T.Pages.Persons.searchLink(name));
    };

    const handleChangeSearchValue = ({target}: ChangeEvent<HTMLInputElement>) => {
        setSearchName(target.value);
    };

    useEffect(() => {
        dispatch(loadPersonsList(name));
    }, [name]);

    if (isError) {
        void router.replace('/500');
    }

    return (
        <>
            <Head>
                <title>{T.Pages.Persons.label}</title>
            </Head>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            colorPrimaryHover: '#ff6200',
                        },
                        Button: {
                            colorPrimaryHover: '#ff6200',
                        },
                    },
                }}
            >
                <main>
                    <Search
                        className={styles.search}
                        value={searchName}
                        onChange={handleChangeSearchValue}
                        placeholder={T.Persons.searchPlaceholder}
                        onSearch={onPersonsSearch}
                        style={{width: 300}}
                    />
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <ul className={styles.personsList}>
                            {persons.map((person: IPerson) => (
                                <li key={person.kinopoiskId}>
                                    <Link href={T.Pages.Persons.link(person.kinopoiskId)}>
                                        <Image src={person.posterUrl} width={150} height={200} alt={person.nameEn} />
                                        <div className={styles.personName}>{person.nameRu}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </main>
            </ConfigProvider>
        </>
    );
};

export default Persons;
