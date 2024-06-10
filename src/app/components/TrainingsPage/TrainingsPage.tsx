import React from 'react';
import TrainingCard from '../TrainingsCard/TrainingsCard';

import './TrainingsPage.scss';
import { getContent, getMultipleContent } from '@/lib/api';

export default async function TrainingPage({ locale }: { locale: string }) {
  const { sectionTrainingsTitle, sectionTrainingsDescription, wantMoreInfo } =
    await getContent('sectionTrainings', locale);
  const trainingsCards = await getMultipleContent(
    'sectionTrainingsCard',
    locale,
  );

  return (
    <>
      <section>
        <div className="container" id="Trainings">
          <div className="trainings__name">
            <h2 className="trainings__title">
              {sectionTrainingsTitle as string}
            </h2>
            <p className="trainings__text">
              {sectionTrainingsDescription as string}
            </p>
          </div>

          <div className="cards">
            {trainingsCards.map((item, i) =>
              i % 2 !== 0 ? (
                <div key={`trainings-${i}`} className="cards__card test">
                  <picture className="cards__card__imageContainer">
                    <img
                      className="cards__card__imageContainer-item"
                      src="images/canary-desktop.jpg"
                      alt="meeting-event"
                    />
                  </picture>

                  <div className="cards__card__info" id="Trainings-canary">
                    <TrainingCard
                      value1={item.fields.field1Name as string}
                      value2={item.fields.field2Name as string}
                      value3={item.fields.field3Name as string}
                      value4={item.fields.field4Name as string}
                      value5={item.fields.field5Name as string}
                      name={item.fields.countryName as string}
                      term1={item.fields.field1Value as string}
                      term2={item.fields.field2Value as string}
                      duration={item.fields.field3Value as string}
                      learningModule={item.fields.field4Value as string}
                      requiredLevel={item.fields.field5Value as string}
                      buttonLabel={wantMoreInfo as string}
                      link="#Home-form"
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={`trainings-${i}`}
                  className="cards__card cards__card--reverse"
                >
                  <div className="cards__card__info" id="Trainings-1">
                    <TrainingCard
                      value1={item.fields.field1Name as string}
                      value2={item.fields.field2Name as string}
                      value3={item.fields.field3Name as string}
                      value4={item.fields.field4Name as string}
                      value5={item.fields.field5Name as string}
                      name={item.fields.countryName as string}
                      term1={item.fields.field1Value as string}
                      term2={item.fields.field2Value as string}
                      duration={item.fields.field3Value as string}
                      learningModule={item.fields.field4Value as string}
                      requiredLevel={item.fields.field5Value as string}
                      buttonLabel={wantMoreInfo as string}
                      link="#Home-form"
                    />
                  </div>

                  <picture className="cards__card__imageContainer">
                    <img
                      className="cards__card__imageContainer-item"
                      src="images/malta-desktop.jpg"
                      alt="meeting-event"
                    />
                  </picture>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
