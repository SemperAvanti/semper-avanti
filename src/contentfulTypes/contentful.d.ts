// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface INavigationFields {
  /** nav-items */
  navItems?: string[] | undefined;
}

export interface INavigation extends Entry<INavigationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'navigation';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionAboutUsFields {
  /** sectionAboutUs--title */
  sectionAboutUsTitle?: string | undefined;

  /** sectionAboutUs--smallTitle-1 */
  sectionAboutUsSmallTitle1?: string | undefined;

  /** sectionAboutUs--description-1 */
  sectionAboutUsDescription1?: string | undefined;

  /** sectionAboutUs--smallTitle-2 */
  sectionAboutUsSmallTitle2?: string | undefined;

  /** sectionAboutUs--description-2 */
  sectionAboutUsDescription2?: string | undefined;

  /** sectionAboutUs--image-desktop */
  sectionAboutUsImage?: Asset | undefined;
}

export interface ISectionAboutUs extends Entry<ISectionAboutUsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionAboutUs';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionAquCardFields {
  /** card--image */
  cardImage?: Asset | undefined;

  /** card--title */
  cardTitle?: string | undefined;

  /** card--description */
  cardDescription?: string | undefined;

  /** order */
  order?: number | undefined;
}

export interface ISectionAquCard extends Entry<ISectionAquCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionAquCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionAquTitleFields {
  /** sectionAQU--title */
  sectionAquTitle?: string | undefined;
}

export interface ISectionAquTitle extends Entry<ISectionAquTitleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionAquTitle';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionFormFields {
  /** Get more in our info package */
  getMoreInOurInfoPackage: string;

  /** Fill the form  */
  fillTheForm: string;

  /** I agree to receive */
  iAgreeToReceive: string;

  /** Full Name */
  fullName: string;

  /** Country */
  country: string;
}

export interface ISectionForm extends Entry<ISectionFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionForm';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionHomeFields {
  /** Section_Home--title */
  sectionHomeTitle: string;

  /** Section_Home--description */
  sectionHomeDescription: string;

  /** Section_Home--button */
  sectionHomeButton?: string | undefined;

  /** Section_Home--picture */
  sectionHomePicture?: Asset | undefined;

  /** Section_Home--list */
  sectionHomeList?: string | undefined;
}

export interface ISectionHome extends Entry<ISectionHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionHome';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionTrainingsFields {
  /** Section__Trainings--title */
  sectionTrainingsTitle?: string | undefined;

  /** Section__Trainings--description */
  sectionTrainingsDescription?: string | undefined;

  /** Want more info */
  wantMoreInfo?: string | undefined;

  /** CardField--1Term */
  cardField1Term?: string | undefined;

  /** CardFieldName--2Term */
  cardFieldName2Term?: string | undefined;

  /** CardFieldName--Duration */
  cardFieldNameDuration?: string | undefined;

  /** CardFieldName--LearningEnglishModule */
  cardFieldNameLearningEnglishModule?: string | undefined;

  /** CardFieldName--RequiredEnglishLevel */
  cardFieldNameRequiredEnglishLevel?: string | undefined;
}

export interface ISectionTrainings extends Entry<ISectionTrainingsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionTrainings';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionTrainingsCardFields {
  /** CountryName */
  countryName?: string | undefined;

  /** field-1-value */
  ITerm?: string | undefined;

  /** field-2-value */
  IITerm?: string | undefined;

  /** field-3-value */
  duration?: string | undefined;

  /** field-4-value */
  learningEnglishModule?: boolean | undefined;

  /** field-5-value */
  requiredEnglishLevel?: string | undefined;

  /** picture */
  picture?: Asset | undefined;
}

export interface ISectionTrainingsCard
  extends Entry<ISectionTrainingsCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionTrainingsCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IWhyAqeFields {
  /** Why__AQE--Title1 */
  whyAqeTitle1?: Document | undefined;

  /** Why__AQE--description1 */
  whyAqeDescription1?: Document | undefined;
}

export interface IWhyAqe extends Entry<IWhyAqeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'whyAqe';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'navigation'
  | 'sectionAboutUs'
  | 'sectionAquCard'
  | 'sectionAquTitle'
  | 'sectionForm'
  | 'sectionHome'
  | 'sectionTrainings'
  | 'sectionTrainingsCard'
  | 'whyAqe';

export type IEntry =
  | INavigation
  | ISectionAboutUs
  | ISectionAquCard
  | ISectionAquTitle
  | ISectionForm
  | ISectionHome
  | ISectionTrainings
  | ISectionTrainingsCard
  | IWhyAqe;

export type LOCALE_CODE = 'en-US' | 'pl-PL';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
