import React, { useEffect, useRef } from "react";
import { assets } from "../../assets/Assets";
import "./Hero.css";


interface GalleryImage {
  src: string;
  alt: string;
}

const Hero: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: assets.proj1,
      alt: "Modern aluminum windows installation",
    },
    {
      src: assets.proj2,
      alt: "Custom PVC door design",
    },
    {
      src: assets.proj3,
      alt: "Elegant aluminum facade",
    },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      if (galleryRef.current) {
        const scrollPosition = window.scrollY;
        const element = galleryRef.current;

        // Subtle parallax effect on scroll
        if (scrollPosition < 500) {
          element.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="all-hero">
      <div className="hero">
      <h1 className="hero-title">
  Engineering Excellence, Built on Experience
</h1>
<p className="hero-subtitle">
  Since 2005, Arister Engineering has delivered expert civil, mechanical, and electrical solutions, with trusted partnerships and a strong focus on design, fabrication, installation, and project management.
</p>



        
      </div>

      {/* Curved Gallery Component */}
      <div className="curved-gallery-container" ref={galleryRef}>
        <div className="curved-gallery">
          {galleryImages.map((image, index) => (
            <div className="gallery-image" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
