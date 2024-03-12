'use client';

interface Props {
  label: string;
  htmlFor: string;
  value: string;
  type: string;
  error: boolean;
  errorMessage: string;
  minLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  label,
  htmlFor,
  type,
  value,
  error,
  minLength,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="input">
      <div className="input__container">
        <div className="input__label">
          <label htmlFor={htmlFor}>{label}</label>
        </div>

        <div className="input__wrapper-item">
          <input
            className="input__item"
            type={type}
            id={htmlFor}
            name={htmlFor}
            value={value}
            onChange={onChange}
            minLength={minLength}
          />
        </div>
        {error && errorMessage && (
          <div className="input__error-container">
            <p className="input__error-msg">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
