import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CaseStudyLayout = ({ 
  children, 
  title, 
  subtitle, 
  heroImage, 
  projectType, 
  duration, 
  role, 
  tools 
}) => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Project Type</h3>
              <p className="text-gray-200">{projectType}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-gray-200">{duration}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-gray-200">{role}</p>
            </div>
          </div>
          
          {/* Tools */}
          {tools && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-20 bg-white">
        {children}
      </main>
    </div>
  );
};

export default CaseStudyLayout; 