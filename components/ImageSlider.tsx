import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import NavigationButton from './NavigationButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { title } from 'process';



const ImageSlider = ({ location, text }: { location: 'kasauli' | 'chail', text: string },) => {
  const slides = location === 'kasauli' ? [
    {
      id: 1,
      title: "Premium Room",
      image: "/kasual/k1.jpg"
    },
    {
      id: 2,
      title: "Exteriors",
      image: "/kasual/k2.jpg"
    },
    {
      id: 3,
      title: "Joy",
      image: "/kasual/k3.jpg"
    },
    {
      id: 4,
      title: "Site-seeing Views",
      image: "/kasual/k4.jpg"
    },
    {
      id: 5,
      title: "Sunrise / Sunset",
      image: "/kasual/k5.jpg"
    },
    {
      id: 6,
      title: "Terrace",
      image: "/kasual/k6.png"
    },
    {
      id: 7,
      title: "Leisures",
      image: "/kasual/k7.png"
    },
    {
      id: 8,
      title: "Live music",
      image: "/kasual/k8.png"
    },
    {
      id: 9,
      title: "Dining",
      image: "/kasual/k9.jpg"
    },
    {
      id: 10,
      title: "Fitness",
      image: "/kasual/k10.jpg"
    },
    {
      id: 11,
      title: "Spa",
      image: "/kasual/k11.jpg"
    },
    {
      id: 12,
      title: "Garden",
      image: "/slider1.jpg"
    },
    {
      id: 13,
      title: "Garden",
      image: "/slider3.jpg"
    },
  ] : [
    {
      id: 1,
      title: "Premium Room",
      image: "/chail/c1.jpg"
    },
    {
      id: 2,
      title: "Snowfall",
      image: "/chail/c2.jpg"
    },
    {
      id: 3,
      title: "Amazing Views",
      image: "/chail/c3.jpg"
    },
    {
      id: 4,
      title: "Sitting Area",
      image: "/c21.jpg"
    },
    {
      id: 5,
      title: "Sunrise/Sunsets",
      image: "/chail/c5.jpg"
    },
    {
      id: 6,
      title: "Serenic Views",
      image: "/c20.jpg"
    },
    {
      id: 7,
      title: "Green",
      image: "/chail/c7.jpg"
    },
    {
      id: 8,
      title: "Exteriors",
      image: "/chail/c8.jpg"
    },
    {
      id: 9,
      title: "Dining",
      image: "/chail/c9.jpg"
    },
    {
      id: 10,
      title: "Fitness",
      image: "/chail/c10.jpg"
    },
    {
      id: 11,
      title: "Spa",
      image: "/chail/c11.jpg"
    },
    {
      id: 12,
      title: "Garden",
      image: "/chail/c12.jpg"
    },
    {
      id: 13,
      title: "Garden",
      image: "1.jpg"
    },
    {
      id: 13,
      title: "Garden",
      image: "chail1.jpg"
    },
    {
      id: 14,
      title: "Garden",
      image: "chail2.jpg"
    },
    {
      id: 15,
      title: "Garde",
      image: "chaill3.jpg"
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
          <div className="hidden sm:flex gap-3 absolute bg-[#F9FAFB] z-50  left-[85%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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