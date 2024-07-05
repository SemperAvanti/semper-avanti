/* eslint-disable @next/next/no-img-element */
import { MenuData } from '@/app/types/menuData';
import NavigationLinks from '../Menu/NavigationLinks';
import './footer.scss';
import { getContent } from '@/lib/api';
import { IPhoneNumberFields } from '@/contentfulTypes/contentful';

export const Footer = async ({ links }: { links: MenuData | null }) => {
  const { phoneTitle, phoneLink } =
    await getContent<IPhoneNumberFields>('phoneNumber');

  return (
    <footer className="Footer">
      <div className="container">
        <ul className="Footer__gridContainer">
          {links && (
            <NavigationLinks
              links={links}
              class_name={'Footer__gridContainer--link'}
            />
          )}
          <li key="phone_number">
            <a
              href={`tel:${phoneLink}`}
              className="Footer__gridContainer--link"
            >
              {phoneTitle}
            </a>
          </li>
        </ul>
        <div className="Footer__bottomLabel">
          <p className="Footer__bottomLabel--description">
            Alliance for Quality Education. All rights reserved.
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
