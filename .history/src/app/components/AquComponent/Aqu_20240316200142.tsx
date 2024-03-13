import Image from 'next/image';

export const Aqu = () => {
  // temporary mockup data
  const data = [
    { header: 'Why AQE?' },
    {
      id: 1,
      title: 'Experience-based learning',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 2,
      title: 'Experience-based learning',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 3,
      title: 'Experience-based learning',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 4,
      title: 'Experience-based learning',
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
  ];

  return (
    <div className="aqu-section">
      <header className="aqu-section__header">
        <h2 className="aqu-section__text">{data.header}</h2>
      </header>

      <div className="aqu-section__container">
        {data.length ? (
          data.map((elem) => {
            <div key={elem.id} className="aqu-section__item">
              <Image alt="icon">{elem.icon}</Image>
              <h2>{elem.title}</h2>

              <div>{elem.text}</div>
            </div>;
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};
