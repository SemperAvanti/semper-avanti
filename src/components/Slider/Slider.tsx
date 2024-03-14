import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import React from 'react';
import { SliderCard } from '../SliderCard/SliderCard';

type SliderProps = {
  setSwiper: (swiperInstance: SwiperClass) => void;
  spaceBetween: number;
  slidesPerView: number;
  slidesOffset: number;
  initialSlide: number;
};

export const Slider: React.FC<SliderProps> = ({
  setSwiper,
  spaceBetween,
  slidesPerView,
  slidesOffset,
  initialSlide,
}) => {
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
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              //Parametry mogą być różne w zależności od slidera
              spaceBetween={spaceBetween}
              slidesPerView={slidesPerView}
              slidesOffsetBefore={slidesOffset}
              initialSlide={initialSlide}
            >
              {/* poglądowe, zamienić na dynamiczne  */}

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
          // Gotowy loader
          // <div className="loader__container">
          //   <span className="loader"></span>
          // </div>
        }
      </div>
    </section>
  );
};
