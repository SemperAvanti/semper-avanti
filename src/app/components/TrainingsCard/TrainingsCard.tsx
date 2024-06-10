import React from 'react';
import './TrainingsCard.scss';
import Image from 'next/image';
import Button from '../Button/Button';

interface TrainingCardProps {
  name: string;
  term1: string;
  term2: string;
  duration: string;
  learningModule: string;
  requiredLevel: string;
  link: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  buttonLabel: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  name,
  term1,
  term2,
  duration,
  learningModule,
  requiredLevel,
  link,
  value1,
  value2,
  value3,
  value4,
  value5,
  buttonLabel,


}) => {
  return (
    <>
      <div className="training-card">
        <div className="training-card__nameContainer">
          <h3 className="training-card__name">
            <span className="training-card__titleWrapper">
              <div className="training-card__blueLine"></div>
              {name}
            </span>

            <span className="training-card__titleWrapper--top"> {name}</span>
          </h3>
        </div>

        <div className="training-card__terms">
          <div className="training-card__term">
            <p className="training-card__left training-card__left--pad">
              {value1}
            </p>
            <p className="training-card__right training-card__right--pad">
              {term1}
            </p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{value2}</p>
            <p className="training-card__right">{term2}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{value3}</p>
            <p className="training-card__right">{duration}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">{value4}</p>
            <p className="training-card__right">
              {learningModule ? (
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
            <p className="training-card__left">{value5}</p>
            <p className="training-card__right">{requiredLevel}</p>
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
