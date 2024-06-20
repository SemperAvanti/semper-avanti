'use client';
import React from 'react';
import Image from 'next/image';
import './scss/StoriesCard.scss';
import { ISectionStoriesCardFields } from '@/contentfulTypes/contentful';

type OffsetProps = {
  offset?: string | undefined;
};

type StoriesCardProps = OffsetProps & ISectionStoriesCardFields;

export const StoriesCard: React.FC<StoriesCardProps> = ({
  offset,
  fullname,
  photo,
  quote,
}) => {
  const imageUrl =
    typeof photo?.fields?.file?.url === 'string' ? photo.fields.file.url : '';

  return (
    <div className="stories__card" style={{ marginRight: offset }}>
      <div className="stories__card--image">
        <Image
          src={`https:${imageUrl}`}
          alt={fullname}
          width={262}
          height={173}
        />
      </div>
      <div className="stories__card--content card__content">
        <p className="card__content--text descriptionText">
          &quot;{quote}&quot;
        </p>
        <h4 className="body-text card__content--title body-text">{fullname}</h4>
      </div>
    </div>
  );
};
