import Image from 'next/image';
import { getContent, getMultipleContent } from '@/lib/api';
import './Aqu.scss';

export default async function Aqu({ locale }: { locale: string }) {
  const { sectionAquTitle } = await getContent('sectionAquTitle', locale);
  const cards = await getMultipleContent('sectionAquCard', locale);

  return (
    <section className="aqu-section">
      <div className="container">
        <header className="aqu-section__header">
          <h2 className="aqu-section__header-text">
            {sectionAquTitle as string}
          </h2>
        </header>

        <div className="aqu-section__container">
          {cards.length ? (
            cards.map((elem, id) => (
              <div key={`aquCard-${id}`} className="aqu-section__item">
                <Image
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  src={elem.fields.cardImage.fields.file.url}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  alt={`icon of ${elem.fields.cardImage.fields.title}`}
                  width={40}
                  height={40}
                />
                <h3 className="aqu-section__title">
                  {elem.fields.cardTitle as string}
                </h3>
                <div className="aqu-section__text">
                  {elem.fields.cardDescription as string}
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `console.log(${JSON.stringify(cards)})`,
        }}
      />
    </section>
  );
}
