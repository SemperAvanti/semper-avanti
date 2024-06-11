/* eslint-disable */
// @ts-nocheck
'use client';
import Image from 'next/image';
import { getContent, getMultipleContent } from '@/lib/api';
import './Aqu.scss';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Content {
  sectionAquTitle: string;
}


interface Card {
  sectionAquTitle: string;
}

export default function Aqu() {
  const [content, setContent] = useState<null | Content>(null);
  const [cards, setCards] = useState<null | []>(null);

  const { locale } = useParams();

  useEffect(() => {
    async function fetchData() {
      const cards = await getMultipleContent(
        'sectionAquCard',
        locale as string,
      );     
      console.log(cards);
      setCards(cards);

      const contentResult = await getContent(
        'sectionAquTitle',
        locale as string,
      );     
      setContent(contentResult);
    }

    fetchData();
  }, [locale]);

  if (!content) {
    return <div></div>;
  }

  return (
    <section className="aqu-section">
      <div className="container">
        <header className="aqu-section__header">
          <h2 className="aqu-section__header-text">
            {content.sectionAquTitle}
          </h2>
        </header>

        <div className="aqu-section__container">
          {cards &&
            cards.map((elem, id) => (
              <div key={`aquCard-${id}`} className="aqu-section__item">
                <Image
                  src={elem.fields.cardImage.fields.file.url as string}
                  alt={`icon of ${elem.fields.cardImage.fields.title}`}
                  width={40}
                  height={40}
                />

                <h3 className="aqu-section__title">
                
                  {elem.fields.cardTitle}
                </h3>
                <div className="aqu-section__text">
                  {elem.fields.cardDescription as string }
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
