import Slider from "react-slick";
import useWindowWidth from '../../components/windowWidth';

import banner from "../../assets/main-banner.png";
import bannerMobile from "../../assets/main-banner-mobile.png";

import "./style.scss";

const MainBanner = () => {
  const { width } = useWindowWidth();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="home__mainBanner">
      <Slider {...settings}>
        {
          [...Array(5)].map((_, i) => {
            return (
              <div key={i} className="home__mainBanner__item">
                <img src={width < 1024 ? bannerMobile : banner} alt="Banner" />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default MainBanner;