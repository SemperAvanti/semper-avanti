import { getContent } from '@/lib/api';
import './sectionAboutUs.scss';
import {
  ISectionAboutUsFields,
  LOCALE_CODE,
} from '@/contentfulTypes/contentful';

export default async function SectionAboutUs({
  locale,
}: {
  locale: LOCALE_CODE;
}) {
  const imageData = await getContent<ISectionAboutUsFields>(
    'sectionAboutUs',
    'en-US',
  );
  const {
    sectionAboutUsTitle,
    sectionAboutUsSmallTitle1,
    sectionAboutUsDescription1,
    sectionAboutUsSmallTitle2,
    sectionAboutUsDescription2,
  } = await getContent<ISectionAboutUsFields>('sectionAboutUs', locale);

  return (
    <section className="sectionAboutUs" id="AboutUs">
      <div className="sectionAboutUs__container container">
        <h2 className="section-title sectionAboutUs--title">
          {sectionAboutUsTitle}
        </h2>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <h3 className="sectionAboutUs__descriptionContainer--title">
              {sectionAboutUsSmallTitle1}
            </h3>
            <p className="descriptionText descriptionText--gray">
              {sectionAboutUsDescription1}
            </p>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <h5 className="sectionAboutUs__descriptionContainer--title">
              {sectionAboutUsSmallTitle2}
            </h5>
            <p className="descriptionText descriptionText--gray ">
              {sectionAboutUsDescription2}
            </p>
          </div>
        </div>

        <picture className="sectionAboutUs--image">
          <img
            className="sectionAboutUs--image"
            src={imageData.sectionAboutUsImage?.fields?.file?.url as string}
            alt={imageData.sectionAboutUsImage?.fields.title as string}
          />
        </picture>
      </div>
    </section>
  );
}
