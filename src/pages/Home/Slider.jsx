import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="p-4 text-black">
      <div className="flex flex-col lg:flex-row  gap-4 mx-auto ">
        <div className=" px-4 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-1">
          <h1 className="text-5xl font-extrabold text-black">
            Build it with Mamba
          </h1>
          <p className="my-8">
            <span className="font-medium text-black">
              Modular and versatile.
            </span>
            Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
            cumque at.
          </p>
          <button
            type="button"
            className="w-1/2 p-4 font-semibold rounded text-white bg-black"
          >
            Join the waitlist
          </button>

          <div className="flex flex-col lg:flex-row mt-8">
            <div className="stat w-3/5 " >
              <div className="stat-value">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat ">
              <div className="stat-value">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
        <div className="object-cover lg:w-1/2 rounded-md  dark:bg-gray-50 ">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg'></img></SwiperSlide>
        
      </Swiper>
        </div>
      </div>
      
    </section>
  );
};

export default Slider;
