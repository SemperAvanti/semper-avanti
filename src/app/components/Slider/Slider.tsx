/* eslint-disable */
// @ts-nocheck

import { Swiper, SwiperSlide } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { StoriesCard } from '../StoriesCard/StoriesCard';

import { PartnersCard } from '../PartnersCard/PartnersCard';

import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

type SliderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSwiper: (swiperInstance: any) => void;
  slidesPerView: number | string;
  initialSlide: number;
  partners: boolean;
  offset: string;
  spaceBetween?: number;
  slidesOffset?: number;

};

export const Slider: React.FC<SliderProps> = ({
  setSwiper,
  slidesPerView,
  initialSlide,
  partners,
  offset,
}) => {
  return (
    <section
      className="Slider__container"
      style={{marginLeft: offset}}
    >
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
              centeredSlidesBounds={true}
              //Parametry mogą być różne w zależności od slidera
              slidesPerView={slidesPerView}
              initialSlide={initialSlide}
              allowTouchMove
            >
              {/* poglądowe, zamienić na dynamiczne  */}

              {partners
                ? Array.from({ length: 8 }).map((_, index) => (
                    <SwiperSlide key={index} className="swiper__slide">
                      <PartnersCard offset={offset}/>
                    </SwiperSlide>
                  ))
                : Array.from({ length: 12 }).map((_, index) => (
                    <SwiperSlide key={index} className="swiper__slide">
                      <StoriesCard offset={offset}/>
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
