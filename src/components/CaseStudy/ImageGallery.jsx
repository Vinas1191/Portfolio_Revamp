import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ImageGallery = ({ images, columns = 2, gap = 4, className = "" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const imageElements = gallery.querySelectorAll('.gallery-image');
    
    gsap.fromTo(imageElements, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gallery,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [images]);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  const gapSizes = {
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8"
  };

  return (
    <>
      <div 
        ref={galleryRef}
        className={`grid ${gridCols[columns]} ${gapSizes[gap]} ${className}`}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="gallery-image group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt || "Selected image"}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery; 