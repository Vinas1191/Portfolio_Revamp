import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResultsMetrics = ({ metrics, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const metricElements = container.querySelectorAll('.metric-item');
    
    gsap.fromTo(metricElements, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [metrics]);

  return (
    <div ref={containerRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <div key={index} className="metric-item bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {metric.icon ? (
              <img src={metric.icon} alt="" className="w-8 h-8" />
            ) : (
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {metric.value}
          </div>
          <div className="text-sm text-gray-600 mb-2">
            {metric.label}
          </div>
          {metric.description && (
            <p className="text-xs text-gray-500">
              {metric.description}
            </p>
          )}
          {metric.change && (
            <div className={`text-sm font-semibold mt-2 ${
              metric.change > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change > 0 ? '+' : ''}{metric.change}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsMetrics; 