'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Menu.scss';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import { getContent } from '@/lib/api';

type NavItem = {
  title: string;
};

type MenuData = {
  navItems: NavItem[];
};

const Menu = ({ locale }: { locale: string }) => {
  const [data, setData] = useState<MenuData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent('navigation', locale);
        console.log('Response from getContent:', response);
        const navItems =
          response.navItems &&
          response.navItems.map((item: string) => ({
            title: item,
          }));
        const formattedData = { navItems };

        setData(formattedData);
        console.log('Data after setting state:', formattedData);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, [locale]);

  function setLanguage(lang: string) {
    route.push(lang);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('clicked', isOpen);
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

    const urlFragment = window.location.hash;
    if (urlFragment === '#mobMenu') {
      setIsOpen(true);
    }

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

  useEffect(() => {
    console.log('State data:', data);
  }, [data]);

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
              {data && data.navItems ? (
                data.navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="navigation__item"
                    >
                      {item.title}
                    </a>
                  </li>
                ))
              ) : (
                <div>Loading...</div>
              )}

              <li>
                <div className="navigation__langList">
                  <label
                    htmlFor="langButtonDesktop"
                    className="navigation__lang"
                  >
                    <p className="navigation__lang--text">English</p>
                    <button
                      title="navigation__toggleLangs"
                      className="navigation__toggleLangs"
                      onClick={() => {
                        toggleLanguages();
                        setLanguage('en-US');
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
                        <button
                          value={'pl-PL'}
                          type="button"
                          className="languagesList__button"
                          onClick={() => {
                            handleLanguageSelection();
                            setLanguage('pl-PL');
                            // switchLocale('pl');
                          }}
                        >
                          Polish
                        </button>
                        <button
                          type="button"
                          className="languagesList__button"
                          onClick={() => {
                            handleLanguageSelection();
                            setLanguage('es-ES');
                            // switchLocale('es');
                          }}
                        >
                          Spanish
                        </button>
                        <button
                          type="button"
                          className="languagesList__button"
                          onClick={() => {
                            handleLanguageSelection();
                            setLanguage('fr-FR');
                            // switchLocale('fr');
                          }}
                        >
                          French
                        </button>
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

      <div className="mobileMenu" id="mobMenu">
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
                <p className="navigation__lang--text">English</p>
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
                    <button
                      type="button"
                      className="languagesList__button"
                      onClick={handleLanguageSelection}
                    >
                      Polish
                    </button>
                    <button
                      type="button"
                      className="languagesList__button"
                      onClick={handleLanguageSelection}
                    >
                      Spanish
                    </button>
                    <button
                      type="button"
                      className="languagesList__button"
                      onClick={handleLanguageSelection}
                    >
                      French
                    </button>
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
