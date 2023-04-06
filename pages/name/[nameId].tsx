import {ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
import {PersonAbout} from 'components/Person/PersonAbout';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from 'pages/name/Name.module.scss';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {nameId} = context.params;
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${nameId}`);
    const person = response.data;
    return {
        props: {person},
    };
}

const Person = ({person}: any) => {
    const router = useRouter();
    console.log(router);

    console.log(person);
    return (
        <>
            <Head>
                <title>{person.nameRu}</title>
            </Head>
            <main>
                <div className="backBtn">
                    <button onClick={() => router.back()}>
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <div className={styles.person}>
                    <div className={styles.personContainer}>
                        <div>
                            <Image width={300} height={450} src={person.posterUrl} alt="." />
                        </div>
                        <div>
                            <PersonAbout person={person} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Person;
