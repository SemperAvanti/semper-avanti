'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Menu.scss';
import Button from '../Button/Button';
import throttle from 'lodash.throttle';
import LangMenu from './LangMenu';
import { MenuData } from '@/app/types/menuData';
import NavigationLinks from './NavigationLinks';

const Menu = ({ links }: { links: MenuData | null; locale: string }) => {
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
    const buttonIcon = document.querySelector('.buttonContainerMob__open');
    if (buttonIcon) {
      buttonIcon.classList.toggle('buttonClicked');
    }

    console.log('clicked');
  };

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
                priority={true}
              />
              {links && (
                <NavigationLinks links={links} class_name="navigation__item" />
              )}
              <li>
                <LangMenu />
              </li>
              <div className="buttonContainer">
                <a href="#Home-form" className="buttonContainer--wrapper">
                  <Button shortText={true} variant="secondary" />
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
          priority={true}
        />
        <div className="buttonContainerMob">
          <a href="#Home-form" className="buttonContainerMob--wrapper">
            <Button shortText={true} variant="secondary" />
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
          {links && (
            <NavigationLinks
              links={links}
              handleClick={handleClick}
              class_name="navigation__item"
            />
          )}
          <li>
            <LangMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
