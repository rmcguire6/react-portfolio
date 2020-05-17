import React from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavBar/NavBar'
import './main.scss';
function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
