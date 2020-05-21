import React from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
