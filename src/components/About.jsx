import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
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
      <div style={{
        ...styles.mainContainer,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}>
        
        {/* Glassmorphism card */}
        <div style={styles.card}>
          
          {/* Content */}
          <div style={styles.cardContent}>
            
            {/* Animated title */}
            <div style={styles.titleContainer}>
              <h2 style={styles.title}>
                About Me
              </h2>
            </div>

            {/* Content grid */}
            <div style={styles.contentGrid}>
              
              {/* Text content */}
              <div style={styles.textContent}>
                <p style={styles.description}>
                  I'm a Computer Engineering student at Vidyalankar Polytechnic with a passion for building robust backend systems and modern web applications. Currently focused on becoming a Full Stack Engineer with expertise in both frontend and backend technologies. I enjoy solving complex problems and creating efficient, scalable solutions.
                </p>

                {/* Skill tags */}
                <div style={styles.skillsContainer}>
                  {['React', 'Node.js', 'JavaScript', 'Full Stack', 'Backend'].map((skill, index) => (
                    <span 
                      key={skill}
                      style={{
                        ...styles.skillTag,
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button style={styles.ctaButton}>
                  <span style={styles.buttonText}>View My Work</span>
                </button>
              </div>

              {/* Visual element */}
              <div style={styles.visualContainer}>
                <div style={styles.codeContainer}>
                  
                  {/* Animated code blocks */}
                  <div style={styles.codeWindow}>
                    <div style={styles.codeContent}>
                      <div style={styles.windowControls}>
                        <div style={styles.redDot}></div>
                        <div style={styles.yellowDot}></div>
                        <div style={styles.greenDot}></div>
                      </div>
                      
                      {/* Animated code lines */}
                      {[
                        { text: "const passion = 'Full Stack Development';", delay: 0 },
                        { text: "const skills = ['React', 'Node.js', 'MongoDB'];", delay: 200 },
                        { text: "const goal = 'Build Amazing Things';", delay: 400 },
                        { text: "// Currently studying at Vidyalankar", delay: 600 },
                        { text: "function createSolutions() {", delay: 800 },
                        { text: "  return innovation + dedication;", delay: 1000 },
                        { text: "}", delay: 1200 }
                      ].map((line, index) => (
                        <div 
                          key={index}
                          style={{
                            ...styles.codeLine,
                            ...(line.text.includes('//') ? styles.comment : 
                                line.text.includes('const') || line.text.includes('function') ? styles.keyword :
                                line.text.includes("'") ? styles.string : styles.default),
                            animationDelay: `${line.delay}ms`
                          }}
                        >
                          {line.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div style={styles.floatingElement1}></div>
                  <div style={styles.floatingElement2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

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
    background: 'rgba(75, 85, 99, 0.1)',
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
    background: 'rgba(107, 114, 128, 0.1)',
    borderRadius: '50%',
    filter: 'blur(32px)',
    animation: 'pulse 2s infinite 1s',
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
    transition: 'all 1s ease-out',
  },
  card: {
    background: 'rgba(17, 24, 39, 0.5)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(31, 41, 55, 0.5)',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    position: 'relative',
    zIndex: 10,
  },
  titleContainer: {
    marginBottom: '32px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
    lineHeight: '1.2',
    margin: 0,
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
    alignItems: 'center',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  description: {
    fontSize: '18px',
    color: '#d1d5db',
    lineHeight: '1.75',
    margin: 0,
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '32px',
  },
  skillTag: {
    padding: '4px 12px',
    background: 'rgba(31, 41, 55, 0.6)',
    border: '1px solid rgba(55, 65, 81, 0.5)',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#d1d5db',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    animation: 'fadeInUp 0.5s ease-out forwards',
    opacity: 0,
  },
  ctaButton: {
    position: 'relative',
    marginTop: '32px',
    padding: '12px 24px',
    background: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '500',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  buttonText: {
    position: 'relative',
    zIndex: 10,
  },
  visualContainer: {
    position: 'relative',
  },
  codeContainer: {
    position: 'relative',
    width: '100%',
    height: '320px',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  codeWindow: {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.5) 0%, rgba(30, 41, 59, 0.5) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '24px',
  },
  codeContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  windowControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '24px',
  },
  redDot: {
    width: '12px',
    height: '12px',
    background: '#ef4444',
    borderRadius: '50%',
  },
  yellowDot: {
    width: '12px',
    height: '12px',
    background: '#eab308',
    borderRadius: '50%',
  },
  greenDot: {
    width: '12px',
    height: '12px',
    background: '#22c55e',
    borderRadius: '50%',
  },
  codeLine: {
    fontSize: '14px',
    fontFamily: 'monospace',
    opacity: 0,
    animation: 'fadeInUp 0.5s ease-out forwards',
  },
  comment: {
    color: '#6b7280',
  },
  keyword: {
    color: '#a78bfa',
  },
  string: {
    color: '#34d399',
  },
  default: {
    color: '#d1d5db',
  },
  floatingElement1: {
    position: 'absolute',
    top: '-16px',
    right: '-16px',
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    borderRadius: '50%',
    filter: 'blur(24px)',
    opacity: 0.7,
    animation: 'pulse 2s infinite',
  },
  floatingElement2: {
    position: 'absolute',
    bottom: '-16px',
    left: '-16px',
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    borderRadius: '50%',
    filter: 'blur(24px)',
    opacity: 0.7,
    animation: 'pulse 2s infinite 1s',
  },
};

export default About;
