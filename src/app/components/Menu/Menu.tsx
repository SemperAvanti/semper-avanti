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

  return (
    <>
      <header className="header">
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
              <div className="navigation__lang">
                <p>English</p>
                <button className="navigation__toggleLangs">
                  <Image
                    src={'/Vector.svg'}
                    alt="choose language"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </li>
            <div className="buttonContainer">
              <Button name="Get info" variant="secondary" />
            </div>
          </ul>
        </nav>
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
          <Button name="Get info" variant="secondary" />
          <a
            href="#menu"
            onClick={handleClick}
            className="buttonContainerMob__open"
          >
            {isOpen ? (
              <Image
                src={'/iconamoon_close-bold.svg'}
                alt="close menu"
                width={40}
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
      {isOpen && (
        <div className="mobileMenu" id="Menu">
          <ul className="mobileMenu__list">
            <li className="mobileMenu__item">
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
              <div className="navigation__lang">
                <p>English</p>
                <button className="navigation__toggleLangs">
                  <Image
                    src={'/Vector.svg'}
                    alt="choose language"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
