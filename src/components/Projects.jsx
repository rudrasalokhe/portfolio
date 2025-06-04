const Projects = () => {
  const projects = [
    {
      name: 'Trainify Bot - Document Translator',
      description: 'Trainify Bot is an AI-powered tool that takes input documents and translates them into multiple languages, providing the output in a downloadable PDF format. Built using modern NLP techniques and language processing APIs, it supports batch processing and maintains document formatting',
      link: 'https://trainify-bot.vercel.app/',
      github: 'https://github.com/rudrasalokhe/Trainify-bot'
    },
    {
      name: 'Weather Application',
      description: 'Real-time weather tracking application with a beautiful and intuitive UI. Provides current conditions, hourly and 7-day forecasts, using modern JavaScript and weather APIs. The app features location detection, search functionality, and responsive design for all devices.',
      link: 'https://webtraco.netlify.app/',
      github: 'https://github.com/rudrasalokhe/Weather-Tracker'
    }
  ];
     
  // Sleek black theme styling
  const projectsStyle = `
    .projects-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
      backdrop-filter: blur(20px);
    }
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .projects-title {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 32px 0;
      letter-spacing: -0.5px;
    }
    .projects-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .project-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
    }
    .project-name {
      font-size: 20px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 12px 0;
      letter-spacing: -0.3px;
    }
    .project-description {
      color: #b3b3b3;
      line-height: 1.6;
      margin: 0 0 20px 0;
      font-size: 14px;
    }
    .project-links {
      display: flex;
      gap: 12px;
    }
    .project-link {
      background: rgba(255, 255, 255, 0.05);
      color: #e5e5e5;
      padding: 8px 16px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    .project-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }
  `;
 
  return (
    <>
      <style>{projectsStyle}</style>
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.name} className="project-card">
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-description">{proj.description}</p>
                <div className="project-links">
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View Project
                  </a>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;