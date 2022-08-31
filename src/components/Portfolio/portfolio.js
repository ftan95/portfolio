import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import Cenergi from './cenergi';
import Dobid from './Dobid/dobid';
import './portfolio.scss';
import ValleyWorx from './valleyworx';
import Loader from 'react-loaders';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [show, setShow] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const switchHandler = (id) => {
        setLoading(true);
        setTimeout(() => {
            setShow(id);
            setLoading(false);
        }, 1000)
    }

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={15}/> 
                    </h1>
                    <div className='experience'>
                        <ul>
                            <li onClick={() => switchHandler(1)}><p>Dobid</p></li>
                            <li onClick={() => switchHandler(2)}><p>CEnergi</p></li>
                            <li onClick={() => switchHandler(3)}><p>ValleyWorx</p></li>
                        </ul>
                    </div>
                </div>
                <div className='exp-container'>
                    {show === 1 && !loading && (<Dobid />)}
                    {show === 2 && !loading && (<Cenergi />)}
                    {show === 3 && !loading && (<ValleyWorx />)}
                    {loading && <h1 className='exp-load'>Loading...</h1>}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio;