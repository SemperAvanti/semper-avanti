'use client';
import { useEffect, useState } from 'react';
import './sectionAboutUs.scss';
import { fetchIds } from '@/lib/fetchIds';
import { MenuData } from '@/app/types/menuData';
import { useParams } from 'next/navigation';

export const SectionAboutUs = () => {
  const [ids, setIds] = useState<MenuData | null>(null);
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchIds(locale);
      setIds(result);
    };

    fetchDataAsync();
  }, [locale]);

  return (
    <section
      className="sectionAboutUs"
      id={
        (ids && ids.navItems[1]?.title.toLowerCase().replace(/\s+/g, '-')) ||
        undefined
      }
    >
      <div className="sectionAboutUs__container container">
        <h2 className="section-title sectionAboutUs--title">About us</h2>

        <div className="sectionAboutUs__gridWrapper">
          <div className="sectionAboutUs__descriptionContainer">
            <h3 className="sectionAboutUs__descriptionContainer--title">
              Our mission
            </h3>
            <p className="descriptionText descriptionText--gray">
              Through innovative training initiatives and personalized support,
              we aim to equip educators with the{' '}
              <span className="descriptionText descriptionText--accented">
                knowledge, skills, and confidence needed
              </span>{' '}
              to inspire lifelong learning and academic success in their
              students.
            </p>
          </div>

          <div className="sectionAboutUs__descriptionContainer">
            <h5 className="sectionAboutUs__descriptionContainer--title">
              Our vision
            </h5>
            <p className="descriptionText descriptionText--gray ">
              Our vision at AQE is to create a world where every educator has
              access to high-quality training and resources, empowering them to
              foster a{' '}
              <span className="descriptionText descriptionText--accented">
                dynamic and enriching learning environment
              </span>{' '}
              for all students.
            </p>
          </div>
        </div>

        <picture className="sectionAboutUs--image">
          <source
            media="(max-width:640px)"
            srcSet="images/meetingEvent-mobile.jpg"
          />
          <source
            media="(max-width:1200px)"
            srcSet="images/meetingEvent-tablet.jpg"
          />
          <img
            className="sectionAboutUs--image"
            src="images/meetingEvent-desktop.jpg"
            alt="meeting-event"
          />
        </picture>
      </div>
    </section>
  );
};
