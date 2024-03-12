'use client';
import './Input.scss';

interface Props {
  label: string;
  htmlFor: string;
  value: string;
  type: string;
  placeholder: string;
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
  onFocus,
  isFocused,
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
            className={isFocused ? 'input__item' : 'input__item--focus'}
            type={type}
            id={htmlFor}
            name={htmlFor}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
          />
        </div>
      </div>
    </div>
  );
};
