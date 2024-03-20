'use client';
import React, { useState } from 'react';
import { Form } from '@/app/components/FormComponent/Form';
import { Modal } from '@/app/components/ModalComponent/Modal';
import { SectionAboutUs } from '@/components/SectionAbout/SectionAboutUs';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailSentSuccessfully, setIsEmailSentSuccessfully] = useState(true);

  const handleCloseModal = (value: string, error: boolean): void => {
    setIsModalOpen(!isModalOpen);
    setEmailAddress(value);
    setIsEmailSentSuccessfully(error);
  };

  const closeModal = (value: boolean): void => {
    setIsModalOpen(!value);
  };

  return (
    <main>
      <SectionAboutUs />
      <Form onClose={handleCloseModal} />
      <Modal
        sendedEmail={emailAddress}
        isOpen={isModalOpen}
        closeModal={closeModal}
        isEmailSentSuccessfully={isEmailSentSuccessfully}
      />
    </main>
  );
}



