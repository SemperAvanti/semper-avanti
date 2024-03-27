/* eslint-disable @next/next/no-img-element */
import './footer.scss';

const links = [
  { text: 'Home', href: '#Home' },
  { text: 'About us', href: '#AboutUs' },
  { text: 'Trainings', href: '#Trainings' },
  { text: 'Gallery', href: '#Gallery' },
  { text: 'Stories', href: '#Stories' },
  { text: 'Partners', href: '#Partners' },
  { text: 'FAQ', href: '#FAQ' },
  { text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
];

export const Footer = () => {
  return (
    <footer className="Footer">
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

          <a
            className="Footer__logoMA-link"
            target="blank"
            href="https://mate.academy/pl?utm_source=google&utm_medium=cpc&utm_campaign=GEO-PL_BRAND_MXD_SEA_-_MCL_-_-_GOA&utm_content=KW_Mate-academy_-_PCorTAB&utm_term=kwd-490518305899_e_mate%20academy&gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fjur8wSE7BzISo7Z4Bq7vCnQwov7JklMc7HhkbgKxQTtRKLNwaALvkaAioKEALw_wcB"
          >
            <div className="Footer__logoWrapper">
              <p className="Footer__logoWrapper--text">By</p>
              <img
                src="logoMateAcademy.svg"
                alt="logoMateAcademy"
                className="Footer__logoWrapper--logo"
              />
            </div>
          </a>
        </div>

        <a className="Footer__homeindicator" href="#Home">
          <div className="Footer__homeindicator--label" />
        </a>
      </div>
    </footer>
  );
};
