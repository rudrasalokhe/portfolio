import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
  };

  return (
    <header style={{
      ...styles.header,
      background: scrolled 
        ? 'rgba(17, 24, 39, 0.8)' 
        : 'rgba(17, 24, 39, 0.6)',
      backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
      borderBottom: scrolled 
        ? '1px solid rgba(31, 41, 55, 0.5)' 
        : '1px solid rgba(31, 41, 55, 0.3)',
      boxShadow: scrolled 
        ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        : 'none',
    }}>
      <div style={styles.container}>
        <div style={styles.navWrapper}>
          
          {/* Logo Section with Profile Photo */}
          <div style={styles.logoSection}>
            <div style={styles.profileImageWrapper}>
              <img 
                src="/api/placeholder/40/40" 
                alt="Rudra Salokhe" 
                style={styles.profileImage}
              />
              <div style={styles.profileOverlay}></div>
            </div>
            <h1 style={styles.logoText}>
              Rudra Salokhe
            </h1>
          </div>
          
          {/* Navigation */}
          <nav style={styles.navigation}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                style={{
                  ...styles.navItem,
                  ...(activeSection === item.name.toLowerCase() 
                    ? styles.navItemActive 
                    : styles.navItemInactive)
                }}
              >
                <span style={styles.navItemText}>{item.name}</span>
                {activeSection === item.name.toLowerCase() && (
                  <div style={styles.activeIndicator}></div>
                )}
              </a>
            ))}
            
            {/* Contact Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={styles.contactButton}
            >
              <span style={styles.contactButtonContent}>
                <span>Contact</span>
                <svg 
                  style={styles.contactIcon}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </nav>
        </div>
      </div>
      
      {/* Bottom border gradient */}
      <div style={styles.bottomBorder}></div>

      <style jsx>{`
        .logo-group:hover .profile-image {
          border-color: rgba(75, 85, 99, 0.7);
          transform: scale(1.05);
        }
        
        .logo-group:hover .profile-overlay {
          opacity: 1;
        }
        
        .logo-group:hover .logo-text {
          color: #e5e7eb;
        }
        
        .nav-item-inactive:hover {
          color: white !important;
          background: rgba(31, 41, 55, 0.4) !important;
        }
        
        .contact-button:hover {
          background: rgba(55, 65, 81, 0.6) !important;
          border-color: rgba(75, 85, 99, 0.5) !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          transform: translateY(-2px) !important;
        }
        
        .contact-button:hover .contact-icon {
          transform: translateX(2px) !important;
        }
      `}</style>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '16px 24px',
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(55, 65, 81, 0.5)',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  profileOverlay: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    transition: 'color 0.3s ease',
    margin: 0,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  navItem: {
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  navItemActive: {
    color: 'white',
    background: 'rgba(31, 41, 55, 0.6)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  navItemInactive: {
    color: '#9ca3af',
  },
  navItemText: {
    position: 'relative',
    zIndex: 10,
  },
  activeIndicator: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(55, 65, 81, 0.2) 0%, rgba(75, 85, 99, 0.2) 100%)',
    borderRadius: '8px',
  },
  contactButton: {
    marginLeft: '16px',
    padding: '8px 20px',
    background: 'rgba(31, 41, 55, 0.6)',
    border: '1px solid rgba(55, 65, 81, 0.5)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  contactButtonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  contactIcon: {
    width: '16px',
    height: '16px',
    transition: 'transform 0.3s ease',
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(55, 65, 81, 0.5) 50%, transparent 100%)',
  },
};

// Add hover effects using CSS classes approach
const addHoverClasses = () => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = `
    .logo-group:hover .profile-image {
      border-color: rgba(75, 85, 99, 0.7) !important;
      transform: scale(1.05) !important;
    }
    
    .logo-group:hover .profile-overlay {
      opacity: 1 !important;
    }
    
    .logo-group:hover .logo-text {
      color: #e5e7eb !important;
    }
    
    .nav-item-inactive:hover {
      color: white !important;
      background: rgba(31, 41, 55, 0.4) !important;
    }
    
    .contact-button:hover {
      background: rgba(55, 65, 81, 0.6) !important;
      border-color: rgba(75, 85, 99, 0.5) !important;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
      transform: translateY(-2px) !important;
    }
    
    .contact-button:hover .contact-icon {
      transform: translateX(2px) !important;
    }
  `;
  document.head.appendChild(style);
};

// Call this when component mounts
if (typeof window !== 'undefined') {
  addHoverClasses();
}

export default Header;
