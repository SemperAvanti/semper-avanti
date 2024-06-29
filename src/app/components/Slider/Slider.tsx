import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper/types';
import { useParams } from 'next/navigation';
import { getMultipleContent } from '@/lib/api';
import { StoriesCard } from '../StoriesCard/StoriesCard';
import { PartnersCard } from '../PartnersCard/PartnersCard';
import {
  ISectionStoriesCardFields,
  ISectionPartnersCardFields,
} from '@/contentfulTypes/contentful';

const STORIES_NUMBER_OF_CARDS = 16;
const PARTNERS_NUMBER_OF_CARDS = 16;

type SliderProps = {
  setSwiper: (swiperInstance: SwiperInstance) => void;
  initialSlide: number;
  spaceBetween?: number;
  partners: boolean;
};

export const Slider: React.FC<SliderProps> = ({
  setSwiper,
  initialSlide,
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
        setStoriesCards(
          repeatSliderCards(storiesData || [], STORIES_NUMBER_OF_CARDS),
        );
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
        setPartnersCards(
          repeatSliderCards(partnersData || [], PARTNERS_NUMBER_OF_CARDS),
        );
      })
      .catch((error) => {
        console.error('Error fetching partners cards:', error);
        setPartnersCards([]);
      });
  }, [locale]);

  const repeatSliderCards = <T,>(
    array: T[],
    intendedCardsNumber: number,
  ): T[] => {
    if (array.length < intendedCardsNumber) {
      const repeatedArray = [...array];
      while (repeatedArray.length < intendedCardsNumber) {
        repeatedArray.push(...array);
      }
      return repeatedArray;
    }
    return array;
  };

  return (
    <section className="Slider__container">
      <div className="slider">
        <Swiper
          centeredSlides={true}
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          autoplay={{
            delay: 2700,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper"
          slidesPerView={1}
          breakpoints={{
            '@0.2': {
              slidesPerView: 2,
            },
            '@0.4': {
              slidesPerView: 2.5,
            },
            '@0.6': {
              slidesPerView: 3,
            },
            '@0.8': {
              slidesPerView: 3.5,
            },
            '@1': {
              slidesPerView: 4,
            },
            '@1.2': {
              slidesPerView: 4.5,
            },
            '@1.4': {
              slidesPerView: 5,
            },
            '@1.6': {
              slidesPerView: 5.5,
            },
            '@1.8': {
              slidesPerView: 6,
            },
            '@2': {
              slidesPerView: 6.5,
            },
          }}
          initialSlide={initialSlide}
          loop={true}
          allowTouchMove
          centerInsufficientSlides={true}
          simulateTouch={false}
        >
          {partners
            ? partnersCards.map((card, index) => (
                <SwiperSlide key={index} className="swiper__slide">
                  <PartnersCard {...card} />
                </SwiperSlide>
              ))
            : storiesCards.map((card, index) => (
                <SwiperSlide key={index} className="swiper__slide">
                  <StoriesCard {...card} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};
