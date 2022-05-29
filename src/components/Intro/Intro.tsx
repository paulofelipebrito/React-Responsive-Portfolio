import './Intro.css';

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatinDiv from '../FloatingDiv/FloatingDiv';

import { motion } from "framer-motion";

export const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="intro-left">
        <div className="intro-name">
          {/* yahan change hy darkmode ka */}
          <span>Hey! I Am</span>
          <span>Paulo Felipe Brito</span>
          <span>
            FullStack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button intro-button">Hire me</button>
        {/* social icons */}
        <div className="intro-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      {/* right image side */}
      <div className="intro-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="Photo of Paulo Felipe Brito" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={Crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={Thumbup} text1="Best Design" text2="Award" />
        </motion.div>

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

