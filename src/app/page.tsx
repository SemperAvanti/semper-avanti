import React from 'react';
import Menu from './components/Menu/Menu';
import { Form } from '@/app/components/FormComponent/Form';
import { Aqu } from '@/app/components/AquComponent/Aqu';
import { SliderComponent } from './components/SliderComponent/SliderComponent';
import { SectionAboutUs } from '@/components/SectionAbout/SectionAboutUs';

import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import HomePage from './components/Home/Home';

export default function Home() {
  return (
    <main>
      <Menu />
      <HomePage />
      <SectionAboutUs />
      <Form onClose={handleCloseModal} />
      <Modal
        sendedEmail={emailAddress}
        isOpen={isModalOpen}
        closeModal={closeModal}
        isEmailSentSuccessfully={isEmailSentSuccessfully}
      />

      <SliderComponent partners={false} title="Success stories" />
      <SliderComponent partners={true} title="Our partners" />
      <FAQ />
      <Footer />
    </main>
  );
}
