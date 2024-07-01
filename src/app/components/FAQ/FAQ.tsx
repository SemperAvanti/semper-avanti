import './scss/FAQ.scss';
import {
  ISectionFaqCardFields,
  ISectionFaqFooterFields,
  ISectionFaqTitleFields,
} from '@/contentfulTypes/contentful';

import { getContent, getMultipleContent } from '@/lib/api';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import arrow from '../../../img/arrow.svg';
import Image from 'next/image';
import {
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

type Props = {
  locale: string;
  id: string;
};

export default async function FAQ({ locale, id }: Props) {
  const { sectionTitle } = await getContent<ISectionFaqTitleFields>(
    'sectionFaqTitle',
    locale,
  );

  const questionCards = await getMultipleContent<ISectionFaqCardFields>(
    'sectionFaqCard',
    locale,
  );

  const { sectionExplanation, sectionLink } =
    await getContent<ISectionFaqFooterFields>('sectionFaqFooter', locale);

  return (
    <section className="section" id={id}>
      <div className="FAQ__container container">
        <SectionTitleMotion>
          <h2 className="H2 FAQ__container--title">{sectionTitle}</h2>
        </SectionTitleMotion>
        <ListMotion>
          {questionCards?.length &&
            questionCards.map((el, id) => (
              <ItemMotion key={`faqCard-motion-${id}`}>
                <Accordion
                  key={`faqCard-${id}`}
                  className="container__accordion"
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<Image src={arrow} alt="expand" />}
                    aria-controls={`faqCard-${id}`}
                    id={`faqCard-${id}`}
                    className="container__accordion--summary"
                    sx={{ margin: 0 }}
                  >
                    <Typography className="body-text">
                      {el.sectionQuestion}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="container__accordion--details">
                    <Typography className="descriptionText descriptionText--gray">
                      {el.sectionAnswer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ItemMotion>
            ))}
        </ListMotion>
        <p className="descriptionText FAQ__container--description">
          {sectionExplanation}
          <a className="body-text FAQ__container--link" href="#ContactUs">
            {sectionLink}
          </a>
        </p>
      </div>
    </section>
  );
}
