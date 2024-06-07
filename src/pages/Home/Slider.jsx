import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section className="p-4 text-black">
      <div className="flex flex-col lg:flex-row  gap-4 mx-auto ">
        <div className=" px-4 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-1">
          <h1 className="text-5xl font-extrabold text-black">
          Dream Homes Real Estate
          </h1>
          <p className="my-8">
            <span className="font-medium text-black">
              Modular and versatile.
            </span>
            Find your perfect home with us - the best properties in the best locations.
          </p>
          <Link to='/all-property'><button
            type="button"
            className="w-1/2 p-4 font-semibold rounded text-white bg-black"
          >
            Join Us
          </button></Link>
          

          <div className="flex flex-col lg:flex-row mt-8">
            <div className="stat w-3/5 " >
              <div className="stat-value">2.6K</div>
              <div className="stat-desc text-gray-800">2% more User than last month</div>
            </div>
            <div className="stat ">
              <div className="stat-value">5.6K</div>
              <div className="stat-desc text-gray-800">6% more sales than last month</div>
            </div>
          </div>
        </div>
        <div className="object-cover lg:w-1/2 rounded-md  dark:bg-gray-50 ">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        loop={true}
        className="mySwiper"
        
      >
        <SwiperSlide><img src='https://i.ibb.co/nfFpWFY/istockphoto-1409298953-612x612.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/18kcXSH/house-loan-concept-isolated-white-background-53876-33025.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/bdHL3dn/depositphotos-21515189-stock-photo-agent-with-house-model-and.webp'></img></SwiperSlide>
        
      </Swiper>
        </div>
      </div>
      
    </section>
  );
};

export default Slider;
