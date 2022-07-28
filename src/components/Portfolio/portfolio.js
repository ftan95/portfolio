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

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={15}/> 
                    </h1>
                    <div className='experience'>
                        <ul>
                            <li onClick={() => setShow(1)}><p>Dobid</p></li>
                            <li onClick={() => setShow(2)}><p>CEnergi</p></li>
                            <li onClick={() => setShow(3)}><p>ValleyWorx</p></li>
                        </ul>
                    </div>
                    {/* <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15}/> 
                    </h1> */}
                </div>
                <div className='exp-container'>
                    {show === 1 && (<Dobid />)}
                    {show === 2 && (<Cenergi />)}
                    {show === 3 && (<ValleyWorx />)}
                    <Loader type="pacman" />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio;