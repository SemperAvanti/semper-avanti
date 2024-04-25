/* eslint-disable */
// @ts-nocheck


import { Swiper, SwiperSlide } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import React from 'react';
 
import { StoriesCard } from '../StoriesCard/StoriesCard';

import { PartnersCard } from '../PartnersCard/PartnersCard';

 import SwiperCore, { Autoplay }   from 'swiper';

 SwiperCore.use([Autoplay]);

type SliderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSwiper: (swiperInstance: any) => void;
  spaceBetween: number;
  slidesPerView: number;
  slidesOffset: number;
  initialSlide: number;
  partners: boolean;
};

export const Slider: React.FC<SliderProps> = ({
  setSwiper,
  spaceBetween,
  slidesPerView,
  initialSlide,
  partners,
}) => {
  
  return (
    <section className="Slider__container">
      <div className="slider">
        {
          <>
            <Swiper
              className="swiper"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSwiper={(swiperInstance: any) => setSwiper(swiperInstance)}
              autoplay={{
                delay: 2300,
                disableOnInteraction: false,
              }}
              loop
              centeredSlides={true}
              //Parametry mogą być różne w zależności od slidera
              spaceBetween={spaceBetween}
              slidesPerView={slidesPerView}
              slidesOffsetBefore={170}
              initialSlide={initialSlide}
              centeredSlidesBounds={true}
              allowTouchMove
            >
              {/* poglądowe, zamienić na dynamiczne  */}

              {partners
                ? Array.from({ length: 8 }).map((_, index) => (
                    <SwiperSlide key={index} className="swiper__slide">
                      <PartnersCard />
                    </SwiperSlide>
                  ))
                : Array.from({ length: 12 }).map((_, index) => (
                    <SwiperSlide key={index} className="swiper__slide">
                      <StoriesCard />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </>
          // Gotowy loader
          // <div className="loader__container">
          //   <span className="loader"></span>
          // </div>
        }
      </div>
    </section>
  );
};
