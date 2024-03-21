'use client';

import { Form } from '@/app/components/FormComponent/Form';
import { SliderComponent } from './components/SliderComponent/SliderComponent';
import { SectionAboutUs } from '@/components/SectionAbout/SectionAboutUs';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <SectionAboutUs />
      <Form />
      <SliderComponent partners={false} title="Success stories" />
      <SliderComponent partners={true} title="Our partners" />
      <FAQ />
      <Footer />
    </main>
  );
}
