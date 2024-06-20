import Image from 'next/image';
import './Aqu.scss';
import {
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

export const Aqu = () => {
  // temporary mockup data
  const data = [
    {
      id: 1,
      title: 'Inspiring Environment',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '/light.svg',
    },
    {
      id: 2,
      title: 'Refreshing Experience',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '/battery.svg',
    },
    {
      id: 3,
      title: 'Practical Application',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '/work-outline.svg',
    },
    {
      id: 4,
      title: 'Professional Growth',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '/chart.svg',
    },
  ];

  const header = 'Why AQE?';

  return (
    <section className="aqu-section">
      <div className="container">
        <header className="aqu-section__header">
          <SectionTitleMotion>
            <h2 className="aqu-section__header-text">{header}</h2>
          </SectionTitleMotion>
        </header>
        <ListMotion>
          <div className="aqu-section__container">
            {data.length ? (
              data.map((elem) => (
                <div key={elem.id} className="aqu-section__item">
                  <ItemMotion>
                    <Image
                      src={elem.icon}
                      alt={`icon of ${elem.title}`}
                      width={40}
                      height={40}
                    />
                  </ItemMotion>
                  <h3 className="aqu-section__title">{elem.title}</h3>
                  <div className="aqu-section__text">{elem.text}</div>
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        </ListMotion>
      </div>
    </section>
  );
};
