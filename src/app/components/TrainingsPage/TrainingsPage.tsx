'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import TrainingCard from '../TrainingsCard/TrainingsCard';
import { useEffect, useState } from 'react';
import './TrainingsPage.scss';
import { getContent, getMultipleContent } from '@/lib/api';

interface Content {
  sectionTrainingsTitle: string;
  sectionTrainingsDescription: string;
  wantMoreInfo: string;
}

export default function TrainingPage() {
  const [content, setContent] = useState<null | Content>(null);
  const [cards, setCards] = useState<null | string[]>(null);

  const { locale } = useParams();

  useEffect(() => {
    async function fetchData() {
      const cards = await getMultipleContent(
        'sectionTrainingsCard',
        locale as string,
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setCards(cards);

      const contentResult = await getContent(
        'sectionTrainings',
        locale as string,
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setContent(contentResult);
    }

    fetchData();
  }, [locale]);

  if (!content) {
    return <div></div>;
  }

  return (
    <>
      <section>
        <div className="container" id="Trainings">
          <div className="trainings__name">
            <h2 className="trainings__title">
              {content.sectionTrainingsTitle}
            </h2>
            <p className="trainings__text">
              {content.sectionTrainingsDescription}
            </p>
          </div>

          <div className="cards">
            {cards &&
              cards.map((card, i) => (
                <div key={`trainings-${i}`} className="cards__card ">
                  <picture className="cards__card__imageContainer">
                    <img
                      className="cards__card__imageContainer-item"
                      src="images/canary-desktop.jpg"
                      alt="meeting-event"
                    />
                  </picture>

                  <div className="cards__card__info" id="Trainings-canary">
                    <TrainingCard
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      card={card.fields}
                      buttonLabel={content.wantMoreInfo}
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
