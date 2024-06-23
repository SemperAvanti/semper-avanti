import React from 'react';
import Menu from '../components/Menu/Menu';
import Form from '@/app/components/FormComponent/Form';
import { SliderComponent } from '../components/SliderComponent/SliderComponent';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import TrainingPage from '../components/TrainingsPage/TrainingsPage';
import Gallery from '../components/GalleryComponent/Gallery';
import HomePage from '../components/Home/Home';
import { ContactUs } from '../components/ContactUs/ContactUs';
import SectionAboutUs from '../components/SectionAboutUs/SectionAboutUs';
import Aqu from '../components/AquComponent/Aqu';
import { getContent, getMultipleContent } from '@/lib/api';
import {
  ISectionStoriesTitleFields,
  ISectionPartnersTitleFields,
  ISectionTrainingsCardFields,
} from '@/contentfulTypes/contentful';

type Params = {
  locale: string;
};

export default async function Home({ params: { locale } }: { params: Params }) {
  const { sectionTitle } = await getContent<ISectionStoriesTitleFields>(
    'sectionStoriesTitle',
    locale,
  );

  const trainingsCards = await getMultipleContent<ISectionTrainingsCardFields>(
    'sectionTrainingsCard',
    locale,
  );

  const { sectionTitle: secondSectionTitle } =
    await getContent<ISectionPartnersTitleFields>(
      'sectionPartnersTitle',
      locale,
    );

  return (
    <>
      <Menu />
      <main>
        <HomePage locale={locale} trainingCards={trainingsCards}/>
        <SectionAboutUs locale={locale} />
        <Aqu locale={locale} />
        <TrainingPage locale={locale} trainingCards={trainingsCards}/>
        <Gallery />
        <Form locale={locale} />
        <SliderComponent partners={false} title={sectionTitle} id="Stories" />
        <SliderComponent
          partners={true}
          title={secondSectionTitle}
          id="Partners"
        />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
