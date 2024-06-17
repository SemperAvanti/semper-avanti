'use client';
import img from '../../../img/cocacola.svg';
import React from 'react';
import Image from 'next/image';
import './scss/PartnersCard.scss';

type OffsetProps = {
  offset?: number | undefined;
};

export const PartnersCard: React.FC<OffsetProps> = ({offset}) => {
  return (
    <div className="partners__card" style={{ marginRight: offset}}>
      <Image className="partners__card--image" src={img} alt="cocaCola" />
      <h6 className="accented-body partners__card--text">Coca Cola</h6>
    </div>
  );
};
