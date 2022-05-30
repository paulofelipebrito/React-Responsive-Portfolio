import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { useTheme } from "../../context/ThemeContext";

const Portfolio = () => {
  const { theme } = useTheme();

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: theme === "Dark" ?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="HOC Project" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
