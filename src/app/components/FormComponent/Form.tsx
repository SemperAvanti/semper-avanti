'use client';

import { useState, useEffect } from 'react';
import { FormData } from '@/app/types/zod';
import Button from '@/app/components/Button/Button';

import './Form.scss';

import { Input } from '@/app/components/InputComponent/Input';
import { Checkbox } from '@/app/components/CheckboxComponent/Checkbox';
import { z } from 'zod';

const formDataSchema: ZodType<FormData> = z.object({
  fullname: z.string().min(5, 'Error name'),
  email: z.string().email('Error email format'),
});

interface Props {
  onClose: () => void;
}

export const Form: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormInitialData>(initialData);
  const [errors, setErrors] = useState<ZodErrorMessage | []>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [btnColor, setBtnColor] = useState('primary');

  useEffect(() => {
    setErrors([]);
  }, [fullname, email]);

  const handlerFullNameValue = (value: string): void => {
    setFullname(value.target.value);
  };
  const handlerEmailValue = (value: string): void => {
    setemail(value.target.value);
  };
  const handlerCountryValue = (value: string): void => {
    setCountry(value.target.value);
  };
  const handlerCheckboxValue = (value: boolean): void => {
    setCheck(value.target.checked);
  };

  const reset = (): void => {
    setFullname('');
    setemail('');
    setCountry('');
    setCheck(false);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();

    const formData = {
      fullname,
      email,
      country,
      check,
    };

    try {
      formDataSchema.parse(formData);
      console.log(formData);

      setFormData(initialData);

      setIsSubmitting(true);
      setBtnColor('deactivated');

      setTimeout((): void => {
        setIsSubmitting(false);
        setBtnColor('primary');
        onClose(formData.email, true);
      }, 2000);
    } catch (error) {
      setErrors(error.errors);

      if (formData.email > 0 && btnColor === 'primary') {
        onClose(formData.email, false);
      }
    }
  };

  return (
    <section className="form">
      <header className="form__header">
        <h2 className="form__header-text">Get more in our info package</h2>
        <p className="form__header-sub-text">
          Fill the form and we`ll send you a file with actual information
        </p>
      </header>
      <div className="form__container">
        <form className="form__form-elem" onSubmit={handleSubmit}>
          <div className="form__form-elem-container">
            <div className="form__input-elem">
              <Input
                htmlFor="full Name"
                label="Full Name *"
                type="text"
                value={fullname}
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
                value={email}
                placeholder="aqe@email.com"
                onChange={handlerEmailValue}
                error={errors.length}
              />

              {errors.map((error, index): string | null => {
                if (error.path.includes('email')) {
                  return (
                    <p key={index} className="form__error">
                      {error.message}
                    </p>
                  );
                }
                return null;
              })}
            </div>
            <div className="form__input-elem">
              <Input
                htmlFor="country"
                label="Country"
                type="text"
                value={country}
                placeholder="Poland"
                onChange={handlerCountryValue}
                error={0}
              />
            </div>
            <div className="form__input-elem">
              <Checkbox onChange={handlerCheckboxValue} checked={check} />

              <p className="form__checkbox-text">
                I agree to receive the information about the further courses
                from AQE
              </p>
            </div>
            <div className="form__input-elem">
              <Button variant="primary" name="Get info package" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
