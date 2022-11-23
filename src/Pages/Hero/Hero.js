import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../Image/hero.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";

import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(87, 85, 85, 0.52), rgba(10, 10, 10, 0.73)),url(${image})`,
          }}
        ></div>
        <SwiperSlide>
          <div className=" md:m-40 mt-40 ">
            <div className="text" data-swiper-parallax="-100">
              <div
                className="lg:text-9xl text-5xl font-bold"
                data-swiper-parallax="-300"
              >
                AFFORDABLE PRICING
              </div>
              <div className="mt-5">
                <Link to={"/Categories"}>
                  <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800">
                    See Categories
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:m-40 mt-40 ">
            <div className="text " data-swiper-parallax="-100">
              <div
                className="lg:text-9xl text-5xl font-bold"
                data-swiper-parallax="-300"
              >
                SELL OLD BOOK
              </div>

              <div className="mt-5">
                <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800 ">
                  <Link to={"/Categories"}>See Categories</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:m-40 mt-40 ">
            <div className="text " data-swiper-parallax="-100">
              <div
                className="lg:text-9xl text-5xl font-bold"
                data-swiper-parallax="-300"
              >
                GREAT CUSTOMER SERVICE
              </div>

              <div className="mt-5">
                <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800 ">
                  <Link to={"/Categories"}>See Categories</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
