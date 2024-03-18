import './footer.scss';

export const Footer = () => {
  return (
    <section className="Footer ">
      <div className="container">
        <div className="Footer-gridContainer">
          <a className="Footer-link" href="#">
            Home
          </a>
          <a className="Footer-link" href="#">
            About us
          </a>
          <a className="Footer-link" href="#">
            Trainings
          </a>
          <a className="Footer-link" href="#">
            Gallery
          </a>
          <a className="Footer-link" href="#">
            Stories
          </a>
          <a className="Footer-link" href="#">
            Partners
          </a>
          <a className="Footer-link" href="#">
            FAQ
          </a>
          <a className="Footer-link" href="tel:+15551234567">
            +1 (555) 123-4567
          </a>
        </div>

        <div className="Footer__bottomLabel">
          <p className="Footer__bottomLabel-description">
            Alliance for Quality Education. All right reserved
          </p>
          <div className="logoWrapper">
            <p className="logoWrapper-text">By</p>
            <div className="logoWrapper-logoMA"></div>
          </div>
        </div>

        <div className="Footer-homeindicator">
          <div className="Footer-homeindicator-label">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Footer;
