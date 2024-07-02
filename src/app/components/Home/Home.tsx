import Image from 'next/image';
import Button from '../Button/Button';
import './Home.scss';
import { getContent, getMultipleContent } from '@/lib/api';
import {
  ISectionHomeFields,
  ISectionTrainingsCardFields,
} from '@/contentfulTypes/contentful';
import {
  ArticleTitleMotion,
  DescriptionsMotion,
  ImageMotion,
  LinkMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';

type Props = {
  locale: string;
  id: string;
};

export default async function HomePage({ locale, id }: Props) {
  const { sectionHomeTitle, sectionHomeDescription } =
    await getContent<ISectionHomeFields>('sectionHome', locale);
  const trainingCards = await getMultipleContent<ISectionTrainingsCardFields>(
    'sectionTrainingsCard',
    locale,
  );

  return (
    <section className="home" id={id}>
      <div className="home__title">
        <div className="home__title__container">
          <SectionTitleMotion>
            <h1 className="home__h1">
              <span className="home--titleWrapper">
                {sectionHomeTitle}
                <ArticleTitleMotion class_name={'blueLine'} />
              </span>
            </h1>
          </SectionTitleMotion>
        </div>

        <DescriptionsMotion>
          <p className="home__text ">{sectionHomeDescription}</p>
        </DescriptionsMotion>
        <DescriptionsMotion>
          <div className="home__button--desktop">
            <a href="#Home-form">
              <Button name="Get info package" variant="primary" />
            </a>
          </div>
        </DescriptionsMotion>
      </div>
      <ImageMotion>
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
      </ImageMotion>
      <ListMotion>
        <div className="home__links">
          {trainingCards &&
            trainingCards.map((card) => {
              return (
                <LinkMotion key={`HomeLink-${card.countryName}`}>
                  <a
                    href={`#${card.countryName}`}
                    className="home__item body-text"
                    key={card.countryName}
                  >
                    {card.countryName}
                  </a>
                </LinkMotion>
              );
            })}
        </div>
      </ListMotion>
      <DescriptionsMotion>
        <div className="home__button--mobile">
          <a href="#Home-form">
            <Button name="Get info package" variant="secondary" />
          </a>
        </div>
      </DescriptionsMotion>
    </section>
  );
}
