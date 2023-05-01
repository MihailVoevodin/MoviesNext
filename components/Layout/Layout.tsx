import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import styles from 'components/Layout/Layout.module.css';
import {FC, ReactNode} from 'react';

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
