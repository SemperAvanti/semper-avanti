import { getContent } from '@/lib/api';
import './sectionAboutUs.scss';

export default async function SectionAboutUs({ locale }: { locale: string }) {
  const imageData = await getContent('sectionAboutUs', 'en-US');

  const {
    sectionAboutUsTitle,
    sectionAboutUsSmallTitle1,
    sectionAboutUsDescription1,
    sectionAboutUsSmallTitle2,
    sectionAboutUsDescription2,
    // sectionAboutUsImage,
  } = await getContent('sectionAboutUs', locale);

  return (
    <section className="sectionAboutUs" id="AboutUs">
      <div className="sectionAboutUs__container container">
        <h2 className="section-title sectionAboutUs--title">
          {sectionAboutUsTitle as string}{' '}
        </h2>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <h3 className="sectionAboutUs__descriptionContainer--title">
              {sectionAboutUsSmallTitle1 as string}
            </h3>
            <p className="descriptionText descriptionText--gray">
              {sectionAboutUsDescription1 as string}
            </p>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <h5 className="sectionAboutUs__descriptionContainer--title">
              {sectionAboutUsSmallTitle2 as string}
            </h5>
            <p className="descriptionText descriptionText--gray ">
              {sectionAboutUsDescription2 as string}
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

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `console.log(${JSON.stringify(imageData)})`,
          }}
        /> */}
      </div>
    </section>
  );
}
