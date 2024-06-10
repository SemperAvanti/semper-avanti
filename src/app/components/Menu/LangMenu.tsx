'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Menu.scss';
import { locale } from '@/i18nConfig';

const LangMenu = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('English');
  const route = useRouter();

  const setLanguage = (lang: string) => {
    route.push(lang);
  };

  useEffect(() => {
    for (const key in locale) {
      if (window.location.href.includes(locale[key].tag)) {
        setActiveLanguage(locale[key].language);
      }
    }
  }, [route]);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageSelection = (lang: string) => {
    setShowLanguages(false);
    setLanguage(lang);
  };

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

  return (
    <div className="navigation__langList">
      <label className="navigation__lang" htmlFor="languageButton">
        <p className="navigation__lang--text">{activeLanguage}</p>
        <button
          title="navigation__toggleLangs"
          className="navigation__toggleLangs"
          onClick={toggleLanguages}
          id="languageButton"
        >
          <Image
            src={'/Vector.svg'}
            alt="choose language"
            width={12}
            height={9}
          />
        </button>
      </label>

      {showLanguages && (
        <div className="languagesListContainer--mob">
          <ul className="languagesList">
            {Object.entries(locale).map(([, { language, tag }]) => (
              <button
                key={tag}
                type="button"
                className="languagesList__button"
                onClick={() => handleLanguageSelection(tag)}
              >
                {language}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangMenu;
