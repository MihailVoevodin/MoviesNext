import {FC, ReactNode} from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Aside from 'components/Aside';
import styles from 'components/Layout/Layout.module.css';

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Aside />
            <div className={styles.layoutContent}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )

}

export default Layout;
