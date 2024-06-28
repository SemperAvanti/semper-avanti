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
        <SectionAboutUs id={IDS_FOR_HASH_ROUTING[1]} />
        <Aqu />
        <TrainingPage id={IDS_FOR_HASH_ROUTING[2]} />
        <Gallery id={IDS_FOR_HASH_ROUTING[3]} />
        <Form />
        <SliderComponent
          partners={false}
          title={sectionTitle}
          id={IDS_FOR_HASH_ROUTING[4]}
        />
        <SliderComponent
          partners={true}
          title={secondSectionTitle}
          id={IDS_FOR_HASH_ROUTING[5]}
        />
        <FAQ id={IDS_FOR_HASH_ROUTING[6]} />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
