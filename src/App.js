import React from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
        <NavBar />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
