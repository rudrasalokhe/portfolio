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
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:bg-gray-900/60 transition-all duration-300">
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Animated title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                About Me
              </h2>
            </div>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Text content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a Computer Engineering student at Vidyalankar Polytechnic with a passion for building robust backend systems and modern web applications. Currently focused on becoming a Full Stack Engineer with expertise in both frontend and backend technologies. I enjoy solving complex problems and creating efficient, scalable solutions.
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['React', 'Node.js', 'JavaScript', 'Full Stack', 'Backend'].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-800/60 border border-gray-700/50 rounded-lg text-sm text-gray-300 backdrop-blur-sm hover:bg-gray-700/60 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group relative mt-8 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium overflow-hidden transition-all duration-300 hover:bg-gray-700 hover:border-gray-600">
                  <span className="relative z-10">View My Work</span>
                </button>
              </div>

              {/* Visual element */}
              <div className="relative">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                  
                  {/* Animated code blocks */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
                          className={`text-sm opacity-0 animate-pulse font-mono ${
                            line.text.includes('//') ? 'text-gray-500' : 
                            line.text.includes('const') || line.text.includes('function') ? 'text-purple-400' :
                            line.text.includes("'") ? 'text-green-400' : 'text-gray-300'
                          }`}
                          style={{ 
                            animation: `fadeInUp 0.5s ease-out ${line.delay}ms forwards`,
                          }}
                        >
                          {line.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-70 animate-pulse delay-1000"></div>
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
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default About;
