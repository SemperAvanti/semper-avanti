import './Checkbox.scss';

interface Props {
  htmlFor: string;
  value: string;
  checked: boolean;
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<Props> = ({
  htmlFor,
  value,
  checked,
  name,
  onChange,
}) => {
  return (
    <div className="checkbox">
      <div className="checkbox__wrapper-item">
        <input
          className="checkbox__item"
          type="checkbox"
          title="checkbox"
          id={htmlFor}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        /> 
      </div>
    </div>
  );
};
