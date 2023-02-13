import Image from 'next/image';
import logo from '../public/logo.png';

const Aside = () => {
    return (
        <div>
            <div>
                <Image src={logo} alt='Movies' />
            </div>
        </div>
    )
}

export default Aside;
