import Image from 'next/image';
import { getContent, getMultipleContent } from '@/lib/api';
import './Aqu.scss';
import {
  ISectionAquCardFields,
  ISectionAquTitleFields,
} from '@/contentfulTypes/contentful';

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
          <h2 className="aqu-section__header-text">{sectionAquTitle}</h2>
        </header>

        <div className="aqu-section__container">
          {cards &&
            cards.map((elem, id) => (
              <div key={`aquCard-${id}`} className="aqu-section__item">
                <Image
                  src={elem.cardImage?.fields?.file?.url ?? ''}
                  alt={`icon of ${elem.cardImage?.fields?.title ?? ''}`}
                  width={40}
                  height={40}
                />
                <h3 className="aqu-section__title">{elem.cardTitle}</h3>
                <div className="aqu-section__text">{elem.cardDescription}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
