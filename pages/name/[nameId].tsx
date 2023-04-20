import {ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
import {IPerson} from 'Common/Models';
import {PersonAbout} from 'components/Person/PersonAbout';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/name/Name.module.scss';
import mainStyles from 'styles/main.module.scss';
import {ParsedUrlQuery} from 'querystring';
import React, {ReactNode} from 'react';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

type Props = {
    person: IPerson;
};

interface Params extends ParsedUrlQuery {
    nameId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {nameId} = context.params!;
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${nameId}`);
    const person = response.data;
    return {
        props: {person},
    };
};

const Person: React.FC<Props> = ({person}) => {
    const router = useRouter();
    console.log(person);

    return (
        <>
            <Head>
                <title>{person.nameRu}</title>
            </Head>
            <main>
                <div className={mainStyles.backBtn}>
                    <button onClick={() => router.back()}>
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <div className={styles.person}>
                    <div className={styles.personContainer}>
                        <div>
                            <Image width={300} height={450} src={person.posterUrl} alt={person.nameRu} />
                        </div>
                        <div>
                            <PersonAbout person={person} />
                        </div>
                    </div>
                    <div className={styles.personFacts}>
                        <h3 className={styles.personFactsTitle}>Факты</h3>
                        <ul>
                            {person.facts.map((fact, id: number) => (
                                <li key={id} className={styles.personFact}>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Person;
