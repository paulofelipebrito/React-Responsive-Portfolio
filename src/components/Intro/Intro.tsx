import './Intro.css';

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      {/* left name side */}
      <div className="intro-left">
        <div className="intro-name">
          {/* yahan change hy darkmode ka */}
          <span>Hey! I am</span>
          <span>Paulo Felipe Brito</span>
          <span>Fullstack Developer with high
            level of experience in web designing 
            and developing applications, producting 
            the Quality work
          </span>
        </div>

        <button className="intro-button button">
          Hire me
        </button>
        {/* social icons */}
        <div className="intro-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      {/* right image side */}
      <div className="intro-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector" />
        <img src={boy} alt="Self" />
        {/* animation */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

