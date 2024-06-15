import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="mb-6">
      <div className=" space-y-4 text-center">
        <h1 className="text-4xl font-semibold leading-tight">Our <span className="text-[#65bc7b]"> Gallery</span></h1>
        <p className="px-4 sm:px-8 lg:px-24">
          Explore our exclusive collection of luxury homes, each offering
          stunning architecture, modern amenities, and unique design features.
          From sprawling estates with breathtaking views to chic urban lofts,
          our gallery showcases the finest properties available.{" "}
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        style={{
          width: "100%",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/2yWNLv4/building-5523630-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/bQTv2bt/architecture-5729165-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/1qMZ1KW/real-estate-6893060-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/ZLwgLHM/interior-4226020-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/R3Dddz2/real-estate-1689967-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/9bh0L6x/interior-design-6893063-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/sqyJn6m/tower-4964748-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/NVfsgBH/beautiful-4226034-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/WVLF5By/architecture-437049-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/nn2BpkS/sky-4911028-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px",
          }}
        >
          <img
            src="https://i.ibb.co/JqxRvNz/stairs-419558-1280.jpg"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
