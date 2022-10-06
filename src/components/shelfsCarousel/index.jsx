import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Product from "../product";
import useWindowWidth from "../../components/windowWidth";

import product1 from "../../assets/product-img-1.png";
import product2 from "../../assets/product-img-2.png";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

const ShelfsCarousel = () => {
  const { width } = useWindowWidth();

  return (
    <div className={`home__shelfsCarousel${width > 1024 ? " container" : ""}`}>
      <h2>As Mais Pedidas</h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="home__shelfsCarousel__slider"
        slidesPerView={1}
        spaceBetween={14}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide>
          <Product
            img={product1}
            name="Faux Suede Mini Skirt"
            price={500}
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product2}
            name="Ruched Rose Print Mini Skirt"
            price={320}
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product1}
            name="Faux Suede Mini Skirt"
            price={500}
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product2}
            name="Ruched Rose Print Mini Skirt"
            price={320}
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product1}
            name="Faux Suede Mini Skirt"
            price={500}
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product2}
            name="Ruched Rose Print Mini Skirt"
            price={320}
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product1}
            name="Faux Suede Mini Skirt"
            price={500}
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product2}
            name="Ruched Rose Print Mini Skirt"
            price={320}
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product1}
            name="Faux Suede Mini Skirt"
            price={500}
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            url="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={product2}
            name="Ruched Rose Print Mini Skirt"
            price={320}
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            url="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShelfsCarousel;
