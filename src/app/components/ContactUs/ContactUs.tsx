import './ContactUs.scss';
import '../../../styles/typography.scss';

export const ContactUs = () => {
  return (
    <section className="ContactUs">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="ContactUs__flexContainer">
          <div className="ContactUs__descriptionWrapper">
            <h3 className="body-text ContactUs__descriptionWrapper-title">
              Email
            </h3>
            <p className="descriptionText descriptionText--gray">
              info@qualityineducation.org
            </p>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <h3 className="body-text ContactUs__descriptionWrapper-title">
              Office Hours
            </h3>
            <p className="descriptionText descriptionText--gray">
              Monday-Friday, 9:00 AM - 5:00 PM
            </p>
            <p className="descriptionText descriptionText--gray">
              (excluding holidays)
            </p>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <h3 className="body-text ContactUs__descriptionWrapper-title">
              Address
            </h3>
            <p className="descriptionText descriptionText--gray">
              +1 (555) 123-4567
            </p>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <h3 className="body-text ContactUs__descriptionWrapper-title">
              Phone Number
            </h3>
            <p className="descriptionText descriptionText--gray">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
