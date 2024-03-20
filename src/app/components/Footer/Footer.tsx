/* eslint-disable @next/next/no-img-element */
import './footer.scss';

const links = [
  { text: 'Home', href: '#' },
  { text: 'About us', href: '#' },
  { text: 'Trainings', href: '#' },
  { text: 'Gallery', href: '#' },
  { text: 'Stories', href: '#' },
  { text: 'Partners', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
];

export const Footer = () => {
  return (
    <section className="Footer">
      <div className="container">
        <div className="Footer__gridContainer">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                className="Footer__gridContainer--link"
                href={`${link.href}`}
              >
                {link.text}
              </a>
            );
          })}
        </div>

        <div className="Footer__bottomLabel">
          <p className="Footer__bottomLabel--description">
            Alliance for Quality Education. All right reserved
          </p>
          <div className="Footer__logoWrapper">
            <p className="Footer__logoWrapper--text">By</p>
            <img
              src="logoMateAcademy.svg"
              alt="logoMateAcademy"
              className="Footer__logoWrapper--logo"
            />
          </div>
        </div>
        <a href="#">
          <div className="Footer__homeindicator">
            <div className="Footer__homeindicator--label" />
          </div>
        </a>
      </div>
    </section>
  );
};
