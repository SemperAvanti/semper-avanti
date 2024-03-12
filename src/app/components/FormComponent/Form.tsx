'use client';

import { useState } from 'react';

import './Form.scss';

import { Input } from '@/app/components/InputComponent/Input';
import { Checkbox } from '@/app/components/CheckboxComponent/Checkbox';

export const Form = () => {
  const [fullname, setFullname] = useState('');
  const [email, setemail] = useState('');
  const [country, setCountry] = useState('');
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    console.log(value.target.checked);
  };

  const reset = (): void => {
    setFullname('');
    setemail('');
    setCountry('');
    setCheck(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (fullname && email && country) {
      const dataToSend = {
        name: fullname,
        email,
        country,
        futureCourses: check,
      };

      console.log(dataToSend);

      reset();
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
                onChange={handlerFullNameValue}
              />
            </div>
            <div className="form__input-elem">
              <Input
                htmlFor="email"
                label="Email *"
                type="email"
                value={email}
                placeholder="aqe@email.com"
                onChange={handlerEmailValue}
              />
            </div>
            <div className="form__input-elem">
              <Input
                htmlFor="country"
                label="Country"
                type="text"
                value={country}
                placeholder="Poland"
                onChange={handlerCountryValue}
              />
            </div>
            <div className="form__input-elem">
              <Checkbox onChange={handlerCheckboxValue} />

              <p className="form__checkbox-text">
                I agree to receive the information about the further courses
                from AQE
              </p>
            </div>

            <div className="form__input-elem">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
