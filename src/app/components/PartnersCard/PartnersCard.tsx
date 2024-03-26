'use client';
import img from '../../../img/cocacola.svg';
import React from 'react';
import Image from 'next/image';
import './scss/PartnersCard.scss';

export const PartnersCard: React.FC = () => {
  return (
    <div className="partners__card">
      <Image src={img} alt="cocaCola" />
      <h6 className="accented-body">Coca Cola</h6>
    </div>
  );
};
