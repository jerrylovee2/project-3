import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import NavigationButton from './NavigationButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";



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
      image: "/h5.png"
    },
    {
      id: 3,
      title: "Live Music",
      image: "/h1.png"
    },
    {
      id: 4,
      title: "Terrace",
      image: "/h2.png"
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
    <div className="h-[700px] md:h-[800px] bg-[#F9FAFB]   py-16">
        <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute left-[20%] transform -translate-x-1/2 top-[-4vh]  lg:top-[-8vh] w-0.5 h-8 md:h-10 lg:h-16 bg-green-700" />
          <h1 className="text-lg  md:text-4xl left-[20%] transform -translate-x-1/2 bg-[#F9FAFB] mx-2 z-50 relative font-title text-green-700">{text}</h1>
          <div className="flex gap-3 absolute bg-[#F9FAFB] z-50  left-[85%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <NavigationButton direction="prev" onClick={handlePrevious} />
            <NavigationButton direction="next" onClick={handleNext} />
          </div>
          <div className="w-full h-px bg-green-700 absolute top-1/2 left-0"></div>
        </div>
      <div className="max-w-7xl mx-auto">
      

        <p className="text-gray-600 mb-12 max-w-2xl">
          Take a glimpse into our world through our visual tour, showcasing stunning views and unforgettable experiences.
          Explore the charm, comfort, and beauty that await you!
        </p>
        
        <div className="flex items-center justify-center gap-2  px-8 md:px-0 sm:gap-6">
          {isMobile ? (
            <Carousel 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {slides.map((slide, index) => ( 
                  <CarouselItem key={slide.id} className={`pl-2 md:pl-4 md:basis-1/3 ${index === 0 || index === 2 ? 'w-[200px] h-[300px]' : ''}`}>
                    <div className="p-1">
                      <ImageCard {...slide} size="large" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-white border-white bg-white/20" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-white border-white bg-white/20" /> */}
            </Carousel>
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