'use client';

import './Input.scss';
import { ZodErrorMessage } from '@/app/types/ZodErrorMessage';

interface Props {
  label: string;
  htmlFor: string;
  value: string;
  type: string;
  placeholder: string;
  isDisabled: boolean;
  name: string;
  errors?: ZodErrorMessage[];
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  label,
  htmlFor,
  type,
  value,
  placeholder,
  isDisabled,
  name,
  errors,
  onChange,
}) => {
  const getClassName: string =
    errors &&
    errors.length > 0 &&
    errors.some((error) => error.path.includes(name))
      ? 'input__item--isError'
      : 'input__item';

  return (
    <div className="input">
      <div className="input__container">
        <div className="input__label">
          <label htmlFor={htmlFor}>{label}</label>
        </div>
        <div className="input__wrapper-item">
          <input
            className={`input__item ${getClassName}`}
            type={type}
            id={htmlFor}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={isDisabled}
          />
          {errors &&
            errors.length > 0 &&
            errors.map((error, index) => {
              if (error.path.includes(name)) {
                return (
                  <p key={index} className="input__error">
                    {error.message}
                  </p>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};
