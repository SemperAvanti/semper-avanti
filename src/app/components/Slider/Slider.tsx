import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper as SwiperInstance } from 'swiper/types';
import { useParams } from 'next/navigation';
import { getMultipleContent } from '@/lib/api';
import { StoriesCard } from '../StoriesCard/StoriesCard';
import { PartnersCard } from '../PartnersCard/PartnersCard';
import {
  ISectionStoriesCardFields,
  ISectionPartnersCardFields,
} from '@/contentfulTypes/contentful';

SwiperCore.use([Autoplay]);

type SliderProps = {
  setSwiper: (swiperInstance: SwiperInstance) => void;
  slidesPerView: number | 'auto';
  initialSlide: number;
  offset: string | undefined;
  spaceBetween?: number;
  slidesOffset?: number;
  partners: boolean;
};

export const Slider: React.FC<SliderProps> = ({
  setSwiper,
  slidesPerView,
  initialSlide,
  offset,
  partners,
}) => {
  const { locale } = useParams<{ locale: string }>();
  const [storiesCards, setStoriesCards] = useState<ISectionStoriesCardFields[]>(
    [],
  );
  const [partnersCards, setPartnersCards] = useState<
    ISectionPartnersCardFields[]
  >([]);

  useEffect(() => {
    getMultipleContent<ISectionStoriesCardFields>('sectionStoriesCard', locale)
      .then((storiesData) => {
        setStoriesCards(storiesData || []);
      })
      .catch((error) => {
        console.error('Error fetching stories cards:', error);
        setStoriesCards([]);
      });

    getMultipleContent<ISectionPartnersCardFields>(
      'sectionPartnersCard',
      locale,
    )
      .then((partnersData) => {
        setPartnersCards(partnersData || []);
      })
      .catch((error) => {
        console.error('Error fetching partners cards:', error);
        setPartnersCards([]);
      });
  }, [locale]);

  return (
    <section className="Slider__container" style={{ marginLeft: offset }}>
      <div className="slider">
        <Swiper
          className="swiper"
          onSwiper={(swiperInstance: SwiperInstance) =>
            setSwiper(swiperInstance)
          }
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          loop
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={slidesPerView}
          initialSlide={initialSlide}
          allowTouchMove
        >
          {partners
            ? partnersCards.map((card, index) => (
                <SwiperSlide key={index} className="swiper__slide">
                  <PartnersCard {...card} offset={offset} />
                </SwiperSlide>
              ))
            : storiesCards.map((card, index) => (
                <SwiperSlide key={index} className="swiper__slide">
                  <StoriesCard {...card} offset={offset} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};
