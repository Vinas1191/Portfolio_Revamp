import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = ({ steps, className = "" }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const stepElements = timeline.querySelectorAll('.timeline-step');
    
    gsap.fromTo(stepElements, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [steps]);

  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2 md:transform md:-translate-x-0.5"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg md:left-1/2 md:transform md:-translate-x-2"></div>
            
            {/* Content */}
            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                {step.duration && (
                  <p className="text-sm text-gray-500">
                    Duration: {step.duration}
                  </p>
                )}
                {step.tools && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Tools used:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline; 