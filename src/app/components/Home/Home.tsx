import Image from 'next/image';
import Button from '../Button/Button';
import './Home.scss';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home__left">
          <h1 className="H1">Empower with AQE Educate.</h1>
          <div className="blueLine"></div>
          <p className="description-text ">
            Your trusted partner in professional development for educators.{' '}
          </p>
          <div className="button-desktop">
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
        <div className="home__links">
          <a href="#Malta" className="home__item body-text">
            Malta
          </a>
          <a href="#Canary" className="home__item body-text">
            Canary
          </a>
          <a href="#Ireland" className="home__item body-text">
            Ireland
          </a>
        </div>
        <div className="button-mobile">
          <Button name="Get info package" variant="secondary" />
        </div>
      </section>
    </>
  );
};

export default Home;
