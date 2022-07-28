import cenergiImg from '../../assets/images/cenergi.png'

const Cenergi = () => {
    return (
        <div className='project-container'>
            <a href='https://wved.ucdavis.edu/#!/'><h1>CEnergi</h1></a>
            <img alt='cenergi' src={cenergiImg}/>
            <p>Fronend Developer</p>
            <p>June 2018 - December 2019 Davis, CA</p>
            <ul>
                <li>
                    Adapted the designer's wireframes to create the UI for an online survey used to gather data
                    on public transportation use
                </li>
                <li>
                    Overhauled UI of West Village Dashboard to increase the amount of data presented by 15% and in a more
                    interactive way
                </li>
                <li>
                    Updated the landing page of a vehicle explorer application to include an electric vehicle otpion to give
                    more users more choices to compare vehicles
                </li>
                <li>
                    Took responsibilities for SPA development using HTML5, CSS3, Javascript, Angular and Bootstrap
                </li>
                <li>
                    Made use of CSS preprocessor such as SCSS to create style components reused across the application
                </li>
                <li>
                    Implemented visually pleasing and real-time charts through using Material UI library
                </li>
                <li>
                    Used Git to fulfill version control of the project and avoid unexpected conflicts among development
                    endeavors
                </li>
                <li>
                    Cooperated with Agile/Scrum development team to deliver regular updates regarding project progress to
                    management administrates
                </li>
            </ul>
        </div>
    )
}

export default Cenergi;