'use client';
import './scss/SliderComponent.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Slider } from '../Slider/Slider';

const SWIPER_OFFSET = '24px';

import { SectionTitleMotion } from '../MotionTemplates/templates';


type SliderComponentProps = {
  partners: boolean;
  id: string;
  title: string;
};

export const SliderComponent: React.FC<SliderComponentProps> = ({
  partners,
  id,
  title,
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__header">
          <SectionTitleMotion>
            <h2 className="H2">{title}</h2>
          </SectionTitleMotion>
          <div className="buttons">
            <button title="Prev" onClick={() => swiper && swiper.slidePrev()}>
              <svg
                width="42"
                height="30"
                viewBox="0 0 42 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.25 15C41.25 14.4033 41.0129 13.831 40.591 13.409C40.169 12.9871 39.5967 12.75 39 12.75L8.42997 12.75L16.59 4.59003C16.9874 4.1635 17.2038 3.59936 17.1935 3.01646C17.1832 2.43356 16.9471 1.8774 16.5348 1.46516C16.1226 1.05292 15.5664 0.816787 14.9835 0.806502C14.4006 0.796218 13.8365 1.01259 13.41 1.41003L1.40997 13.41C0.988623 13.8319 0.751954 14.4038 0.751954 15C0.751954 15.5963 0.988623 16.1682 1.40997 16.59L13.41 28.59C13.8365 28.9875 14.4006 29.2038 14.9835 29.1936C15.5664 29.1833 16.1226 28.9471 16.5348 28.5349C16.9471 28.1227 17.1832 27.5665 17.1935 26.9836C17.2038 26.4007 16.9874 25.8366 16.59 25.41L8.42997 17.25L39 17.25C39.5967 17.25 40.169 17.013 40.591 16.591C41.0129 16.1691 41.25 15.5968 41.25 15Z"
                  fill="#6C6C6C"
                />
              </svg>
            </button>
            <button title="Next" onClick={() => swiper && swiper.slideNext()}>
              <svg
                width="42"
                height="30"
                viewBox="0 0 42 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.750026 15C0.750026 14.4033 0.987079 13.831 1.40904 13.409C1.83099 12.9871 2.40329 12.75 3.00003 12.75L33.57 12.75L25.41 4.59003C25.0126 4.1635 24.7962 3.59936 24.8065 3.01646C24.8168 2.43356 25.0529 1.8774 25.4652 1.46516C25.8774 1.05292 26.4336 0.816787 27.0165 0.806502C27.5994 0.796218 28.1635 1.01259 28.59 1.41003L40.59 13.41C41.0114 13.8319 41.248 14.4038 41.248 15C41.248 15.5963 41.0114 16.1682 40.59 16.59L28.59 28.59C28.1635 28.9875 27.5994 29.2038 27.0165 29.1936C26.4336 29.1833 25.8774 28.9471 25.4652 28.5349C25.0529 28.1227 24.8168 27.5665 24.8065 26.9836C24.7962 26.4007 25.0126 25.8366 25.41 25.41L33.57 17.25L3.00003 17.25C2.40329 17.25 1.83099 17.013 1.40904 16.591C0.987079 16.1691 0.750026 15.5968 0.750026 15Z"
                  fill="#6C6C6C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Slider
        setSwiper={setSwiper}
        slidesPerView="auto"
        initialSlide={1}
        partners={partners}
        offset={SWIPER_OFFSET}
      />
    </section>
  );
};
