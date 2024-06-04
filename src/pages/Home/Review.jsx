import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const App = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
          width: '100%',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
        }}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" style={{ display: 'block', width: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
 