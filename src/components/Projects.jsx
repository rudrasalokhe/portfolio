import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      name: 'Trainify Bot - Document Translator',
      description: 'Trainify Bot is an AI-powered tool that takes input documents and translates them into multiple languages, providing the output in a downloadable PDF format. Built using modern NLP techniques and language processing APIs, it supports batch processing and maintains document formatting',
      link: 'https://trainify-bot.vercel.app/',
      github: 'https://github.com/rudrasalokhe/Trainify-bot',
      tech: ['AI/ML', 'NLP', 'PDF Processing']
    },
    {
      name: 'Weather Application',
      description: 'Real-time weather tracking application with a beautiful and intuitive UI. Provides current conditions, hourly and 7-day forecasts, using modern JavaScript and weather APIs. The app features location detection, search functionality, and responsive design for all devices.',
      link: 'https://webtraco.netlify.app/',
      github: 'https://github.com/rudrasalokhe/Weather-Tracker',
      tech: ['JavaScript', 'API Integration', 'Responsive Design']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
    },
    backgroundContainer: {
      position: 'absolute',
      inset: '0',
    },
    orb1: {
      position: 'absolute',
      top: '25%',
      left: '25%',
      width: '128px',
      height: '128px',
      backgroundColor: 'rgba(75, 85, 99, 0.1)',
      borderRadius: '50%',
      filter: 'blur(32px)',
      animation: 'pulse 2s infinite',
    },
    orb2: {
      position: 'absolute',
      bottom: '25%',
      right: '25%',
      width: '160px',
      height: '160px',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      borderRadius: '50%',
      filter: 'blur(32px)',
      animation: 'pulse 2s infinite',
      animationDelay: '1s',
    },
    gridPattern: {
      position: 'absolute',
      inset: '0',
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
      maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)',
    },
    mainContainer: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '0 24px',
      transition: 'all 1s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    },
    glassmorphismCard: {
      backgroundColor: 'rgba(17, 24, 39, 0.5)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(31, 41, 55, 0.5)',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      overflow: 'hidden',
    },
    contentContainer: {
      position: 'relative',
      zIndex: 10,
    },
    titleSection: {
      marginBottom: '32px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '16px',
      lineHeight: '1.2',
    },
    projectsGrid: {
      display: 'grid',
      gap: '24px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    },
    projectCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.4)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    projectCardHover: {
      backgroundColor: 'rgba(31, 41, 55, 0.6)',
      borderColor: 'rgba(75, 85, 99, 0.5)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(-4px)',
    },
    projectHeader: {
      marginBottom: '16px',
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '8px',
      transition: 'color 0.3s ease',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '12px',
    },
    techTag: {
      padding: '4px 8px',
      fontSize: '0.75rem',
      backgroundColor: 'rgba(55, 65, 81, 0.6)',
      color: '#d1d5db',
      borderRadius: '6px',
      border: '1px solid rgba(75, 85, 99, 0.5)',
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '24px',
      fontSize: '0.875rem',
      lineHeight: '1.6',
    },
    projectLinks: {
      display: 'flex',
      gap: '12px',
    },
    linkButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      backgroundColor: 'rgba(55, 65, 81, 0.6)',
      border: '1px solid rgba(75, 85, 99, 0.5)',
      borderRadius: '8px',
      color: '#d1d5db',
      fontSize: '0.875rem',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    githubButton: {
      backgroundColor: 'rgba(31, 41, 55, 0.6)',
      border: '1px solid rgba(55, 65, 81, 0.5)',
    },
    linkIcon: {
      marginLeft: '8px',
      width: '16px',
      height: '16px',
      transition: 'transform 0.3s ease',
    },
    additionalInfo: {
      marginTop: '32px',
      textAlign: 'center',
    },
    additionalInfoText: {
      color: '#9ca3af',
      fontSize: '0.875rem',
    },
  };

  // Responsive styles
  const mediaQueries = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @media (max-width: 768px) {
      .title { font-size: 2.5rem !important; }
      .projects-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 640px) {
      .title { font-size: 2rem !important; }
      .glassmorphism-card { padding: 20px !important; }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <section style={styles.section}>
        {/* Animated background elements */}
        <div style={styles.backgroundContainer}>
          {/* Floating orbs */}
          <div style={styles.orb1}></div>
          <div style={styles.orb2}></div>
          
          {/* Grid pattern */}
          <div style={styles.gridPattern}></div>
        </div>

        {/* Main content container */}
        <div style={styles.mainContainer}>
          
          {/* Glassmorphism card */}
          <div style={styles.glassmorphismCard} className="glassmorphism-card">
            
            {/* Content */}
            <div style={styles.contentContainer}>
              
              {/* Title */}
              <div style={styles.titleSection}>
                <h2 style={styles.title} className="title">
                  Projects
                </h2>
              </div>

              {/* Projects grid */}
              <div style={styles.projectsGrid} className="projects-grid">
                {projects.map((project, index) => (
                  <div 
                    key={project.name}
                    style={{
                      ...styles.projectCard,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transitionDelay: `${index * 200}ms`
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, styles.projectCardHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.target.style, styles.projectCard);
                    }}
                  >
                    {/* Project header */}
                    <div style={styles.projectHeader}>
                      <h3 style={styles.projectTitle}>
                        {project.name}
                      </h3>
                      
                      {/* Tech stack tags */}
                      <div style={styles.techStack}>
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            style={styles.techTag}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project description */}
                    <p style={styles.projectDescription}>
                      {project.description}
                    </p>

                    {/* Project links */}
                    <div style={styles.projectLinks}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.linkButton}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(75, 85, 99, 0.6)';
                          e.target.style.borderColor = 'rgba(107, 114, 128, 0.5)';
                          e.target.style.color = 'white';
                          e.target.querySelector('.link-icon').style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.6)';
                          e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                          e.target.style.color = '#d1d5db';
                          e.target.querySelector('.link-icon').style.transform = 'translateX(0)';
                        }}
                      >
                        View Project
                        <svg 
                          className="link-icon"
                          style={styles.linkIcon}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{...styles.linkButton, ...styles.githubButton}}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.6)';
                          e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                          e.target.style.color = 'white';
                          e.target.querySelector('.github-icon').style.transform = 'rotate(12deg)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
                          e.target.style.borderColor = 'rgba(55, 65, 81, 0.5)';
                          e.target.style.color = '#d1d5db';
                          e.target.querySelector('.github-icon').style.transform = 'rotate(0deg)';
                        }}
                      >
                        GitHub
                        <svg 
                          className="github-icon"
                          style={styles.linkIcon}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div style={styles.additionalInfo}>
                <p style={styles.additionalInfoText}>
                  More projects coming soon! Check out my GitHub for additional work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
