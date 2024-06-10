'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Menu.scss';

interface Locale {
  language: string;
  tag: string;
}

const locale: Record<string, Locale> = {
  english: {
    language: 'English',
    tag: 'en-US',
  },
  polish: {
    language: 'Polish',
    tag: 'pl-PL',
  },
  spanish: {
    language: 'Spanish',
    tag: 'es-ES',
  },
  french: {
    language: 'French',
    tag: 'fr-FR',
  },
};

export const LangMenu = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [actualLanguage, setActualLanguage] = useState('English');
  const route = useRouter();

  const setLanguage = (lang: Locale) => {
    route.push(lang.tag);
    setActualLanguage(lang.language);
    setShowLanguages(false);
  };

  useEffect(() => {
    for (const key in locale) {
      if (window.location.href.includes(locale[key].tag)) {
        setActualLanguage(locale[key].language);
      }
    }
  }, [route]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showLanguages &&
        event.target &&
        !(event.target as HTMLElement).closest('.navigation__langList')
      ) {
        setShowLanguages(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLanguages]);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageSelection = () => {
    setShowLanguages(false);
  };

  return (
    <div className="navigation__langList">
      <label htmlFor="langButtonDesktop" className="navigation__lang">
        <p className="navigation__lang--text">{actualLanguage}</p>
        <button
          title="navigation__toggleLangs"
          className="navigation__toggleLangs"
          id="langButtonDesktop"
          onClick={() => {
            toggleLanguages();
          }}
        >
          <Image
            src={'/Vector.svg'}
            alt="choose language"
            width={16}
            height={16}
          />
        </button>
      </label>
      {showLanguages && (
        <div className="languagesListContainer">
          <ul className="languagesList">
            {actualLanguage !== 'English' && (
              <button
                value={'pl-PL'}
                type="button"
                className="languagesList__button"
                onClick={() => {
                  handleLanguageSelection();
                  setLanguage(locale.english);
                }}
              >
                English
              </button>
            )}

            {actualLanguage !== 'Polish' && (
              <button
                value={'pl-PL'}
                type="button"
                className="languagesList__button"
                onClick={() => {
                  handleLanguageSelection();
                  setLanguage(locale.polish);
                }}
              >
                Polish
              </button>
            )}

            {actualLanguage !== 'Spanish' && (
              <button
                type="button"
                className="languagesList__button"
                onClick={() => {
                  handleLanguageSelection();
                  setLanguage(locale.spanish);
                }}
              >
                Spanish
              </button>
            )}

            {actualLanguage !== 'French' && (
              <button
                type="button"
                className="languagesList__button"
                onClick={() => {
                  handleLanguageSelection();
                  setLanguage(locale.french);
                }}
              >
                French
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
