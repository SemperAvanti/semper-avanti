import React from 'react';
import './scss/FAQ.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrow from '../../../img/arrow.svg';
import Image from 'next/image';
import { ItemMotion, ListMotion, SectionTitleMotion } from '../MotionTemplates/templates';

export const FAQ: React.FC = () => {
  const faq = [
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
  ];

  return (
    <section className="section" id="FAQ">
      <div className="FAQ__container container">
        <SectionTitleMotion>
          <h2 className="H2 FAQ__container--title">Frequently asked questions</h2>
        </SectionTitleMotion>
        <ListMotion>
          {faq.map((el, i) => (
            <ItemMotion key={el.someTitle}>
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
