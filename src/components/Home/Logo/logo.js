import './logo.scss';
import LogoTitle from '../../../assets/images/IMG_0996.jpeg';

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoTitle} alt='F' />
        </div>
    )
}

export default Logo;