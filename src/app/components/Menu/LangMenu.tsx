'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Menu.scss';
import { locale } from '@/i18nConfig';
import { useParams } from 'next/navigation';

const LangMenu = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const route = useRouter();
  const params = useParams<{ locale: string }>();

  const setLanguage = (lang: string) => {
    route.replace(lang);
  };

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

  const getLanguageFromLocale = (localeParams: string) => {
    const foundLocale = Object.values(locale).find(
      (loc) => loc.tag === localeParams,
    );
    return foundLocale ? foundLocale.language : localeParams;
  };

  return (
    <div className="navigation__langList">
      <label className="navigation__lang" htmlFor="languageButton">
        <p className="navigation__lang--text">
          {getLanguageFromLocale(params.locale)}
        </p>
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
