import React, { useContext } from "react";
import { useTheme, Theme } from "../../context/ThemeContext";

import "./Experience.css";

const Experience = () => {
  const { theme } = useTheme();
console.log(theme);
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: theme === 'Dark' ? 'var(--orange)':''}}>8+</div>
        <span  style={{color: theme === 'Dark'?'Light':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: theme === 'Dark'?'var(--orange)':''}}>20+</div>
        <span  style={{color: theme === 'Dark'?'Light':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: theme === 'Dark'?'var(--orange)':''}}>5+</div>
        <span  style={{color: theme === 'Dark'?'Light':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
