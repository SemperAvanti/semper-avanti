import React from 'react';
import Menu from '../components/Menu/Menu';
import { Form } from '@/app/components/FormComponent/Form';
import { SliderComponent } from '../components/SliderComponent/SliderComponent';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import TrainingPage from '../components/TrainingsPage/TrainingsPage';
import Gallery from '../components/GalleryComponent/Gallery';
import HomePage from '../components/Home/Home';
import { ContactUs } from '../components/ContactUs/ContactUs';
import SectionAboutUs from '../components/SectionAboutUs/SectionAboutUs';
import Aqu from '../components/AquComponent/Aqu';

type Params = {
  locale: string;
};

export default async function Home({ params: { locale } }: { params: Params }) {
  return (
    <>
      <Menu />
      <main>
        <HomePage locale={locale} />
        <SectionAboutUs locale={locale} />
        <Aqu locale={locale} />
        <TrainingPage locale={locale} />
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
