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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Main content container */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Glassmorphism card */}
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Contact
              </h2>
            </div>

            {/* Contact grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <div 
                  key={contact.name}
                  className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:bg-gray-800/60 hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  {/* Contact header */}
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{contact.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {contact.name}
                    </h3>
                  </div>

                  {/* Contact info */}
                  <p className="text-gray-300 mb-4 text-sm break-all">
                    {contact.answer}
                  </p>

                  {/* Contact button */}
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700/60 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-gray-600/60 hover:border-gray-500/50 hover:text-white group-hover:translate-x-1"
                  >
                    Contact
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
