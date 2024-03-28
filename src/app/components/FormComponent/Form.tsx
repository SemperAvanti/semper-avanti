'use client';

import './Form.scss';

import { useState, useEffect } from 'react';
import { ZodType, z } from 'zod';

import { FormData } from '@/app/types/zod';
import Button from '@/app/components/Button/Button';
import { Input } from '@/app/components/InputComponent/Input';
import { Checkbox } from '@/app/components/CheckboxComponent/Checkbox';
import { FormInitialData } from '@/app/types/formInitialData';
import { initialData } from '@/app/components/FormComponent/helper';
import { ZodErrorMessage } from '@/app/types/ZodErrorMessage';
import { Modal } from '@/app/components/ModalComponent/Modal';

const formDataSchema: ZodType<FormData> = z.object({
  fullname: z.string().min(5, 'Error name').trim(),
  email: z.string().email('Error email format').trim(),
});

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormInitialData>(initialData);
  const [errors, setErrors] = useState<ZodErrorMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [btnColor, setBtnColor] = useState<
    'primary' | 'secondary' | 'deactivated'
  >('primary');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailSentSuccessfully, setIsEmailSentSuccessfully] = useState(true);

  useEffect((): void => {
    setErrors([]);
  }, [formData.fullname, formData.email]);

  const handlerInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value, type } = event.target;

    setFormData(
      (prev): FormInitialData => ({
        ...prev,
        [name]: type === 'checkbox' ? !prev.checkbox : value,
      }),
    );
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      formDataSchema.parse(formData);
      console.log(formData);

      setFormData(initialData);

      setIsSubmitting(true);
      setBtnColor('deactivated');

      setIsSubmitting(false);
      setBtnColor('primary');
      setEmailAddress(formData.email);
      setIsModalOpen(true);
      setIsEmailSentSuccessfully(true);
    } catch (error) {
      //TODO poprawić to
      // setErrors(error.errors);

      if (formData.email.length > 0 && btnColor === 'primary') {
        setIsModalOpen(false);
        setIsEmailSentSuccessfully(false);
        setEmailAddress(formData.email);
      }
    }

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error(`Failed to send email Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const closeModal = (value: boolean): void => {
    setIsModalOpen(value);
  };

  return (
    <section className="form" id="Home-form">
      <header className="form__header">
        <h2 className="form__header-text">Get more in our info package</h2>
        <p className="form__header-sub-text">
          Fill the form and we`ll send you a file with actual information
        </p>
      </header>
      <div className="form__container">
        <form className="form__form-elem" onSubmit={handleSubmit} method="post">
          <div className="form__form-elem-container">
            <div className="form__input-elem">
              <Input
                htmlFor="full Name"
                label="Full Name *"
                type="text"
                name="fullname"
                value={formData.fullname}
                placeholder="John Doe"
                onChange={handlerInput}
                isDisabled={isSubmitting}
                errors={errors}
              />
            </div>
            <div className="form__input-elem">
              <Input
                htmlFor="email"
                label="Email *"
                type="text"
                name="email"
                value={formData.email}
                placeholder="aqe@email.com"
                onChange={handlerInput}
                isDisabled={isSubmitting}
                errors={errors}
              />
            </div>
            <div className="form__input-elem">
              <Input
                htmlFor="country"
                label="Country"
                type="text"
                name="country"
                value={formData.country}
                placeholder="Poland"
                onChange={handlerInput}
                isDisabled={isSubmitting}
              />
            </div>
            <div className="form__input-elem">
              <Checkbox
                onChange={handlerInput}
                checked={formData.checkbox}
                name="checkbox"
                htmlFor={''}
                value={''}
              />
              <p className="form__checkbox-text">
                I agree to receive the information about the further courses
                from AQE
              </p>
            </div>
            <div className="form__input-elem">
              <Button variant={'secondary'} name="Get info package" />
            </div>
          </div>
        </form>
      </div>

      <Modal
        sendedEmail={emailAddress}
        isOpen={isModalOpen}
        isEmailSentSuccessfully={isEmailSentSuccessfully}
        closeModal={closeModal}
      />
    </section>
  );
};
