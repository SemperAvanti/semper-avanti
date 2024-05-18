import Image from 'next/image';
import Button from '../Button/Button';
import './Home.scss';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { Entry, EntrySkeletonType } from 'contentful';
import { useLanguage } from '../LanguageContext';

// Object below is only for country codes
// {
//   English = 'en-US',
//   Spanisch = 'es-ES',
//   Polish = 'pl-PL',
//   French = 'fr-FR',
// }

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const getBlogPosts = async (locale = 'en-US') => {
  const response = await client.getEntries({
    content_type: 'sectionHome',
    locale,
  });

  return response.items;
};

const HomePage = () => {
  const [posts, setPosts] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const postsData: Entry<EntrySkeletonType, undefined, string>[] =
        await getBlogPosts(language);
      setPosts(postsData);
      console.log(postsData);
    };
    fetchData();
  }, [language]);

  return (
    <section className="home" id="Home">
      <div className="home__title">
        <div className="home__title__container">
          <h1 className="home__h1">
            <span className="home--titleWrapper">
              {posts.map((post) => (
                <div key={post.sys.id}>
                  {typeof post.fields.sectionHomeTitle === 'string' &&
                    post.fields.sectionHomeTitle}
                </div>
              ))}
              <div className="blueLine"></div>
            </span>

            {/* <span className="home--titleWrapper--top">
              Empower with AQE Educate.
            </span> */}
          </h1>
        </div>

        <p className="home__text ">
          {posts.map((post) => (
            <div key={post.sys.id}>
              {typeof post.fields.sectionHomeDescription === 'string' &&
                post.fields.sectionHomeDescription}
            </div>
          ))}{' '}
        </p>
        <div className="home__button--desktop">
          <a href="#Home-form">
            <Button name="Get info package" variant="primary" />
          </a>
        </div>
      </div>
      <Image
        src={'/World Map (1).png'}
        className="home__worldMap"
        height={602}
        width={921}
        alt={'world map'}
      />
      <Image
        src={'/World Map (1).svg'}
        className="home__worldMap--mobile"
        height={254}
        width={389}
        alt={'world map'}
      />
      <div className="home__links">
        <a href="#Trainings-malta" className="home__item body-text">
          Malta
        </a>
        <a href="#Trainings-canary" className="home__item body-text">
          Canary
        </a>
        <a href="#Trainings-ireland" className="home__item body-text">
          Ireland
        </a>
      </div>
      <div className="home__button--mobile">
        <a href="#Home-form">
          <Button name="Get info package" variant="secondary" />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
