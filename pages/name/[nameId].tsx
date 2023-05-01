import {PersonAbout} from 'components/Person/PersonAbout';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/name/Name.module.scss';
import {ParsedUrlQuery} from 'querystring';
import {FC} from 'react';
import mainStyles from 'styles/main.module.scss';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {IPerson} from 'Common/Models';
import {Services} from 'Common/Services';
import {T} from 'Common/Text';

type Props = {
    person: IPerson;
};

interface Params extends ParsedUrlQuery {
    nameId: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const {nameId} = context.params!;
    const personResponse = await Services.getPerson(nameId);
    const person = personResponse.data;
    return {
        props: {person},
    };
};

const Person: FC<Props> = ({person}) => {
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
                    {person.facts.length > 0 && (
                        <div className={styles.personFacts}>
                            <h3 className={styles.personFactsTitle}>{T.Pages.Facts.label}</h3>
                            <ul>
                                {person.facts.map((fact, id: number) => (
                                    <li key={id} className={styles.personFact}>
                                        {fact}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Person;
