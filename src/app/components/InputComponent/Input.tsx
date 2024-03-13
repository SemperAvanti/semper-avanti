'use client';
import './Input.scss';

interface Props {
  label: string;
  htmlFor: string;
  value: string;
  type: string;
  placeholder: string;
  error: number;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  label,
  htmlFor,
  type,
  value,
  placeholder,
  error,
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
            className={error === 0 ? 'input__item' : 'input__item--isError'}
            type={type}
            id={htmlFor}
            name={htmlFor}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
