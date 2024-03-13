'use client';

import React, { useState } from 'react';
import { Form } from '@/app/components/FormComponent/Form';
import { Modal } from '@/app/components/ModalComponent/Modal';

export default function Home: React.FC<props>() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState(null);

  const handleCloseModal = (value: string): void => {
    setIsModalOpen(!isModalOpen);
    setEmailAddress(value);
  };

  return (
    <main>
      <Form onClose={handleCloseModal} />
      {isModalOpen && <Modal data={formData} sendedEmail={emailAddress} />}
    </main>
  );
}
