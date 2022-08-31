import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/portfolio" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
