'use client';
import React, { useEffect, useState } from 'react';
import './scss/FAQ.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrow from '../../../img/arrow.svg';
import Image from 'next/image';
import { fetchIds } from '@/lib/fetchIds';
import { MenuData } from '@/app/types/menuData';
import { useParams } from 'next/navigation';

export const FAQ = () => {
  const faq = [
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
  ];

  const [ids, setIds] = useState<MenuData | null>(null);

  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchIds(locale);
      setIds(result);
    };

    fetchDataAsync();
  }, [locale]);

  return (
    <section
      className="section"
      id={
        (ids && ids.navItems[6]?.title.toLowerCase().replace(/\s+/g, '-')) ||
        undefined
      }
    >
      <div className="FAQ__container container">
        <h2 className="H2">Frequently asked questions</h2>
        {faq.map((el, i) => (
          <Accordion key={el.someTitle + i} className="container__accordion">
            <AccordionSummary
              expandIcon={<Image src={arrow} alt="expand" />}
              aria-controls={el.someTitle + i}
              id={el.someTitle + i}
              className="container__accordion--summary"
            >
              <Typography className="body-text">
                {Object.keys(el)[0]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="container__accordion--details">
              <Typography className="description-text">
                {el.someTitle}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <p className="description-text">
          Didn&apos;t find the answer?{' '}
          <a className="body-text" href="#ContactUs">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
};
