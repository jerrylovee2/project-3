'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Raghav T.",
    quote: "A hidden gem. I absolutely loved my time here. The peaceful surroundings and lovely gardens created the perfect escape. The cozy rooms and friendly service made it a stay to remember.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage.png",
    letter:'R',
  },
  {
    id: 2,
    name: "Meera J.",
    quote: "Perfect getaway! This hotel is the perfect place for a relaxing retreat. The scenic views, excellent service, and calm ambiance made my stay unforgettable. Highly recommend for anyone looking to unwind!",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage2.png",
    letter:'M',
  },
  {
    id: 3,
    name: "Aarav K.",
    quote: "Truly delightful stay! The hotel exceeded all my expectations! Beautiful rooms, amazing terrace views, and a truly relaxing atmosphere. The staff was incredibly welcoming and made me feel right at home.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage3.png",
    letter:'A',
  },
  {
    id: 4,
    name: "Sarah M.",
    quote: "An exceptional experience! The attention to detail and personalized service made this stay memorable. The surroundings are breathtaking and the amenities are top-notch.",
    rating: 5,
    image: "/pp1.png",
    background: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940&auto=format&fit=crop",
    letter:'S',
  },
  {
    id: 5,
    name: "David R.",
    quote: "Beyond expectations! From the moment I arrived, I knew this place was special. The tranquil environment and luxurious accommodations created the perfect retreat.",
    rating: 5,
    image: "/pp1.png",
    background: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop",
    letter:'D',
  },
]

export default function TestimonialSlider() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="flex items-center justify-center mb-12">
        <div className="w-[60%] h-px bg-green-600 "></div>
        <h2 className="text-4xl font-semibold text-green-600">
          What People say about us?
        </h2>
        <div className="w-[10%] h-px bg-green-600 "></div>
      </div>
      
      <div className="relative w-[95%] mx-auto bg-[#F9FAFB]">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 3,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => ( 
              <CarouselItem key={testimonial.id} className={`pl-2 md:pl-4 md:basis-1/3 ${index === 0 || index === 2 ? 'w-[200px] h-[300px]' : ''}`}>
                <div className="p-1">
                  <Card className="relative overflow-hidden rounded-xl border-0 h-[400px]">
                    {/* Background Image with Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                      style={{ backgroundImage: `url(${testimonial.background})` }}
                    >
                      <div className="absolute inset-0 bg-black/60" />
                    </div>
                    
                    <CardContent className="relative p-8 h-full flex flex-col items-center justify-center text-white">
                      {/* Profile Image */}
                      <div className="w-10 h-10 lg:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white mb-4 relative">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s profile`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 m-auto text-white text-center">
                          <span className="text-xl relative top-5 font-bold">{testimonial.letter}</span>
                        </div>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-center mb-4 text-sm lg:text-lg italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author */}
                      <cite className="not-italic font-medium">
                        - {testimonial.name}
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-white border-white bg-white/20" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-white border-white bg-white/20" />
        </Carousel>
        
      </div>
    </div>
  )
}
