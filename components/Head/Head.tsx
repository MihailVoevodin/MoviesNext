import Head from 'next/head';
import {FC} from 'react';

interface IProps {
    title: string;
}

export const HeadComponent: FC<IProps> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};
