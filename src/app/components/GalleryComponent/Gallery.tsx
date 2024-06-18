'use client';
import React, { useEffect, useState } from 'react';
import './gallery.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {
  DescriptionsMotion,
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

const Gallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any | null>(null);
  const [width, setWidth] = useState(0);

  const updateSlidesPerView = () => {
    if (swiper && swiper.params) {
      switch (true) {
        case width < 385:
          swiper.params.slidesPerView = 1;
          swiper.params.spaceBetween = 0;

          break;

        case width < 600:
          swiper.params.slidesPerView = 1;

          break;

        case width < 700:
          swiper.params.slidesPerView = 1.6;

          break;

        case width < 750:
          swiper.params.slidesPerView = 1.8;

          break;

        case width < 815:
          swiper.params.slidesPerView = 1.9;

          break;

        case width < 850:
          swiper.params.slidesPerView = 2.1;

          break;

        case width < 920:
          swiper.params.slidesPerView = 2.2;

          break;

        case width < 950:
          swiper.params.slidesPerView = 2.3;

          break;

        case width < 985:
          swiper.params.slidesPerView = 2.4;

          break;

        case width < 1035:
          swiper.params.slidesPerView = 2.6;

          break;

        case width < 1039:
          swiper.params.slidesPerView = 2.7;

          break;

        default:
          swiper.update();
      }
    }
  };

  useEffect(() => {
    updateSlidesPerView();
  }, [width, updateSlidesPerView]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [width]);

  const Buttons = () => {
    return (
      <div className="button-container">
        <button
          onClick={() => swiper && swiper.slidePrev()}
          className="button__left"
          title="button__left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect
              width="48"
              height="48"
              rx="12"
              transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.25 24C44.25 23.4033 44.013 22.831 43.591 22.409C43.169 21.9871 42.5967 21.75 42 21.75L11.43 21.75L19.59 13.59C19.9874 13.1635 20.2038 12.5994 20.1935 12.0165C20.1832 11.4336 19.9471 10.8774 19.5349 10.4652C19.1226 10.0529 18.5665 9.81679 17.9836 9.8065C17.4007 9.79622 16.8365 10.0126 16.41 10.41L4.41 22.41C3.98865 22.8319 3.75198 23.4038 3.75198 24C3.75198 24.5963 3.98865 25.1682 4.41 25.59L16.41 37.59C16.8365 37.9875 17.4007 38.2038 17.9836 38.1936C18.5665 38.1833 19.1226 37.9471 19.5349 37.5349C19.9471 37.1227 20.1832 36.5665 20.1935 35.9836C20.2038 35.4007 19.9874 34.8366 19.59 34.41L11.43 26.25L42 26.25C42.5967 26.25 43.169 26.013 43.591 25.591C44.013 25.1691 44.25 24.5968 44.25 24Z"
              fill="#6C6C6C"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper && swiper.slideNext()}
          className="button__right"
          title="button__right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect
              x="48"
              width="48"
              height="48"
              rx="12"
              transform="rotate(90 48 0)"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.75 24C3.75 23.4033 3.98705 22.831 4.40901 22.409C4.83096 21.9871 5.40326 21.75 6 21.75L36.57 21.75L28.41 13.59C28.0126 13.1635 27.7962 12.5994 27.8065 12.0165C27.8168 11.4336 28.0529 10.8774 28.4651 10.4652C28.8774 10.0529 29.4335 9.81679 30.0164 9.8065C30.5993 9.79622 31.1635 10.0126 31.59 10.41L43.59 22.41C44.0113 22.8319 44.248 23.4038 44.248 24C44.248 24.5963 44.0113 25.1682 43.59 25.59L31.59 37.59C31.1635 37.9875 30.5993 38.2038 30.0164 38.1936C29.4335 38.1833 28.8774 37.9471 28.4651 37.5349C28.0529 37.1227 27.8168 36.5665 27.8065 35.9836C27.7962 35.4007 28.0126 34.8366 28.41 34.41L36.57 26.25L6 26.25C5.40326 26.25 4.83096 26.013 4.40901 25.591C3.98705 25.1691 3.75 24.5968 3.75 24Z"
              fill="#6C6C6C"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section>
      <div className="gallery__container container" id="Gallery">
        <SectionTitleMotion>
          <h2 className="section-title gallery__title">Gallery</h2>
        </SectionTitleMotion>
        <div className="description-container">
          <DescriptionsMotion>
            <p className="description-text">
              Step into a world where learning comes to life and inspiration
              knows no bounds. In this vibrant space, we invite you to explore
              captivating moments captured during our educational camps for
              teachers.
            </p>
          </DescriptionsMotion>
        </div>
        {width >= 1040 && (
          <div className="container">
            <ListMotion>
              <div className="gallery__pictures">
                <ItemMotion>
                  <div className="gallery__picture gallery__picture--first">
                    <Image
                      className="gallery__picture--image"
                      alt="Malta"
                      src="/images/gallery-malta.jpg"
                      sizes="(max-width: 640px) 640px"
                      width={357}
                      height={444}
                    />
                    <div className="gallery__picture--description">
                      Malta, 2020
                    </div>
                  </div>
                </ItemMotion>
                <ItemMotion>
                  <div className="gallery__picture">
                    <Image
                      className="gallery__picture--image"
                      alt="Ireland"
                      src="/images/gallery-ireland.jpg"
                      sizes="(max-width: 640px) 640px"
                      width={357}
                      height={444}
                    />

                    <div className="gallery__picture--description">
                      Ireland, 2022
                    </div>
                  </div>
                </ItemMotion>
                <ItemMotion>
                  <div className="gallery__picture gallery__picture--last">
                    <Image
                      className="gallery__picture--image"
                      alt="Canary Isl"
                      src="/images/gallery-canary.jpg"
                      sizes="(max-width: 640px) 640px"
                      width={357}
                      height={444}
                    />

                    <div className="gallery__picture--description">
                      Canary Isl, 2023
                    </div>
                  </div>
                </ItemMotion>
              </div>
            </ListMotion>
          </div>
        )}
      </div>
      {width < 1040 && (
        <>
          <div className="gallery__pictures--mobile">
            {width < 700 && <Buttons />}

            <Swiper
              className="swiper"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSwiper={(swiperInstance: any) => setSwiper(swiperInstance)}
              autoplay={{
                delay: 2300,
                disableOnInteraction: true,
              }}
              loop
              spaceBetween={10}
              slidesPerView={2}
              initialSlide={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
            >
              <>
                <SwiperSlide className="Gallery--SwiperSlide Gallery--SwiperSlide--1">
                  <div className="gallery__picture gallery__picture-1">
                    <Image
                      className="gallery__picture--image "
                      alt="malta"
                      src="/images/gallery-malta.jpg"
                      width={357}
                      height={444}
                    />
                    <div className="gallery__picture--description">
                      Malta, 2020
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="Gallery--SwiperSlide Gallery--SwiperSlide--2">
                  <div className="gallery__picture ">
                    <Image
                      className="gallery__picture--image"
                      alt="malta"
                      src="/images/gallery-ireland.jpg"
                      width={357}
                      height={444}
                    />
                    <div className="gallery__picture--description">
                      Ireland, 2022
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="Gallery--SwiperSlide Gallery--SwiperSlide--3">
                  <div className="gallery__picture">
                    <Image
                      className="gallery__picture--image"
                      alt="malta"
                      src="/images/gallery-canary.jpg"
                      width={357}
                      height={444}
                    />

                    <div className="gallery__picture--description">
                      Canary Isl, 2023
                    </div>
                  </div>
                </SwiperSlide>
              </>
            </Swiper>
          </div>
        </>
      )}
    </section>
  );
};

export default Gallery;
