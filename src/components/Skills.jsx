import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skills = ["HTML5", "CSS", "C++", "REACT.js", "NODE.js", "Python"];

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
      top: '20%',
      right: '20%',
      width: '140px',
      height: '140px',
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 3s infinite',
    },
    orb2: {
      position: 'absolute',
      bottom: '30%',
      left: '15%',
      width: '180px',
      height: '180px',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '50%',
      filter: 'blur(50px)',
      animation: 'pulse 3s infinite',
      animationDelay: '1.5s',
    },
    orb3: {
      position: 'absolute',
      top: '60%',
      right: '40%',
      width: '100px',
      height: '100px',
      backgroundColor: 'rgba(168, 85, 247, 0.12)',
      borderRadius: '50%',
      filter: 'blur(35px)',
      animation: 'pulse 2.5s infinite',
      animationDelay: '0.8s',
    },
    gridPattern: {
      position: 'absolute',
      inset: '0',
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)',
    },
    floatingElements: {
      position: 'absolute',
      inset: '0',
      pointerEvents: 'none',
    },
    floatingDot1: {
      position: 'absolute',
      top: '15%',
      left: '10%',
      width: '4px',
      height: '4px',
      backgroundColor: 'rgba(59, 130, 246, 0.4)',
      borderRadius: '50%',
      animation: 'float 6s ease-in-out infinite',
    },
    floatingDot2: {
      position: 'absolute',
      top: '70%',
      right: '15%',
      width: '6px',
      height: '6px',
      backgroundColor: 'rgba(168, 85, 247, 0.3)',
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
      animationDelay: '2s',
    },
    mainContainer: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 24px',
      transition: 'all 1.2s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    },
    glassmorphismCard: {
      backgroundColor: 'rgba(17, 24, 39, 0.4)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(31, 41, 55, 0.6)',
      borderRadius: '20px',
      padding: '48px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden',
    },
    cardOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    },
    contentContainer: {
      position: 'relative',
      zIndex: 10,
    },
    titleSection: {
      marginBottom: '40px',
      textAlign: 'center',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '16px',
      lineHeight: '1.1',
      background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      color: '#9ca3af',
      fontSize: '1.1rem',
      fontWeight: '300',
      letterSpacing: '0.5px',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    },
    skillCard: {
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(55, 65, 81, 0.4)',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    skillCardHover: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(31, 41, 55, 0.9) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.2)',
    },
    skillName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '8px',
      transition: 'all 0.3s ease',
    },
    skillLevel: {
      height: '4px',
      backgroundColor: 'rgba(55, 65, 81, 0.5)',
      borderRadius: '2px',
      overflow: 'hidden',
      position: 'relative',
    },
    skillProgress: {
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      borderRadius: '2px',
      transition: 'width 1s ease',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
    },
    bottomText: {
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    }
  };

  // Animation keyframes
  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    @media (max-width: 768px) {
      .title { font-size: 2.5rem !important; }
      .skills-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important; }
      .glassmorphism-card { padding: 32px !important; }
    }

    @media (max-width: 640px) {
      .title { font-size: 2rem !important; }
      .skills-grid { grid-template-columns: 1fr 1fr !important; }
      .glassmorphism-card { padding: 24px !important; }
    }
  `;

  const skillLevels = [95, 90, 85, 92, 88, 87]; // Progress percentages for each skill

  return (
    <>
      <style>{keyframes}</style>
      <section style={styles.section}>
        {/* Animated background elements */}
        <div style={styles.backgroundContainer}>
          {/* Floating orbs */}
          <div style={styles.orb1}></div>
          <div style={styles.orb2}></div>
          <div style={styles.orb3}></div>
          
          {/* Grid pattern */}
          <div style={styles.gridPattern}></div>
          
          {/* Floating elements */}
          <div style={styles.floatingElements}>
            <div style={styles.floatingDot1}></div>
            <div style={styles.floatingDot2}></div>
          </div>
        </div>

        {/* Main content container */}
        <div style={styles.mainContainer}>
          {/* Glassmorphism card */}
          <div style={styles.glassmorphismCard} className="glassmorphism-card">
            <div style={styles.cardOverlay}></div>
            
            {/* Content */}
            <div style={styles.contentContainer}>
              {/* Title */}
              <div style={styles.titleSection}>
                <h2 style={styles.title} className="title">
                  Skills & Expertise
                </h2>
                <p style={styles.subtitle}>
                  Technologies I work with
                </p>
              </div>

              {/* Skills grid */}
              <div style={styles.skillsGrid} className="skills-grid">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    style={{
                      ...styles.skillCard,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transitionDelay: `${index * 150}ms`
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.skillCardHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, styles.skillCard);
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(30px)';
                      e.currentTarget.style.transitionDelay = `${index * 150}ms`;
                    }}
                  >
                    <div style={styles.skillName}>{skill}</div>
                    <div style={styles.skillLevel}>
                      <div 
                        style={{
                          ...styles.skillProgress,
                          width: isVisible ? `${skillLevels[index]}%` : '0%',
                          transitionDelay: `${index * 150 + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
