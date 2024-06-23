import Image from 'next/image';

import './Aqu.scss';
import {
  ItemMotion,
  ListMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';
import {
  ISectionAquCardFields,
  ISectionAquTitleFields,
} from '@/contentfulTypes/contentful';
import { getContent, getMultipleContent } from '@/lib/api';

export default async function Aqu({ locale }: { locale: string }) {
  const { sectionAquTitle } = await getContent<ISectionAquTitleFields>(
    'sectionAquTitle',
    locale,
  );
  const cards = await getMultipleContent<ISectionAquCardFields>(
    'sectionAquCard',
    locale,
  );

  return (
    <section className="aqu-section">
      <div className="container">
        <header className="aqu-section__header">
          <SectionTitleMotion>
            <h2 className="aqu-section__header-text">{sectionAquTitle}</h2>
          </SectionTitleMotion>
        </header>
        <ListMotion>
          <div className="aqu-section__container">
            {cards &&
              cards.map((elem, id) => (
                <div key={`aquCard-${id}`} className="aqu-section__item">
                  <div className="aqu-card_image">
                    {elem.cardImage?.fields?.file?.url && (
                      <ItemMotion>
                        <Image
                          src={`${elem.cardImage.fields.file.url}`}
                          alt={`icon of ${elem.cardImage.fields.title}`}
                          width={40}
                          height={40}
                        />
                      </ItemMotion>
                    )}
                  </div>

                  <h3 className="aqu-section__title">{elem.cardTitle}</h3>
                  <div className="aqu-section__text">
                    {elem.cardDescription}
                  </div>
                </div>
              ))}
          </div>
        </ListMotion>
      </div>
    </section>
  );
}
