import { getContent } from '@/lib/api';
import './sectionAboutUs.scss';
import {
  SectionTitleMotion,
  DescriptionsMotion,
  ArticleTitleMotion,
  ImageMotion,
} from '../MotionTemplates/templates';
import { ISectionAboutUsFields } from '@/contentfulTypes/contentful';

type Props = {
  locale: string;
  id: string;
};

export default async function SectionAboutUs({ locale, id }: Props) {
  const {
    sectionAboutUsImage,
    sectionAboutUsTitle,
    sectionAboutUsSmallTitle1,
    sectionAboutUsDescription1,
    sectionAboutUsSmallTitle2,
    sectionAboutUsDescription2,
  } = await getContent<ISectionAboutUsFields>('sectionAboutUs', locale);

  return (
    <section className="sectionAboutUs" id={id}>
      <div className="sectionAboutUs__container container">
        <div className="sectionAboutUs__title">
          <SectionTitleMotion>
            <h2 className="section-title">{sectionAboutUsTitle}</h2>
          </SectionTitleMotion>
        </div>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <ArticleTitleMotion>
              <h3 className="sectionAboutUs__descriptionContainer--title">
                {sectionAboutUsSmallTitle1}
              </h3>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray">
                {sectionAboutUsDescription1}
              </p>
            </DescriptionsMotion>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <ArticleTitleMotion>
              <h5 className="sectionAboutUs__descriptionContainer--title">
                {sectionAboutUsSmallTitle2}
              </h5>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray ">
                {sectionAboutUsDescription2}
              </p>
            </DescriptionsMotion>
          </div>
        </div>
        {sectionAboutUsImage?.fields?.file?.url && (
          <picture className="sectionAboutUs--image">
            <ImageMotion>
              <source
                media="(max-width:640px)"
                srcSet="images/meetingEvent-mobile.jpg"
              />
              <source
                media="(max-width:1200px)"
                srcSet="images/meetingEvent-tablet.jpg"
              />
              <img
                className="sectionAboutUs--image"
                src={sectionAboutUsImage?.fields?.file?.url as string}
                alt={sectionAboutUsImage?.fields.title as string}
              />
            </ImageMotion>
          </picture>
        )}
      </div>
    </section>
  );
}
