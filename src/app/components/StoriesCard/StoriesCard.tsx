'use client';
import img from '../../../img/img.png';
import React from 'react';
import Image from 'next/image';
import './scss/StoriesCard.scss';

export const StoriesCard: React.FC = () => {
  return (
    <div className="card">
      <Image src={img} alt="img" />
      <p className="description-text">
        &quot;Joining the community forum has been a game-changer for me as an
        educator. The support, collaboration, and wealth of resources available
        here have truly enriched my teaching practice.”
      </p>
      <h4 className="body-text">Jimmy Jones</h4>
    </div>
  );
};
