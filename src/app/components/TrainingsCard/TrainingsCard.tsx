import React from 'react';
import './TrainingsCard.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import { ISectionTrainingsCardFields } from '@/contentfulTypes/contentful';

interface TrainingCardProps {
  card: ISectionTrainingsCardFields;
  link: string;
  buttonLabel: string | undefined;
  fieldNames: (string | undefined)[];
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  card,
  link,
  buttonLabel,
  fieldNames,
}) => {
  const cardValues = [
    card.ITerm,
    card.IITerm,
    card.duration,
    card.learningEnglishModule,
    card.requiredEnglishLevel,
  ];

  return (
    <>
      <div className="training-card">
        <div className="training-card__nameContainer">
          <h3 className="training-card__name">
            <span className="training-card__titleWrapper">
              <div className="training-card__blueLine"></div>
              {card.countryName}
            </span>

            <span className="training-card__titleWrapper--top">
              {' '}
              {card.countryName}
            </span>
          </h3>
        </div>

        {fieldNames.map((fieldName, i) => {
          return (
            cardValues[i] !== undefined && (
              <div className="training-card__term" key={`field-${i}`}>
                <p className="training-card__left training-card__left--pad">
                  {fieldName}
                </p>

                {typeof cardValues[i] === 'boolean' ? (
                  cardValues[i] ? (
                    <Image
                      width={32}
                      height={32}
                      src="/mdi_tick (1).svg"
                      alt="Learning Module Yes"
                    />
                  ) : (
                    <Image
                      width={32}
                      height={32}
                      src="/iconamoon_close-bold (1).svg"
                      alt="Learning Module No"
                    />
                  )
                ) : (
                  <p className="training-card__right training-card__right--pad">
                    {cardValues[i]}
                  </p>
                )}
              </div>
            )
          );
        })}
        <div className="training-card__cont">
          <p className="training-card__info">{buttonLabel}</p>
          <a href={`${link}`}>
            <Button name="Get info package" variant="primary" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TrainingCard;
