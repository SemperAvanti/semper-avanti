/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
'use client';

import './Form.scss';

import { useState, useEffect } from 'react';
import { ZodType, z, ZodIssue, ZodError } from 'zod';

import { FormData } from '@/app/types/zod';
import Button from '@/app/components/Button/Button';
import { Input } from '@/app/components/InputComponent/Input';
import { Checkbox } from '@/app/components/CheckboxComponent/Checkbox';
import { FormInitialData } from '@/app/types/formInitialData';
import { initialData } from '@/app/components/FormComponent/helper';
import { Modal } from '@/app/components/ModalComponent/Modal';
import { getContent } from '@/lib/api';

type ContentState = {
  getMoreInOurInfoPackage: string | null;
  fillTheForm: string | null;
  iAgreeToReceive: string | null;
  fullName: string | null;
  country: string | null;
};

const toStringOrNull = (value: any, fallback: string = ''): string | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean')
    return value.toString();
  return fallback;
};
import {
  DescriptionsMotion,
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

const formDataSchema: ZodType<FormData> = z.object({
  fullname: z.string().min(5, 'Error name').trim(),
  email: z.string().email('Error email format').trim(),
});

export default function Form({ locale }: { locale: string }) {
  const [formData, setFormData] = useState<FormInitialData>(initialData);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [btnColor, setBtnColor] = useState<
    'primary' | 'secondary' | 'deactivated'
  >('secondary');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailSentSuccessfully, setIsEmailSentSuccessfully] = useState(true);
  const [content, setContent] = useState<ContentState>({
    getMoreInOurInfoPackage: null,
    fillTheForm: null,
    iAgreeToReceive: null,
    fullName: null,
    country: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: unknown = await getContent('sectionForm', locale);

        // Type guard to check if result is an object and has the expected properties
        if (
          typeof result === 'object' &&
          result !== null &&
          'getMoreInOurInfoPackage' in result &&
          'fillTheForm' in result &&
          'iAgreeToReceive' in result &&
          'fullName' in result &&
          'country' in result
        ) {
          const data = result as Record<string, any>;

          setContent({
            getMoreInOurInfoPackage: toStringOrNull(
              data.getMoreInOurInfoPackage,
            ),
            fillTheForm: toStringOrNull(data.fillTheForm),
            iAgreeToReceive: toStringOrNull(data.iAgreeToReceive),
            fullName: toStringOrNull(data.fullName),
            country: toStringOrNull(data.country),
          });
        } else {
          throw new Error('Unexpected result format');
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, [locale]);

  useEffect((): void => {
    setErrors([]);
  }, [formData.fullname, formData.email]);

  const handlerInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    const onlyLettersRegex = /^[A-Za-z\u00C0-\u024F\s]*$/;
    const emailRegex = /^[a-zA-Z0-9.@_-]*$/;

    switch (name) {
      case 'fullname':
      case 'country':
        if (onlyLettersRegex.test(value)) {
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        break;

      case 'email':
        if (emailRegex.test(value)) {
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        break;

      case 'checkbox':
        setFormData((prev) => ({
          ...prev,
          [name]: !prev.checkbox,
        }));
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      formDataSchema.parse(formData);
      setFormData(initialData);
      setIsSubmitting(true);
      setBtnColor('deactivated');

      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setEmailAddress(formData.email);
        setIsModalOpen(true);
        setIsEmailSentSuccessfully(true);
      } else {
        setEmailAddress(formData.email);
        setIsModalOpen(true);
        setIsEmailSentSuccessfully(false);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(error.errors);
      }
      setIsModalOpen(false);
      setIsEmailSentSuccessfully(false);
      setEmailAddress(formData.email);
    }
  };

  const closeModal = (value: boolean): void => {
    setIsModalOpen(value);
    setIsSubmitting(false);
    setBtnColor('secondary');
  };

  return (
    <section className="form" id="Home-form">
      <header className="form__header">
        <SectionTitleMotion>
          <h2 className="form__header-text">
            {content.getMoreInOurInfoPackage as string}
          </h2>
        </SectionTitleMotion>
        <DescriptionsMotion>
          <p className="form__header-sub-text">
            {content.fillTheForm as string}
          </p>
        </DescriptionsMotion>
      </header>
      <div className="form__container">
        <form className="form__form-elem" onSubmit={handleSubmit} method="post">
          <ListMotion>
            <div className="form__form-elem-container">
              <div className="form__input-elem">
                <ItemMotion>
                  <Input
                    htmlFor="full Name"
                    label={`${content.fullName as string} *`}
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    placeholder="John Doe"
                    onChange={handlerInput}
                    isDisabled={isSubmitting}
                    errors={errors}
                  />
                </ItemMotion>
              </div>
              <div className="form__input-elem">
                <ItemMotion>
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
                </ItemMotion>
              </div>
              <div className="form__input-elem">
                <ItemMotion>
                  <Input
                    htmlFor="country"
                    label={content.country as string}
                    type="text"
                    name="country"
                    value={formData.country}
                    placeholder="Poland"
                    onChange={handlerInput}
                    isDisabled={isSubmitting}
                  />
                </ItemMotion>
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
                  {content.iAgreeToReceive as string}
                </p>
              </div>
              <div className="form__input-elem">
                <Button
                  variant={formData.checkbox ? btnColor : 'deactivated'}
                  locale={locale}
                />
              </div>
            </div>
          </ListMotion>
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
}
