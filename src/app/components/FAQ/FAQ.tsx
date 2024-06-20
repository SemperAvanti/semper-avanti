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
import {
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

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
        <SectionTitleMotion>
          <h2 className="H2 FAQ__container--title">
            Frequently asked questions
          </h2>
        </SectionTitleMotion>
        <ListMotion>
          {faq.map((el, i) => (
            <ItemMotion key={el.someTitle + i + i}>
              <Accordion
                key={el.someTitle + i}
                className="container__accordion"
              >
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
            </ItemMotion>
          ))}
        </ListMotion>
        <p className="description-text FAQ__container--description">
          Didn&apos;t find the answer?{' '}
          <a className="body-text FAQ__container--link" href="#ContactUs">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
};
