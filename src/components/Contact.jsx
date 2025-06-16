import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const contacts = [
    {
      name: "Email",
      answer: "rudrasalokhe100@gmail.com",
      link: "mailto:rudrasalokhe100@gmail.com",
      icon: "📧"
    },
    {
      name: "X",
      answer: "https://x.com/rs2006_05",
      link: "https://x.com/rs2006_05",
      icon: "🐦"
    },
  ];

  useEffect(() => {
    setIsVisible(true);
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
            
            {/* Title */}
            <div style={styles.titleContainer}>
              <h2 style={styles.title}>
                Contact
              </h2>
            </div>

            {/* Contact grid */}
            <div style={styles.contactGrid}>
              {contacts.map((contact, index) => (
                <div 
                  key={contact.name}
                  style={{
                    ...styles.contactCard,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Contact header */}
                  <div style={styles.contactHeader}>
                    <span style={styles.contactIcon}>{contact.icon}</span>
                    <h3 style={styles.contactName}>
                      {contact.name}
                    </h3>
                  </div>

                  {/* Contact info */}
                  <p style={styles.contactInfo}>
                    {contact.answer}
                  </p>

                  {/* Contact button */}
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.contactButton}
                  >
                    Contact
                    <svg 
                      style={styles.arrowIcon}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Additional contact info or CTA */}
            <div style={styles.footerText}>
              <p style={styles.footerParagraph}>
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
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
    maxWidth: '896px',
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
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  contactCard: {
    background: 'rgba(31, 41, 55, 0.4)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(55, 65, 81, 0.5)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  contactHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  contactIcon: {
    fontSize: '24px',
    marginRight: '12px',
  },
  contactName: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  },
  contactInfo: {
    color: '#d1d5db',
    marginBottom: '16px',
    fontSize: '14px',
    wordBreak: 'break-all',
    margin: '0 0 16px 0',
  },
  contactButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    background: 'rgba(55, 65, 81, 0.6)',
    border: '1px solid rgba(75, 85, 99, 0.5)',
    borderRadius: '8px',
    color: '#d1d5db',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  arrowIcon: {
    marginLeft: '8px',
    width: '16px',
    height: '16px',
    transition: 'transform 0.3s ease',
  },
  footerText: {
    marginTop: '32px',
    textAlign: 'center',
  },
  footerParagraph: {
    color: '#9ca3af',
    fontSize: '14px',
    margin: 0,
  },
};

// Add hover effects using CSS-in-JS approach
const addHoverStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    [data-contact-card]:hover {
      background: rgba(31, 41, 55, 0.6) !important;
      border-color: rgba(75, 85, 99, 0.5) !important;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
      transform: translateY(-4px) !important;
    }
    
    [data-contact-button]:hover {
      background: rgba(75, 85, 99, 0.6) !important;
      border-color: rgba(107, 114, 128, 0.5) !important;
      color: white !important;
      transform: translateX(4px) !important;
    }
    
    [data-contact-button]:hover [data-arrow-icon] {
      transform: translateX(4px) !important;
    }
  `;
  document.head.appendChild(style);
};

// Call this when component mounts
if (typeof document !== 'undefined') {
  addHoverStyles();
}

export default Contact;
