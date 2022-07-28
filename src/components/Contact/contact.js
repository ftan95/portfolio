import { useEffect, useRef, useState} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sguvlzk', 'template_yvo045b', refForm.current, 'es9engfYuRy326tv-')
        .then(() => {
            alert('Message successfully sent');
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again');
        })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} letterClass={letterClass}/>
                    </h1>
                    <p>
                        I am interested in any opportunities - especially ambitious or large projects.
                        However, if you have other request or question, don't hesitate to contact me
                        using the form below
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='subject' name="subject" type='text' required />
                                </li>
                                <li>
                                   <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Frederick Tan,
                    <br />
                    USA,
                    <br />
                    2222 Kenneth Street <br />
                    Modesto, CA 95351 <br />
                    <span>kpftan95@gmail.com <br/> (424)-216-3269</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[37.612446760569604, -121.0293324311141]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[37.612446760569604, -121.0293324311141]}>
                            <Popup>My Location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;