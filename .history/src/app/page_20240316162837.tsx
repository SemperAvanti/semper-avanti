import React, { useState } from 'react';

import { Form } from '@/app/components/FormComponent/Form';
import { Modal } from '@/app/components/ModalComponent/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  cosnt[(emailAddress, useEmailAddress)] = useState('');

  return (
    <main>
      <Form />
      <Modal />
    </main>
  );
}
