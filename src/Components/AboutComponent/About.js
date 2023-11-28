import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        Pagination={{ clickable: true }}
      >
        {props.about.map(({ image }, index) => {
          return (
            <SwiperSlide key={index} id="slider">
              <img src={image} alt="image" className="slider_image" />
              <div id="slider-text">
                <h1>About me!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Nullam dictum felis eu pede mollis, kjgfruin kjhggf,Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit. justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. Nullam
                  aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                  mollis, kjgfruin kjhggf
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
