import './ContactUs.scss';
import '../../../styles/typography.scss';
import {
  ArticleTitleMotion,
  DescriptionsMotion,
  SectionTitleMotion,
} from '../MotionTemplates/templates';
import { ISectionContactUs } from '@/contentfulTypes/contentful';
import { getContent } from '@/lib/api';

export default async function ContactUs({ locale }: { locale: string }) {
  const {
    email,
    officeHoursName,
    officeHoursContent,
    contactUsTitle,
    addressName,
    addressContent,
    phoneName,
    phoneContent,
    excludingHolidays,
  } = await getContent<ISectionContactUs>('sectionContactUs', locale);

  return (
    <section className="ContactUs" id="ContactUs">
      <div className="container">
        <SectionTitleMotion>
          <h2 className="section-title">{contactUsTitle}</h2>
        </SectionTitleMotion>
        <div className="ContactUs__flexContainer">
          <div className="ContactUs__descriptionWrapper">
            <ArticleTitleMotion>
              <h3 className="body-text ContactUs__descriptionWrapper-title">
                Email
              </h3>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray">{email}</p>
            </DescriptionsMotion>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <ArticleTitleMotion>
              <h3 className="body-text ContactUs__descriptionWrapper-title">
                {officeHoursName}
              </h3>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray">
                {officeHoursContent}
              </p>
              <p className="descriptionText descriptionText--gray">
                {excludingHolidays}
              </p>
            </DescriptionsMotion>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <ArticleTitleMotion>
              <h3 className="body-text ContactUs__descriptionWrapper-title">
                {addressName}
              </h3>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray">
                {addressContent}
              </p>
            </DescriptionsMotion>
          </div>
          <div className="ContactUs__descriptionWrapper">
            <ArticleTitleMotion>
              <h3 className="body-text ContactUs__descriptionWrapper-title">
                {phoneName}
              </h3>
            </ArticleTitleMotion>
            <DescriptionsMotion>
              <p className="descriptionText descriptionText--gray">
                {phoneContent}
              </p>
            </DescriptionsMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
