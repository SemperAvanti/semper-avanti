import TrainingCard from '../TrainingsCard/TrainingsCard';
import './TrainingsPage.scss';
import {
  DescriptionsMotion,
  SectionTitleMotion,
  TrainingImageMotionLeft,
  TrainingImageMotionRight,
} from '../MotionTemplates/templates';

type Props = {
  id: string;
};

const TrainingPage = ({ id }: Props) => {
  return (
    <>
      <section>
        <div className="container" id={id}>
          <div className="trainings__name">
            <SectionTitleMotion>
              <h2 className="trainings__title">Trainings</h2>
            </SectionTitleMotion>
            <DescriptionsMotion>
              <p className="trainings__text">
                Our programs at AQE are designed to cater to the diverse needs
                of educators at every stage of their career.
              </p>
            </DescriptionsMotion>
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
              <TrainingImageMotionRight>
                <div className="cards__card__imageContainer">
                  <picture>
                    <source
                      media="(max-width:640px)"
                      srcSet="images/malta-mobile.jpg"
                    />
                    <source
                      media="(max-width:1200px)"
                      srcSet="images/malta-tablet.jpg"
                    />
                    <img
                      className="cards__card__imageContainer-item"
                      src="images/malta-desktop.jpg"
                      alt="meeting-event"
                    />
                  </picture>
                </div>
              </TrainingImageMotionRight>
            </div>
            <div className="cards__card">
              <TrainingImageMotionLeft>
                <div className="cards__card__imageContainer">
                  <picture>
                    <source
                      media="(max-width:640px)"
                      srcSet="images/canary-mobile.jpg"
                    />
                    <source
                      media="(max-width:1200px)"
                      srcSet="images/canary-tablet.jpg"
                    />
                    <img
                      className="cards__card__imageContainer-item"
                      src="images/canary-desktop.jpg"
                      alt="meeting-event"
                    />
                  </picture>
                </div>
              </TrainingImageMotionLeft>
              <div className="cards__card__info" id="Trainings-canary">
                <TrainingCard
                  name="Canary islands"
                  term1="13-19.07.2024 "
                  term2="20.07-26.07.2024"
                  duration="7 days"
                  learningModule="yes"
                  requiredLevel="Interm."
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
                  name="Ireland"
                  term1="28.07.2024 - 03.08.2024"
                  term2="04.08.2024 - 10.08.2024"
                  duration="7 days"
                  learningModule="yes"
                  requiredLevel="Interm."
                  link="#Home-form"
                />
              </div>
              <TrainingImageMotionRight>
                <div className="cards__card__imageContainer">
                  <picture>
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
              </TrainingImageMotionRight>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingPage;
