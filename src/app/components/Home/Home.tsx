import Image from 'next/image';
import Button from '../Button/Button';
import './Home.scss';

const HomePage = () => {
  return (
    <section className="home" id="Home">
      <div className="home__title">
        <div className="home__title__container">
          <div className="blueLine"></div>
          <h1 className="home__h1">Empower with AQE Educate.</h1>
        </div>

        <p className="home__text ">
          Your trusted partner in professional development for educators.{' '}
        </p>
        <div className="home__button--desktop">
          <Button name="Get info package" variant="primary" />
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
        <Button name="Get info package" variant="secondary" />
      </div>
    </section>
  );
};

export default HomePage;
