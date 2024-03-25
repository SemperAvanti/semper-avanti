import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import React from 'react';
import cocaCola from '../../../img/cocacola.svg';
import { StoriesCard } from '../StoriesCard/StoriesCard';
import Image from 'next/image';

type SliderProps = {
  setSwiper: (swiperInstance: SwiperClass) => void;
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
  slidesOffset,
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
              onSwiper={(swiperInstance: SwiperClass) =>
                setSwiper(swiperInstance)
              }
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop
              //Parametry mogą być różne w zależności od slidera
              spaceBetween={spaceBetween}
              slidesPerView={slidesPerView}
              slidesOffsetBefore={slidesOffset}
              initialSlide={initialSlide}
            >
              {/* poglądowe, zamienić na dynamiczne  */}
              {partners ? (
                <>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide swiper-partners">
                    <Image src={cocaCola} alt="cocaCola" />
                    <h6 className="accented-body">Coca Cola</h6>
                  </SwiperSlide>
                </>
              ) : (
                <>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                  <SwiperSlide className="swiper__slide">
                    <StoriesCard />
                  </SwiperSlide>
                </>
              )}
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
