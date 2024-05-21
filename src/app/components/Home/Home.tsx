import Image from 'next/image';
import Button from '../Button/Button';
import './Home.scss';
import { getContent } from '@/lib/api';

// Object below is only for country codes
// {
//   English = 'en-US',
//   Spanisch = 'es-ES',
//   Polish = 'pl-PL',
//   French = 'fr-FR',
// }

export default async function HomePage({ locale }: { locale: string }) {
  const { sectionHomeTitle, sectionHomeDescription } = await getContent(
    'sectionHome',
    locale,
  );

  return (
    <section className="home" id="Home">
      <div className="home__title">
        <div className="home__title__container">
          <h1 className="home__h1">
            <span className="home--titleWrapper">
              {sectionHomeTitle as string}
              <div className="blueLine"></div>
            </span>

            {/* <span className="home--titleWrapper--top">
              Empower with AQE Educate.
            </span> */}
          </h1>
        </div>

        <p className="home__text ">{sectionHomeDescription as string}</p>
        <div className="home__button--desktop">
          <a href="#Home-form">
            <Button name="Get info package" variant="primary" />
          </a>
        </div>
      </div>
      <Image
        src={'/World Map (1).png'}
        className="home__worldMap"
        height={602}
        width={921}
        alt={'world map'}
      />
      <Image
        src={'/World Map (1).svg'}
        className="home__worldMap--mobile"
        height={254}
        width={389}
        alt={'world map'}
      />
      <div className="home__links">
        <a href="#Trainings-malta" className="home__item body-text">
          Malta
        </a>
        <a href="#Trainings-canary" className="home__item body-text">
          Canary
        </a>
        <a href="#Trainings-ireland" className="home__item body-text">
          Ireland
        </a>
      </div>
      <div className="home__button--mobile">
        <a href="#Home-form">
          <Button name="Get info package" variant="secondary" />
        </a>
      </div>
    </section>
  );
}
