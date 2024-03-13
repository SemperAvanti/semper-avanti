/* eslint-disable prettier/prettier */
import React from 'react';
import './button.scss';

interface ButtonProps {
  name: string;
  variant: 'primary' | 'secondary' | 'deactivated';
}

const Button: React.FC<ButtonProps> = ({ name, variant }) => {
  const buttonClass = `button button--${variant}`;
  return <button className={buttonClass} disabled={variant === 'deactivated'}>{name}</button>;
};

export default Button;
