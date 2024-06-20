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
      <Image className="partners__card--image" src={imageUrl} alt={partner} />
      <h6 className="accented-body partners__card--text">{partner}</h6>
    </div>
  );
};
