import React from 'react';
import TrainingCard from '../TrainingsCard/TrainingsCard';

import './TrainingsPage.scss';
import {
  DescriptionsMotion,
  SectionTitleMotion,
  TrainingImageMotionLeft,
  TrainingImageMotionRight,
} from '../MotionTemplates/templates';
import { getContent, getMultipleContent } from '@/lib/api';
import {
  ISectionTrainingsFields,
  ISectionTrainingsCardFields,
} from '@/contentfulTypes/contentful';

export default async function TrainingPage({ locale }: { locale: string }) {
  const data: ISectionTrainingsFields =
    await getContent<ISectionTrainingsFields>('sectionTrainings', locale);
  const trainingsCards = await getMultipleContent<ISectionTrainingsCardFields>(
    'sectionTrainingsCard',
    locale,
  );

  const cardFieldNames = Object.keys(data)
    .filter((key) => key.includes('cardField'))
    .map((key) => data[key as keyof ISectionTrainingsFields]);

  return (
    <>
      <section>
        <div className="container" id="Trainings">
          <div className="trainings__name">
            <SectionTitleMotion>
              <h2 className="trainings__title">{data.sectionTrainingsTitle}</h2>
            </SectionTitleMotion>
            <DescriptionsMotion>
              <p className="trainings__text">
                {data.sectionTrainingsDescription}
              </p>
            </DescriptionsMotion>
          </div>

          <div className="cards">
            {trainingsCards &&
              trainingsCards.map((card, i) => (
                <div key={`trainings-${i}`} className="cards__card ">
                  {i % 2 !== 0 ? (
                    <TrainingImageMotionLeft>
                      <picture>
                        <img
                          className="cards__card__imageContainer-item"
                          src="images/canary-desktop.jpg"
                          alt="meeting-event"
                        />
                      </picture>
                    </TrainingImageMotionLeft>
                  ) : (
                    <TrainingImageMotionRight>
                      <picture>
                        <img
                          className="cards__card__imageContainer-item"
                          src="images/canary-desktop.jpg"
                          alt="meeting-event"
                        />
                      </picture>
                    </TrainingImageMotionRight>
                  )}

                  <div className="cards__card__info" id="Trainings-canary">
                    <TrainingCard
                      fieldNames={cardFieldNames}
                      card={card}
                      buttonLabel={data.wantMoreInfo}
                      link="#Home-form"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
