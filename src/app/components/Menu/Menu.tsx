'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Menu.scss';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

const locale = {
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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [actualLanguage, setActualLanguage] = useState('English');
  const route = useRouter();

  useEffect(() => {
    for (const key in locale) {
      if (window.location.href.includes(locale[key].tag)) {
        setActualLanguage(locale[key].language);
      }
    }
  }, [route]);

  function setLanguage(lang: object) {
    route.push(lang.tag);
    setActualLanguage(lang.language);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
    const buttonIcon = document.querySelector('.buttonContainerMob__open');
    if (buttonIcon) {
      buttonIcon.classList.toggle('buttonClicked');
    }
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

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageSelection = () => {
    setShowLanguages(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <ul className="navigation__list" id="menu">
              <Image
                src={'/Logo.svg'}
                alt="logo"
                className="header__logo"
                width={70}
                height={79}
              />
              <li>
                <a href="#Home" className="navigation__item">
                  Home
                </a>
              </li>
              <li>
                <a href="#AboutUs" className="navigation__item">
                  About us
                </a>
              </li>
              <li>
                <a href="#Trainings" className="navigation__item">
                  Trainings
                </a>
              </li>
              <li>
                <a href="#Gallery" className="navigation__item">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#Stories" className="navigation__item">
                  Stories
                </a>
              </li>
              <li>
                <a href="#Partners" className="navigation__item">
                  Partners
                </a>
              </li>
              <li>
                <a href="#FAQ" className="navigation__item">
                  FAQ
                </a>
              </li>
              <li>
                <div className="navigation__langList">
                  <label
                    htmlFor="langButtonDesktop"
                    className="navigation__lang"
                  >
                    <p className="navigation__lang--text">{actualLanguage}</p>
                    <button
                      title="navigation__toggleLangs"
                      className="navigation__toggleLangs"
                      onClick={() => {
                        toggleLanguages();
                      }}
                      id="langButtonDesktop"
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
                              // switchLocale('pl');
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
                              // switchLocale('pl');
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
                              // switchLocale('es');
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
                              // switchLocale('fr');
                            }}
                          >
                            French
                          </button>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <div className="buttonContainer">
                <a href="#Home-form">
                  <Button name="Get info" variant="secondary" />
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <div className="headerMobile">
        <Image
          src={'/Logo.svg'}
          alt="logo"
          className="headerMobile__logo"
          width={40}
          height={45}
        />
        <div className="buttonContainerMob">
          <a href="#Home-form">
            <Button name="Get info" variant="secondary" />
          </a>

          <a
            href={isOpen ? '#mobMenu' : '#main'}
            onClick={handleClick}
            className="buttonContainerMob__open"
          >
            {isOpen ? (
              <Image
                src={'/iconamoon_close-bold.svg'}
                alt="close menu"
                className="buttonContainerMob__x"
                width={48}
                height={40}
              />
            ) : (
              <Image
                src={'/Vector (1).svg'}
                alt="open menu"
                width={40}
                height={40}
              />
            )}
          </a>
        </div>
      </div>

      <div
        className={`mobileMenu ${isOpen ? 'mobileMenu--open' : ''}`}
        id="mobMenu"
      >
        <ul className="mobileMenu__list">
          <li className="mobileMenu__item">
            <a href="#Home" className="navigation__item" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#AboutUs"
              className="navigation__item"
              onClick={handleClick}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#Trainings"
              className="navigation__item"
              onClick={handleClick}
            >
              Trainings
            </a>
          </li>
          <li>
            <a
              href="#Gallery"
              className="navigation__item"
              onClick={handleClick}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#Stories"
              className="navigation__item"
              onClick={handleClick}
            >
              Stories
            </a>
          </li>
          <li>
            <a
              href="#Partners"
              className="navigation__item"
              onClick={handleClick}
            >
              Partners
            </a>
          </li>
          <li>
            <a href="#FAQ" className="navigation__item" onClick={handleClick}>
              FAQ
            </a>
          </li>
          <li>
            <div className="navigation__langList">
              <label className="navigation__lang" htmlFor="languageButton">
                <p className="navigation__lang--text">{actualLanguage}</p>
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
                    {actualLanguage !== 'English' && (
                      <button
                        type="button"
                        className="languagesList__button"
                        onClick={() => {
                          handleLanguageSelection();
                          setLanguage(locale.english);
                          // switchLocale('pl');
                        }}
                      >
                        English
                      </button>
                    )}
                    {actualLanguage !== 'Polish' && (
                      <button
                        type="button"
                        className="languagesList__button"
                        onClick={() => {
                          handleLanguageSelection();
                          setLanguage(locale.polish);
                          // switchLocale('pl');
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
                          // switchLocale('pl');
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
                          // switchLocale('pl');
                        }}
                      >
                        French
                      </button>
                    )}
                  </ul>
                </div>
              )}
              <div className="test"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
