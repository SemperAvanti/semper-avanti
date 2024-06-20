'use client';
import { useEffect, useState } from 'react';
/* eslint-disable @next/next/no-img-element */
import './footer.scss';
import { getContent } from '@/lib/api';

type NavItem = {
  title: string;
};

type MenuData = {
  navItems: NavItem[];
};

export const Footer = ({ locale }: { locale: string }) => {
  const [data, setData] = useState<MenuData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent('navigation', locale);
        const navItems =
          response.navItems &&
          response.navItems.map((item: string) => ({
            title: item,
          }));
        const formattedData = { navItems };

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, [locale]);

  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__gridContainer">
          {data &&
            data.navItems.map((item, index) => {
              return (
                <a
                  key={index}
                  className="Footer__gridContainer--link"
                  href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.title}
                </a>
              );
            })}
            <p className="Footer__gridContainer--link">Phone Num</p>
        </div>

        <div className="Footer__bottomLabel">
          <p className="Footer__bottomLabel--description">
            Alliance for Quality Education. All rights reserved.
          </p>

          <a
            className="Footer__logoMA-link"
            target="blank"
            href="https://mate.academy/pl?utm_source=google&utm_medium=cpc&utm_campaign=GEO-PL_BRAND_MXD_SEA_-_MCL_-_-_GOA&utm_content=KW_Mate-academy_-_PCorTAB&utm_term=kwd-490518305899_e_mate%20academy&gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fjur8wSE7BzISo7Z4Bq7vCnQwov7JklMc7HhkbgKxQTtRKLNwaALvkaAioKEALw_wcB"
          >
            <div className="Footer__logoWrapper">
              <p className="Footer__logoWrapper--text">By</p>
              <img
                src="logoMateAcademy.svg"
                alt="logoMateAcademy"
                className="Footer__logoWrapper--logo"
              />
            </div>
          </a>
        </div>

        <a className="Footer__homeindicator" href="#Home">
          <div className="Footer__homeindicator--label" />
        </a>
      </div>
    </footer>
  );
};
