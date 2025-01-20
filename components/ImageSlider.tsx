import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import NavigationButton from './NavigationButton';



const ImageSlider = ({ location, text }: { location: 'kasauli' | 'chail', text: string },) => {
  const slides = location === 'kasauli' ? [
    {
      id: 1,
      title: "Rooms",
      image: "/h4.png"
    },
    {
      id: 2,
      title: "Leisures",
      image: "/h2.png"
    },
    {
      id: 3,
      title: "Live Music",
      image: "/h1.png"
    },
    {
      id: 4,
      title: "Terrace",
      image: "/h5.png"
    },
    {
      id: 5,
      title: "Sunrise / Sunset",
      image: "/h3.png"
    },
  ] : [
    {
      id: 1,
      title: "Rooms",
      image: "/visual1.png"
    },
    {
      id: 2,
      title: "Snowfall",
      image: "/visual2.png"
    },
    {
      id: 3,
      title: "Serenic Views",
      image: "/visual3.png"
    },
    {
      id: 4,
      title: "Exteriors",
      image: "/visual4.png"
    },
    {
      id: 5,
      title: "Sunrise/Sunsets",
      image: "/visual5.png"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1200);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="h-[700px] md:h-[800px] bg-[#F9FAFB] px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-title text-green-700">{text}</h1>
          <div className="flex gap-3">
            <NavigationButton direction="prev" onClick={handlePrevious} />
            <NavigationButton direction="next" onClick={handleNext} />
          </div>
        </div>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Take a glimpse into our world through our visual tour, showcasing stunning views and unforgettable experiences.
          Explore the charm, comfort, and beauty that await you!
        </p>
        
        <div className="flex items-center justify-center gap-2 sm:gap-6">
          {isMobile ? (
            <ImageCard {...slides[currentIndex]} size="large" />
          ) : (
            <>
              <div className="mt-12">
                <ImageCard {...slides[currentIndex]} size="small" />
              </div>
              
              <div className="mt-6">
                <ImageCard {...slides[(currentIndex + 1) % slides.length]} size="medium" />
              </div>
              
              <ImageCard {...slides[(currentIndex + 2) % slides.length]} size="large" />
              
              <div className="mt-6">
                <ImageCard {...slides[(currentIndex + 3) % slides.length]} size="medium" />
              </div>
              
              <div className="mt-12">
                <ImageCard {...slides[(currentIndex + 4) % slides.length]} size="small" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;