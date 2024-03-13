'use client';

import React, { useState } from 'react';
import { Form } from '@/app/components/FormComponent/Form';
import { Modal } from '@/app/components/ModalComponent/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState(null);
  const [isEmailSandWithoutTrubble, setIsEmailSandWithoutTrubble];

  const handleCloseModal = (value: string, error: boolean): void => {
    setIsModalOpen(!isModalOpen);
    setEmailAddress(value);
  };

  const closeModal = (value: boolean): void => {
    setIsModalOpen(!value);

    console.log(value, 'value');
  };

  return (
    <main>
      <Form onClose={handleCloseModal} />
      <Modal
        sendedEmail={emailAddress}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </main>
  );
}
