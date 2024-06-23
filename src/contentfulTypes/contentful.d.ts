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

export interface ISectionPartnersCardFields {
  /** partner */
  partner: string;

  /** image */
  image: Asset;
}

export interface ISectionPartnersCard
  extends Entry<ISectionPartnersCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionPartnersCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionPartnersTitleFields {
  /** Section Title */
  sectionTitle: string;
}

export interface ISectionPartnersTitle
  extends Entry<ISectionPartnersTitleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionPartnersTitle';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionStoriesCardFields {
  /** fullname */
  fullname: string;

  /** photo */
  photo: Asset;

  /** quote */
  quote?: string | undefined;
}

export interface ISectionStoriesCard extends Entry<ISectionStoriesCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionStoriesCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionStoriesTitleFields {
  /** Section Title */
  sectionTitle: string;
}

export interface ISectionStoriesTitle
  extends Entry<ISectionStoriesTitleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionStoriesTitle';
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

  /** CardFieldName--1Term */
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

  /** I Term */
  ITerm?: string | undefined;

  /** II Term */
  IITerm?: string | undefined;

  /** Duration */
  duration?: string | undefined;

  /** Learning English Module */
  learningEnglishModule?: boolean | undefined;

  /** Required English Level */
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

export interface ISectionFAQTitleField {
  /** Section Title */
  sectionTitle: string;
}

export interface ISectionFAQTitle
  extends Entry<ISectionFAQTitleField> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionFaqTitle';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionFAQCardFields {
  id: string;
  /** card--question */
  sectionQuestion: string;
  /** card--answer */
  sectionAnswer: string;
}

export interface ISectionFaqCard extends Entry<ISectionFAQCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionFaqCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionFAQFooterFields {
  /** card--question */
  sectionExplanation: string;
  /** card--answer */
  sectionLink: string;
}

export interface ISectionFaqFooter extends Entry<ISectionFAQFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionFaqFooter';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

sectionFaqFooter

export type CONTENT_TYPE =
  | 'navigation'
  | 'sectionAboutUs'
  | 'sectionAquCard'
  | 'sectionAquTitle'
  | 'sectionForm'
  | 'sectionHome'
  | 'sectionPartnersCard'
  | 'sectionPartnersTitle'
  | 'sectionStoriesCard'
  | 'sectionStoriesTitle'
  | 'sectionTrainings'
  | 'sectionTrainingsCard'
  | 'sectionFaqCard'
  | 'sectionFaqTitle'
  | 'sectionFaqFooter'
  | 'whyAqe';

export type IEntry =
  | INavigation
  | ISectionAboutUs
  | ISectionAquCard
  | ISectionAquTitle
  | ISectionForm
  | ISectionHome
  | ISectionPartnersCard
  | ISectionPartnersTitle
  | ISectionStoriesCard
  | ISectionStoriesTitle
  | ISectionTrainings
  | ISectionTrainingsCard
  | IWhyAqe
  | ISectionFaqTitle
  | ISectionFaqCard
  | ISectionFaqFooter;

  

export type LOCALE_CODE = 'en-US' | 'pl-PL';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
