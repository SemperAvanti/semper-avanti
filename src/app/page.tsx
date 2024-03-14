export default function Home() {
  return (
    <main>
      <section>
        <div className="sectionAbout__container container">
          <h2 className="section-title sectionAbout-title">About us</h2>

          <div className="aboutUs__gridContainer">
            <div className="description-container">
              <h1 className="description-title">Our mission</h1>
              <p className="description-text">
                Through innovative training initiatives and personalized
                support, we aim to equip educators with the{' '}
                <span className="description-text--accented">
                  knowledge, skills, and confidence needed
                </span>{' '}
                to inspire lifelong learning and academic success in their
                students.
              </p>
            </div>

            <div className="description-container">
              <h1 className="description-title">Our vision</h1>
              <p className="description-text ">
                Our vision at AQE is to create a world where every educator has
                access to high-quality training and resources, empowering them
                to foster a{' '}
                <span className="description-text--accented">
                  dynamic and enriching learning environment
                </span>{' '}
                for all students.
              </p>
            </div>
          </div>

          <img className="aboutUs__image" alt="sdsd" />
        </div>
      </section>
    </main>
  );
}
