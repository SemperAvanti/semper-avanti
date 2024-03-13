'use client';

import React, { useState } from 'react';
import { Form } from '@/app/components/FormComponent/Form';
import { Modal } from '@/app/components/ModalComponent/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, seEmailAddress] = useState(null);

  const handleCloseModal = (value: string): void => {
    setIsModalOpen(!isModalOpen);
    useEmailAddress(value);
  };

  return (
    <main>
      <Form onClose={handleCloseModal} />
      {isModalOpen && <Modal data={formData} sendedEmail={emailAddress} />}
    </main>
  );
}
