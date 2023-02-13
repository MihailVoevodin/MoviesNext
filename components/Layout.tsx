import {FC, ReactNode} from 'react';
import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import styles from '/styles/Layout.module.css';

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Aside />
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )

}

export default Layout;
