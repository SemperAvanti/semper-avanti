'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Menu.scss';
import Button from '../Button/Button';
import throttle from 'lodash.throttle';
import LangMenu from './LangMenu';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollpos = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollpos.current > currentScrollPos;

    if (headerRef.current) {
      headerRef.current.style.top = isScrollingUp ? '0' : '-111px';
    }

    prevScrollpos.current = currentScrollPos;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    prevScrollpos.current = window.scrollY;

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [handleScroll]);

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
        isOpen &&
        event.target &&
        !(event.target as HTMLElement).closest('.navigation__langList')
      ) {
        setIsOpen(false);
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
  }, [isOpen]);

  return (
    <div ref={headerRef} className="menu-container">
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
                <LangMenu />
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
            <LangMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
