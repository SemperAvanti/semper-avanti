'use client';
import React, { useEffect, useState } from 'react';
import './button.scss';
import { getContent } from '@/lib/api';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'deactivated';
  locale: string;
  shortText?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  shortText = false,
  variant,
  locale,
}) => {
  const [buttons, setButtons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getContent('buttons', locale as string);
      console.log(data);
      setButtons(data);
    }

    fetchData();
  }, [locale]);

  if (!buttons) {
    return <div></div>;
  }

  const buttonClass = `button button--${variant}`;
  return (
    <button className={buttonClass} disabled={variant === 'deactivated'}>
      {shortText ? buttons.getInfo : buttons.getInfoPackage}
    </button>
  );
};

export default Button;
