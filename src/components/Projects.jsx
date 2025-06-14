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
      <div className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Glassmorphism card */}
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Projects
              </h2>
            </div>

            {/* Projects grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={project.name}
                  className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:bg-gray-800/60 hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ 
                    transitionDelay: `${index * 200}ms` 
                  }}
                >
                  {/* Project header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project description */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700/60 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-gray-600/60 hover:border-gray-500/50 hover:text-white group/link"
                    >
                      View Project
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
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
                      className="inline-flex items-center px-4 py-2 bg-gray-800/60 border border-gray-700/50 rounded-lg text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-gray-700/60 hover:border-gray-600/50 hover:text-white group/github"
                    >
                      GitHub
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/github:rotate-12" 
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
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                More projects coming soon! Check out my GitHub for additional work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
