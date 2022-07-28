import valley from '../../assets/images/valleyworx.png';

const ValleyWorx = () => {
    return (
        <div className='project-container'>
            <h1>ValleyWorx</h1>
            <img alt='valley' src={valley}/>
            <p>Fronend Developer</p>
            <p>February 2017 - February 2018 Modesto, CA</p>
            <ul>
                <li>
                    Involved in the design of webpages and developed new features and improved the performance for an existing
                    web application using HTML5, CSS3, Javascript, React
                </li>
                <li>
                    Used states, props, and events in React to create an EV Explorer application to provide seamless user experience
                </li>
                <li>
                    Created components and enriched UI libraries consisting of new website elements such as buttons, checkbox,
                    input area, dropdown menus
                </li>
                <li>
                    Performed Unit-testing using Jest and React testing library
                </li>
                <li>
                    Managed version control throughout the development of the project by utilizing Git
                </li>
                <li>
                    Engaged Agile/Scrum methodolgies in project management process by participating in Scrum meetings and Sprints
                </li>
            </ul>
        </div>
    )
}

export default ValleyWorx;