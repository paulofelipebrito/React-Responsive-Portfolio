import './App.css'
import { useState } from 'react';
import Experience from './components/Experience/Experience';

import { ThemeContext, Theme } from './context/ThemeContext';

import { Intro } from './components/Intro/Intro';
import { Navbar } from "./components/Navbar/Navbar";
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div 
        className="App"
        style={{
          background: theme === "Dark" ? "black" : "",
          color: theme === "Dark" ? "white" : "",
        }}
        >
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
