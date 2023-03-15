import axios from 'axios';
import Head from 'next/head';

axios.defaults.headers['X-API-KEY'] = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';

export async function getServerSideProps(context: any) {
    const {nameId} = context.params
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${nameId}`);
    const person = response.data;
    return {
        props: {person},
    }
}

const Person = ({person}: any) => {
    console.log(person)
    return (
        <>
            <Head>
                <title>{person.nameRu}</title>
            </Head>
            <main>
                
            </main>
        </>
    )
}

export default Person
