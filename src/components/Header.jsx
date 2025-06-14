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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
        : 'bg-gray-900/60 backdrop-blur-md border-b border-gray-800/30'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section with Profile Photo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/api/placeholder/40/40" 
                alt="Rudra Salokhe" 
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-700/50 transition-all duration-300 group-hover:border-gray-600/70 group-hover:scale-105 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-200">
              Rudra Salokhe
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-white bg-gray-800/60 shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.name.toLowerCase() && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-lg"></div>
                )}
              </a>
            ))}
            
            {/* Contact Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="ml-4 px-5 py-2 bg-gray-800/60 border border-gray-700/50 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-gray-700/60 hover:border-gray-600/50 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span className="flex items-center space-x-2">
                <span>Contact</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" 
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
    </header>
  );
};

export default Header;
