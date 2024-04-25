'use client';

import React from 'react';
import Menu from './components/Menu/Menu';
import { Form } from '@/app/components/FormComponent/Form';
import { Aqu } from '@/app/components/AquComponent/Aqu';
import { SliderComponent } from './components/SliderComponent/SliderComponent';
import { SectionAboutUs } from '@/app/components/SectionAboutUs/SectionAboutUs';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import TrainingPage from './components/TrainingsPage/TrainingsPage';
import Gallery from './components/GalleryComponent/Gallery';
import HomePage from './components/Home/Home';
import { ContactUs } from './components/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <HomePage />
        <SectionAboutUs />
        <Aqu />
        <TrainingPage />
        <Gallery />
        <Form />
        <SliderComponent
          partners={false}
          title="Success stories"
          id="Stories"
        />
        <SliderComponent partners={true} title="Our partners" id="Partners" />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
