'use client';
import React, { useEffect, useState } from 'react';
import './button.scss';
import { getContent } from '@/lib/api';
import { useParams } from 'next/navigation';
import { IButtonsFields } from '@/contentfulTypes/contentful';
import Loader from '../Loader/Loader';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'deactivated';
  shortText?: boolean;
}

const Button: React.FC<ButtonProps> = ({ shortText = false, variant }) => {
  const [buttons, setButtons] = useState<IButtonsFields | null>(null);
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        const cachedTexts = localStorage.getItem(`buttonTexts-${locale}`);
        if (cachedTexts) {
          setButtons(JSON.parse(cachedTexts));
        } else {
          const data = await getContent<IButtonsFields>(
            'buttons',
            locale as string,
          );
          localStorage.setItem(`buttonTexts-${locale}`, JSON.stringify(data));
          setButtons(data);
        }
      } catch (error) {
        console.error('Failed to fetch button texts:', error);
      }
    }

    fetchData();
  }, [locale]);

  const buttonClass = `button button--${variant}`;

  return (
    <button
      key={'button'}
      className={buttonClass}
      disabled={variant === 'deactivated'}
    >
      {buttons === null ? (
        <Loader />
      ) : shortText ? (
        buttons.getInfo
      ) : (
        buttons.getInfoPackage
      )}
    </button>
  );
};
//
export default Button;
