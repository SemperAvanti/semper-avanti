export const Aqu = () => {
  // temporary mockup data
  const data = [
    { header: 'Why AQE?' },
    {
      id: 1,
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 2,
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 3,
      text: 'Picture this: passionate educators coming together in a vibrant setting, fueled by cutting-edge pedagogy, interactive workshops, and collaborative learning. Our camps are more than just sessions',
      icon: '@/public/check.svg',
    },
    {
      id: 4,
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

        {
            data.length ? (
                di
            )
        }

      </div>
    </div>
  );
};
