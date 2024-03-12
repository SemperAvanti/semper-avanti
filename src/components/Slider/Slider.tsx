'use client';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import React from 'react';
import { SliderCard } from '../SliderCard/SliderCard';

type SliderProps = {
  setSwiper: (swiperInstance: SwiperClass) => unknown;
};

export const Slider: React.FC<SliderProps> = ({ setSwiper }) => {
  return (
    <section className="container">
      <div className="slider">
        {
          <>
            <Swiper
              className="swiper"
              onSwiper={(swiperInstance: SwiperClass) =>
                setSwiper(swiperInstance)
              }
              spaceBetween={20}
              slidesPerView={5}
            >
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <SliderCard />
              </SwiperSlide>
            </Swiper>
          </>

          // <div className="loader__container">
          //   <span className="loader"></span>
          // </div>
        }
      </div>
    </section>
  );
};
