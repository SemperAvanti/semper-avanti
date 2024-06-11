import React from 'react';
import './TrainingsCard.scss';
import Image from 'next/image';
import Button from '../Button/Button';

interface Card {
  countryName: string;
  field1Value: string;
  field2Value: string;
  field3Value: string;
  field4Value: string;
  field5Value: string;
  field1Name: string;
  field2Name: string;
  field3Name: string;
  field4Name: string;
  field5Name: string;
}

interface TrainingCardProps {
  card: Card;
  link: string;
  buttonLabel: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  card,
  link,
  buttonLabel,
}) => {
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

        <div className="training-card__terms">
          <div className="training-card__term">
            <p className="training-card__left training-card__left--pad">
              {card.field1Name}
            </p>
            <p className="training-card__right training-card__right--pad">
              {card.field1Value}
            </p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{card.field2Name}</p>
            <p className="training-card__right">{card.field2Value}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{card.field3Name}</p>
            <p className="training-card__right">{card.field3Value}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{card.field4Name}</p>
            <p className="training-card__right">
              {card.field4Value ? (
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
              )}
            </p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{card.field5Name}</p>
            <p className="training-card__right">{card.field5Value}</p>
          </div>
        </div>
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
