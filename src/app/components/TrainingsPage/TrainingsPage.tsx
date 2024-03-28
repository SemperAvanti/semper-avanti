import React from 'react';
import TrainingCard from '../TrainingsCard/TrainingsCard';
import Image from 'next/image';
import './TrainingsPage.scss';

const TrainingPage = () => {
  return (
    <>
      <section className="container" id="Trainings">
        <div className="trainings__name">
          <h2 className="trainings__title">Trainings</h2>
          <p className="trainings__text">
            Our programs at AQE are designed to cater to the diverse needs of
            educators at every stage of their career.
          </p>
        </div>

        <div className="cards">
          <div className="cards__card cards__card--reverse">
            <div className="cards__card__info" id="Trainings-malta">
              <TrainingCard
                name="Malta"
                term1="28.07.2024 - 03.08.2024 "
                term2="04.08.2024 - 10.08.2024"
                duration="7 days"
                learningModule="yes"
                requiredLevel="Basic"
                link="#Home-form"
              />
            </div>

            <picture className="cards__card__imageContainer">
              <source
                media="(max-width:640px)"
                srcSet="images/ireland-mobile.jpg"
              />
              <source
                media="(max-width:1200px)"
                srcSet="images/ireland-tablet.jpg"
              />
              <img
                className="cards__card__imageContainer-item"
                src="images/ireland-desktop.jpg"
                alt="meeting-event"
              />
            </picture>
            {/* <div className="cards__card__imageContainer">
              <Image
                src={'/Rectangle 24 (1).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image"
              />
            </div>
            <div className="cards__card__imageContainer--mob">
              <Image
                src={'/Rectangle 24 (2).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image mobile-image"
              />
            </div> */}
          </div>
          <div className="cards__card">
            {/* <div className="cards__card__imageContainer">
              <Image
                src={'/Rectangle 24 (1).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image"
              />
            </div>
            <div className="cards__card__imageContainer--mob">
              <Image
                src={'/Rectangle 24 (2).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image mobile-image"
              />
            </div> */}
<picture className="cards__card__imageContainer">
              <source
                media="(max-width:640px)"
                srcSet="images/ireland-mobile.jpg"
              />
              <source
                media="(max-width:1200px)"
                srcSet="images/ireland-tablet.jpg"
              />
              <img
                className="cards__card__imageContainer-item"
                src="images/ireland-desktop.jpg"
                alt="meeting-event"
              />
            </picture>

            <div className="cards__card__info" id="Trainings-canary">
              <TrainingCard
                name="Malta"
                term1="28.07.2024 - 03.08.2024 "
                term2="04.08.2024 - 10.08.2024"
                duration="7 days"
                learningModule="yes"
                requiredLevel="Basic"
                link="#Home-form"
              />
            </div>
          </div>
          <div
            className="cards__card cards__card--reverse"
            id="Trainings-ireland"
          >
            <div className="cards__card__info">
              <TrainingCard
                name="Malta"
                term1="28.07.2024 - 03.08.2024 "
                term2="04.08.2024 - 10.08.2024"
                duration="7 days"
                learningModule="yes"
                requiredLevel="Basic"
                link="#Home-form"
              />
            </div>
            {/* <div className="cards__card__imageContainer">
              <Image
                src={'/Rectangle 24 (1).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image"
              />
            </div>
            <div className="cards__card__imageContainer--mob">
              <Image
                src={'/Rectangle 24 (2).jpg'}
                fill={true}
                alt="Malta"
                className="cards__card__image mobile-image"
              />
            </div> */}
            <picture className="cards__card__imageContainer">
              <source
                media="(max-width:640px)"
                srcSet="images/ireland-mobile.jpg"
              />
              <source
                media="(max-width:1200px)"
                srcSet="images/ireland-tablet.jpg"
              />
              <img
                className="cards__card__imageContainer-item"
                src="images/ireland-desktop.jpg"
                alt="meeting-event"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingPage;
