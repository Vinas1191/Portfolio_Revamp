import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CaseStudySection = ({ 
  title, 
  children, 
  className = "", 
  background = "white",
  padding = "py-20",
  animate = true 
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    // Animate title on scroll
    gsap.fromTo(title, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate content on scroll
    gsap.fromTo(content, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animate]);

  return (
    <section 
      ref={sectionRef}
      className={`${background} ${padding} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {title && (
          <div ref={titleRef} className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
        )}
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection; 