const About = () => {
  // Sleek black theme styling
  const aboutStyle = `
    .about-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
      backdrop-filter: blur(20px);
    }
    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .about-title {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 24px 0;
      letter-spacing: -0.5px;
    }
    .about-text {
      font-size: 18px;
      line-height: 1.6;
      color: #b3b3b3;
      margin: 0;
      max-width: 600px;
    }
  `;
 
  return (
    <>
      <style>{aboutStyle}</style>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a Computer Engineering student at Vidyalankar Polytechnic with a passion for building robust backend systems and modern web applications. Currently focused on becoming a Full Stack Engineer with expertise in both frontend and backend technologies. I enjoy solving complex problems and creating efficient, scalable solutions.


          </p>
        </div>
      </section>
    </>
  );
};

export default About;