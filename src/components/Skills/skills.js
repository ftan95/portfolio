import './skills.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import Loader from 'react-loaders'
import Javascript from '../../assets/images/Javascript.png'
import Typescript from '../../assets/images/Typescript.png'
import HTML from '../../assets/images/HTML.png'
import Cpp from '../../assets/images/Cpp.png'
import aws from '../../assets/images/aws.png'
import firebase from '../../assets/images/firebase.png'
import git from '../../assets/images/git.png';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Expert in frontend development including technologies like HTML5,
            CSS3, Javascript, AngularJS, React, Typescript, Bootstrap, SASS, Git
            etc.
          </p>
          <p>
            I'm not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support, even after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            Visit my Github for some of my personal projects. Also you can check
            out my resume on this <a href='https://drive.google.com/file/d/1ii-l0lgTIACuYuGO0YNC6IDQCMTbmf6O/view?usp=sharing'>link</a>
          </p>
        </div>
        <div className="skills">
          <div className="skill-box">
            <h1>Languages</h1>
            <div className="skill-list">
              <img src={Javascript} alt="javascript" />
              <img src={Typescript} alt="typescript" />
              <img src={HTML} alt="html" />
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt="css" />
              <img src='https://static.wixstatic.com/media/8c7843_d6eea4b2deaf42ea8a2262bd0c91f061~mv2.jpg/v1/fill/w_651,h_400,al_c,q_90/file.jpg' alt="java" />
              <img src={Cpp} alt="cpp" />
            </div>
          </div>
          <div className="skill-box">
            <h1>Database & Cloud</h1>
            <div className="skill-list">
              <img src='https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png' alt="MySQL" />
              <img src={firebase} alt="Firebase" />
              <img src={aws} alt="AWS" />
            </div>
          </div>
          <div className="skill-box">
            <h1>Web Development</h1>
            <div className="skill-list">
              <img src='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg' alt="Angular" />
              <img src='https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png' alt="Bootstrap" />
              <img src='https://mui.com/static/logo.png' alt="MUI" />
              <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt="sass" />
              <img src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' alt="nodeJS" />
              <img src='https://repository-images.githubusercontent.com/259018719/0663e880-8a02-11ea-9c75-44ca9a90cc1f' alt="Spring" />
            </div>
          </div>
          <div className="skill-box">
            <h1>Integration and Deployment</h1>
            <div className="skill-list">
              <img
                src={git}
                alt="git"
              />
              <img
                src="https://www.docker.com/wp-content/uploads/2022/05/Docker_Temporary_Image_Google_Blue_1080x1080_v1.png"
                alt="docker"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Atlassian-Logo-2010s.png"
                alt="jira"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
