import React from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import Intro from './components/Intro/Intro'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
