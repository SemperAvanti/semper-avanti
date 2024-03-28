'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './Menu.scss';
import Button from '../Button/Button';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    const buttonIcon = document.querySelector('.buttonContainerMob__open');
    if (buttonIcon) {
      buttonIcon.classList.toggle('buttonClicked');
    }
  };

  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
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
                  <div className="navigation__lang">
                    <p>English</p>
                    <button
                      className="navigation__toggleLangs"
                      onClick={toggleLanguages}
                    >
                      <Image
                        src={'/Vector.svg'}
                        alt="choose language"
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                  {showLanguages && (
                    <div className="languagesListContainer">
                      <ul className="languagesList">
                        <button type="button" className="languagesList__button">
                          Polish
                        </button>
                        <button type="button" className="languagesList__button">
                          Spanish
                        </button>
                        <button type="button" className="languagesList__button">
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
            // href='#mobMenu'
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
              <div className="navigation__lang">
                <p>English</p>
                <button
                  className="navigation__toggleLangs"
                  onClick={toggleLanguages}
                >
                  <Image
                    src={'/Vector.svg'}
                    alt="choose language"
                    width={12}
                    height={9}
                  />
                </button>
              </div>
              {showLanguages && (
                <div className="languagesListContainer--mob">
                  <ul className="languagesList">
                    <button type="button" className="languagesList__button">
                      Polish
                    </button>
                    <button type="button" className="languagesList__button">
                      Spanish
                    </button>
                    <button type="button" className="languagesList__button">
                      French
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
