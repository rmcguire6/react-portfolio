import React from 'react';
import Intro from './components/Intro/Intro'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Intro />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
