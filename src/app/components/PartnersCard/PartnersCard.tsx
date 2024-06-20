'use client';
import React from 'react';
import Image from 'next/image';
import './scss/PartnersCard.scss';
import { ISectionPartnersCardFields } from '@/contentfulTypes/contentful';

type OffsetProps = {
  offset?: string | undefined;
};

type PartnersCardProps = OffsetProps & ISectionPartnersCardFields;

export const PartnersCard: React.FC<PartnersCardProps> = ({
  offset,
  partner,
  image,
}) => {
  const imageUrl =
    typeof image.fields.file?.url === 'string' ? image.fields.file.url : '';

  return (
    <div className="partners__card" style={{ marginRight: offset }}>
      <div className="partners__card--image">
        <Image
          src={`https:${imageUrl}`}
          alt={partner}
          width={230}
          height={160}
        />
      </div>

      <h6 className="accented-body partners__card--text">{partner}</h6>
    </div>
  );
};
