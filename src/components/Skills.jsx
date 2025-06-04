const Skills = () => {
  const skills = ["HTML5", "CSS", "C++", "REACT.js", "NODE.js", "Python"];
     
  // Sleek black theme styling
  const skillsStyle = `
    .skills-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
      backdrop-filter: blur(20px);
    }
    .skills-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .skills-title {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 32px 0;
      letter-spacing: -0.5px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .skill-item {
      background: rgba(255, 255, 255, 0.05);
      color: #e5e5e5;
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    .skill-item:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  `;
 
  return (
    <>
      <style>{skillsStyle}</style>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;