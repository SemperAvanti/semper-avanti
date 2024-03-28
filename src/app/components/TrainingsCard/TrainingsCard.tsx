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
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  name,
  term1,
  term2,
  duration,
  learningModule,
  requiredLevel,
  link,
}) => {
  return (
    <>
      <div className="training-card">
        <div className="training-card__nameContainer">
          <div className="training-card__name__container">
          
            <div className="training-card__blueLine">
            <h3 className="training-card__name">{name}</h3>
            </div>
          </div>
        </div>

        <div className="training-card__terms">
          <div className="training-card__term">
            <p className="training-card__left training-card__left--pad">
              I Term:
            </p>
            <p className="training-card__right training-card__right--pad">
              {term1}
            </p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">II Term:</p>
            <p className="training-card__right">{term2}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">Duration:</p>
            <p className="training-card__right">{duration}</p>
          </div>
          <div className="training-card__term">
            <p className="training-card__left">Learning Module:</p>
            <p className="training-card__right">
              {learningModule === 'yes' ? (
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
            <p className="training-card__left">Required English Level:</p>
            <p className="training-card__right">{requiredLevel}</p>
          </div>
        </div>
        <div className="training-card__cont">
          <p className="training-card__info">Want more info?</p>
          <a href={`${link}`}>
            <Button name="Get info package" variant="primary" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TrainingCard;
