import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useTheme, Theme } from '../../context/ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  
  const handleClick = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  }

  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      
      <div
        className="t-button"
        style={theme === Theme.Dark ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
