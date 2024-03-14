import React from 'react';
import './scss/FAQ.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import iconDown from './fluent_ios-arrow-24-filled.svg';
import Image from 'next/image';

export const FAQ: React.FC = () => {
  const faq = [
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
    { someTitle: 'some desc' },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="H2">Frequently asked questions</h2>
        {faq.map((el, i) => (
          <Accordion key={el.someTitle + i} className="container__accordion">
            <AccordionSummary
              expandIcon={<Image src={iconDown} alt="expand" />}
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
      </div>
    </section>
  );
};
