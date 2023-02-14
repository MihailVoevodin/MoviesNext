import Navbar from './Navbar/Navbar';
import Image from 'next/image';
import logo from '../public/logo.png';

const Aside = () => {
    return (
        <aside>
            <div>
                <Image width={200} height={80} src={logo} alt='Movies' />
            </div>
            <Navbar />
        </aside>
    )
}

export default Aside;
