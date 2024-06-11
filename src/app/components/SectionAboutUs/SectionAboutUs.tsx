'use client';
import { getContent } from '@/lib/api';
import './sectionAboutUs.scss';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Content {
  sectionAboutUsTitle: string;
  sectionAboutUsSmallTitle1: string;
  sectionAboutUsDescription1: string;
  sectionAboutUsSmallTitle2: string;
  sectionAboutUsDescription2: string;
}

export default function SectionAboutUs() {
  const { locale } = useParams();
  const [content, setContent] = useState<null | Content>(null);
  const [imageData, setImageData] = useState<null | string[]>(null);

  useEffect(() => {
    async function fetchData() {
      const imageResult = await getContent('sectionAboutUs', 'en-US');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setImageData(imageResult);

      const contentResult = await getContent(
        'sectionAboutUs',
        locale as string,
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setContent(contentResult);
    }

    fetchData();
  }, [locale]);

  if (!content || !imageData) {
    return <div></div>;
  }

  return (
    <section className="sectionAboutUs" id="AboutUs">
      <div className="sectionAboutUs__container container">
        <h2 className="section-title sectionAboutUs--title">
          {content.sectionAboutUsTitle}
        </h2>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <h3 className="sectionAboutUs__descriptionContainer--title">
              {content.sectionAboutUsSmallTitle1}
            </h3>
            <p className="descriptionText descriptionText--gray">
              {content.sectionAboutUsDescription1}
            </p>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <h5 className="sectionAboutUs__descriptionContainer--title">
              {content.sectionAboutUsSmallTitle2}
            </h5>
            <p className="descriptionText descriptionText--gray ">
              {content.sectionAboutUsDescription2}
            </p>
          </div>
        </div>

        <picture className="sectionAboutUs--image">
          <img
            className="sectionAboutUs--image"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            src={imageData.sectionAboutUsImage.fields.file.url}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            alt={imageData.sectionAboutUsImage.fields.title}
          />
        </picture>
      </div>
    </section>
  );
}
