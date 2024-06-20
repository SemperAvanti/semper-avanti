import React from 'react';
import Menu from '../components/Menu/Menu';
import { Form } from '@/app/components/FormComponent/Form';
import { Aqu } from '@/app/components/AquComponent/Aqu';
import { SliderComponent } from '../components/SliderComponent/SliderComponent';
import { SectionAboutUs } from '@/app/components/SectionAboutUs/SectionAboutUs';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import TrainingPage from '../components/TrainingsPage/TrainingsPage';
import Gallery from '../components/GalleryComponent/Gallery';
import HomePage from '../components/Home/Home';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { fetchIds } from '@/lib/fetchIds';
import { getContent } from '@/lib/api';
import {
  ISectionStoriesTitleFields,
  ISectionPartnersTitleFields,
} from '@/contentfulTypes/contentful';

type Params = {
  locale: string;
};

export default async function Home({ params: { locale } }: { params: Params }) {
  const ids = await fetchIds(locale);
  const { sectionTitle } = await getContent<ISectionStoriesTitleFields>(
    'sectionStoriesTitle',
    locale,
  );

  const { sectionTitle: secondSectionTitle } =
    await getContent<ISectionPartnersTitleFields>(
      'sectionPartnersTitle',
      locale,
    );

  return (
    <>
      <Menu locale={locale} />
      <main>
        <HomePage locale={locale} />
        <SectionAboutUs />
        <Aqu />
        <TrainingPage />
        <Gallery />
        <Form />
        <SliderComponent
          partners={false}
          title={sectionTitle}
          id={
            (ids &&
              ids.navItems[4]?.title.toLowerCase().replace(/\s+/g, '-')) ||
            ''
          }
        />
        <SliderComponent
          partners={true}
          title={secondSectionTitle}
          id={
            (ids &&
              ids.navItems[5]?.title.toLowerCase().replace(/\s+/g, '-')) ||
            ''
          }
        />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
