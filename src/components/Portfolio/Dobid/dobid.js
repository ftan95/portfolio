import './dobid.scss';
import dobidImg from '../../../assets/images/dobid.png'

const Dobid = () => {
    return (
        <div className='project-container'>
            <a href='https://www.donatebid.com/'><h1>Dobid</h1></a>
            <img alt='dobid' src={dobidImg}/>
            <p>Fronend Developer</p>
            <p>April 2020 - Current Santa Clara, CA</p>
            <ul>
                <li>
                    Implemented the UI designs of the new company's website and deployed on AWS Amplify, 
                    improving user traffic
                </li>
                <li>
                    Managed engineering team of 4 by assessing the skill level of teammates to delegate the right tasks; 
                    efforts resulted in 20% productivity increased
                </li>
                <li>
                    Collaborated with backend team to create functionalities on the UI including setting up user accounts
                    and payment system
                </li>
                <li>
                    Programmed Stripe API in PHP to client's website to establish connection with company website to enable
                    transactions between the two, resulted in first client for the business and incoming revenue
                </li>
                <li>
                    Adopted NPM to manipulate and manage modules and install necessary development tools such as
                    react-router-dom and react-redux
                </li>
                <li>
                    Used React Hooks to avoid callback hell
                </li>
                <li>
                    Successfully created and implemented new features such as add/delete campaign functions in the
                    application using React web components aimed for collaborative user editing
                </li>
                <li>
                    Managed onClick events such as add/remove campaigns in the form, checkout, and report triggered by users
                    created with Bootstrap and React components
                </li>
                <li>
                    Created reusable components and stylesheets following given UI standards and guidelines
                </li>
                <li>
                    Managed version control with Git
                </li>
                <li>
                    Participated in daily Scrum meetings, Springs and other Agile/Scrum project management workflow
                </li>
            </ul>
        </div>
    )
}

export default Dobid;