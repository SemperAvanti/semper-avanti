import React from 'react';
import Menu from '../components/Menu/Menu';
import Form from '@/app/components/FormComponent/Form';
import { SliderComponent } from '../components/SliderComponent/SliderComponent';
import FAQ from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import TrainingPage from '../components/TrainingsPage/TrainingsPage';
import Gallery from '../components/GalleryComponent/Gallery';
import HomePage from '../components/Home/Home';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { fetchIds } from '@/lib/fetchIds';
import SectionAboutUs from '../components/SectionAboutUs/SectionAboutUs';
import Aqu from '../components/AquComponent/Aqu';
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

  const IDS_FOR_HASH_ROUTING: string[] = [];

  if (ids) {
    ids.navItems.forEach((item) => {
      IDS_FOR_HASH_ROUTING.push(item.title.toLowerCase().replace(/\s+/g, '-'));
    });
  }

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
      <Menu links={ids} />
      <main>
        <HomePage locale={locale} id={IDS_FOR_HASH_ROUTING[0]} />
        <SectionAboutUs locale={locale} id={IDS_FOR_HASH_ROUTING[1]} />
        <Aqu locale={locale} />
        <TrainingPage locale={locale} id={IDS_FOR_HASH_ROUTING[2]} />
        <Gallery id={IDS_FOR_HASH_ROUTING[3]} />
        <Form locale={locale} />
        <SliderComponent partners={false}
          title={sectionTitle}
          id={IDS_FOR_HASH_ROUTING[4]} 
        />
        <SliderComponent
          partners={true}
          title={secondSectionTitle}
          id={IDS_FOR_HASH_ROUTING[5]}
        />
        <FAQ locale={locale} id={IDS_FOR_HASH_ROUTING[6]} />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
