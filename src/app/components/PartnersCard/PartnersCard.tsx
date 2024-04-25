'use client';
import img from '../../../img/cocacola.svg';
import React from 'react';
import Image from 'next/image';
import './scss/PartnersCard.scss';

export const PartnersCard: React.FC = () => {
  return (
    <div className="partners__card">
      <Image className="partners__card--image" src={img} alt="cocaCola" />
      <h6 className="accented-body partners__card--text">Coca Cola</h6>
    </div>
  );
};
