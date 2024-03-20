/* eslint-disable @next/next/no-img-element */
import './sectionAboutUs.scss';

export const SectionAboutUs: React.FC = () => {
  return (
    <section>
      <div className="sectionAboutUs__container container">
        <h2 className="section-title sectionAboutUs--title">About us</h2>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <h3 className="sectionAboutUs__descriptionContainer--title">
              Our mission
            </h3>
            <p className="descriptionText">
              Through innovative training initiatives and personalized support,
              we aim to equip educators with the{' '}
              <span className="descriptionText--accented">
                knowledge, skills, and confidence needed
              </span>{' '}
              to inspire lifelong learning and academic success in their
              students.
            </p>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <h5 className="sectionAboutUs__descriptionContainer--title">
              Our vision
            </h5>
            <p className="descriptionText ">
              Our vision at AQE is to create a world where every educator has
              access to high-quality training and resources, empowering them to
              foster a{' '}
              <span className="descriptionText--accented">
                dynamic and enriching learning environment
              </span>{' '}
              for all students.
            </p>
          </div>
        </div>

        <img
          className="sectionAboutUs--image"
          alt="meeting-event"
          srcSet="
  images/meetingEvent-mobile.jpg 640w,
  images/meetingEvent-tablet.jpg 1200w,
    images/meetingEvent-desktop.jpg 1600w
  "
          sizes="
    (max-width: 640px) 640px,
    (min-width: 641px) and (max-width: 1200px) 1200px,
    (min-width: 1201px) 1600px
  "
        />
      </div>
    </section>
  );
};
