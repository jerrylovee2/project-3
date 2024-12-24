"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { title: "Rooms", url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461" },
  { title: "Snowfall", url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71" },
  { title: "Serenic Views", url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd" },
  { title: "Exteriors", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d" },
  { title: "Sunrise/Sunsets", url: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e" }
];

export default function VisualTour() {
  const [currentIndex, setCurrentIndex] = useState(2); // Center image

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Our Visual Tour</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Immerse yourself in our hotel's lush beauty and serene charm. Enjoy cozy rooms,
        vibrant gardens, stunning terrace views, and warm hospitality—a perfect retreat
        where nature meets relaxation.
      </p>
      <div className="relative flex items-center justify-center gap-4">
        <button onClick={prev} className="p-2 rounded-full bg-green-100 hover:bg-green-200">
          <ChevronLeft className="h-6 w-6 text-green-600" />
        </button>
        <div className="flex gap-4 items-center">
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;
            
            if (!isCurrent && !isPrev && !isNext) return null;

            return (
              <div
                key={image.title}
                className={`transition-all duration-300 ${
                  isCurrent
                    ? "w-96 h-64"
                    : "w-72 h-48 opacity-60"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                {isCurrent && (
                  <p className="text-center mt-2 font-semibold">{image.title}</p>
                )}
              </div>
            );
          })}
        </div>
        <button onClick={next} className="p-2 rounded-full bg-green-100 hover:bg-green-200">
          <ChevronRight className="h-6 w-6 text-green-600" />
        </button>
      </div>
    </div>
  );
}