'use client';
import img from '../../../img/img.png';
import React from 'react';
import Image from 'next/image';
import './scss/StoriesCard.scss';

type OffsetProps = {
  offset?: number | undefined;
};

export const StoriesCard: React.FC<OffsetProps> = ({ offset }) => {
  return (
    <div className="stories__card" style={{ marginRight: offset }}>
      <div className="stories__card--image">
        <Image src={img} alt="img" />
      </div>
      <div className="stories__card--content card__content">
        <p className="card__content--text descriptionText">
          &quot;Joining the community forum has been a game-changer for me as an
          educator. The support, collaboration, and wealth of resources
          available here have truly enriched my teaching practice.”
        </p>
        <h4 className="body-text card__content--title body-text">
          Jimmy Jones
        </h4>
      </div>
    </div>
  );
};
