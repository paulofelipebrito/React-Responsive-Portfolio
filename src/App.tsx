import './App.css'
import { useState } from 'react';
import Experience from './components/Experience/Experience';

import { ThemeContext, Theme } from './context/ThemeContext';

import { Intro } from './components/Intro/Intro';
import { Navbar } from "./components/Navbar/Navbar";
import Services from './components/Services/Services';

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Navbar />
        <Intro />
        <Services />
        <Experience />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
