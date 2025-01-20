// 'use client'

// import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { useRef } from "react"

// // Testimonial data
// const testimonials = [
//   {
//     id: 1,
//     name: "Raghav T.",
//     quote: "A hidden gem. I absolutely loved my time here. The peaceful surroundings and lovely gardens created the perfect escape. The cozy rooms and friendly service made it a stay to remember.",
//     rating: 5,
//     image: "/pp1.png",
//     background: "/cardimage7.png",
//     letter:'R',
//   },
//   {
//     id: 2,
//     name: "Meera J.",
//     quote: "Perfect getaway! This hotel is the perfect place for a relaxing retreat. The scenic views, excellent service, and calm ambiance made my stay unforgettable. Highly recommend for anyone looking to unwind!",
//     rating: 5,
//     image: "/pp1.png",
//     background: "/cardimage6.png",
//     letter:'M',
//   },
//   {
//     id: 3,
//     name: "Aarav K.",
//     quote: "Truly delightful stay! The hotel exceeded all my expectations! Beautiful rooms, amazing terrace views, and a truly relaxing atmosphere. The staff was incredibly welcoming and made me feel right at home.",
//     rating: 5,
//     image: "/pp1.png",
//     background: "/cardimage8.png",
//     letter:'A',
//   },
//   {
//     id: 4,
//     name: "Sarah M.",
//     quote: "An exceptional experience! The attention to detail and personalized service made this stay memorable. The surroundings are breathtaking and the amenities are top-notch.",
//     rating: 5,
//     image: "/pp1.png",
//     background: "/cardimage6.png",
//     letter:'S',
//   },
//   {
//     id: 5,
//     name: "David R.",
//     quote: "Beyond expectations! From the moment I arrived, I knew this place was special. The tranquil environment and luxurious accommodations created the perfect retreat.",
//     rating: 5,
//     image: "/pp1.png",
//     background: "/cardimage8.png",
//     letter:'D',
//   },
// ]

// export default function TestimonialSlider() {
//   return (
//     <div className="bg-[#F9FAFB]">
//       <div className="flex items-center justify-center mb-12">
//         <div className="w-[50%] h-px bg-green-600 "></div>
//         <h2 className="text-lg md:text-4xl font-title text-green-600">
//           What People say about us?
//         </h2>
//         <div className="w-[20%] h-px bg-green-600 "></div>
//       </div>
      
//       <div className="relative w-[80%] mx-auto bg-[#F9FAFB]">
//         <Carousel 
//           className="w-full"
//           opts={{
//             align: "start",
//             loop: true,
//             skipSnaps: false,
//             slidesToScroll: 3,
//           }}
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {testimonials.map((testimonial, index) => ( 
//               <CarouselItem key={testimonial.id} className={`pl-2 md:pl-4 md:basis-1/3 ${index === 0 || index === 2 ? 'w-[200px] h-[300px]' : ''}`}>
//                 <div className="p-1">
//                   <Card className="relative overflow-hidden rounded-lg border-0 h-[400px]">
//                     {/* Background Image with Overlay */}
//                     <div 
//                       className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
//                       style={{ backgroundImage: `url(${testimonial.background})` }}
//                     >
//                       <div className="absolute inset-0 bg-black/60" />
//                     </div>
                    
//                     <CardContent className="relative p-8 h-full flex flex-col items-center justify-center text-white">
//                       {/* Profile Image */}
//                       <div className="w-10 h-10 lg:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white mb-4 relative">
//                         <img
//                           src={testimonial.image}
//                           alt={`${testimonial.name}'s profile`}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 m-auto text-white text-center">
//                           <span className="text-xl relative top-1 sm:top-5 font-bold">{testimonial.letter}</span>
//                         </div>
//                       </div>
                      
//                       {/* Star Rating */}
//                       <div className="flex gap-1 mb-4">
//                         {Array.from({ length: testimonial.rating }).map((_, i) => (
//                           <Star
//                             key={i}
//                             className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                           />
//                         ))}
//                       </div>
                      
//                       {/* Quote */}
//                       <blockquote className="text-center mb-4 text-sm lg:text-lg italic">
//                         "{testimonial.quote.substring(0, 90)}..."
//                       </blockquote>
                      
//                       {/* Author */}
//                       <cite className="not-italic font-medium">
//                         - {testimonial.name}
//                       </cite>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-white border-white bg-white/20" />
//           <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-white border-white bg-white/20" /> */}
//         </Carousel>
        
//       </div>
//     </div>
//   )
// }





// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { Star } from 'lucide-react'
// // import { Card, CardContent } from "@/components/ui/card"
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// // } from "@/components/ui/carousel"

// // // Testimonial data
// // const testimonials = [
// //   {
// //     id: 1,
// //     name: "Raghav T.",
// //     quote: "A hidden gem. I absolutely loved my time here. The peaceful surroundings and lovely gardens created the perfect escape. The cozy rooms and friendly service made it a stay to remember.",
// //     rating: 5,
// //     image: "/pp1.png",
// //     background: "/cardimage7.png",
// //     letter:'R',
// //   },
// //   {
// //     id: 2,
// //     name: "Meera J.",
// //     quote: "Perfect getaway! This hotel is the perfect place for a relaxing retreat. The scenic views, excellent service, and calm ambiance made my stay unforgettable. Highly recommend for anyone looking to unwind!",
// //     rating: 5,
// //     image: "/pp1.png",
// //     background: "/cardimage6.png",
// //     letter:'M',
// //   },
// //   {
// //     id: 3,
// //     name: "Aarav K.",
// //     quote: "Truly delightful stay! The hotel exceeded all my expectations! Beautiful rooms, amazing terrace views, and a truly relaxing atmosphere. The staff was incredibly welcoming and made me feel right at home.",
// //     rating: 5,
// //     image: "/pp1.png",
// //     background: "/cardimage8.png",
// //     letter:'A',
// //   },
// //   {
// //     id: 4,
// //     name: "Sarah M.",
// //     quote: "An exceptional experience! The attention to detail and personalized service made this stay memorable. The surroundings are breathtaking and the amenities are top-notch.",
// //     rating: 5,
// //     image: "/pp1.png",
// //     background: "/cardimage6.png",
// //     letter:'S',
// //   },
// //   {
// //     id: 5,
// //     name: "David R.",
// //     quote: "Beyond expectations! From the moment I arrived, I knew this place was special. The tranquil environment and luxurious accommodations created the perfect retreat.",
// //     rating: 5,
// //     image: "/pp1.png",
// //     background: "/cardimage8.png",
// //     letter:'D',
// //   },
// // ]

// // export default function TestimonialSlider() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 1200);
// //     };

// //     if (typeof window !== 'undefined') {
// //       setIsMobile(window.innerWidth < 1200);
// //       window.addEventListener('resize', handleResize);
// //     }

// //     return () => {
// //       if (typeof window !== 'undefined') {
// //         window.removeEventListener('resize', handleResize);
// //       }
// //     };
// //   }, []);

// //   const handlePrevious = () => {
// //     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// //   };

// //   return (
// //     <div className="h-[700px] md:h-[700px] bg-[#F9FAFB] py-16">
// //        <div className="bg-[#F9FAFB]">
// //        <div className="flex items-center justify-center mb-12">
// //          <div className="w-[50%] h-px bg-green-600 "></div>
// //          <h2 className="text-lg md:text-4xl font-title text-green-600">
// //            What People say about us?
// //          </h2>
// //          <div className="w-[20%] h-px bg-green-600 "></div>
// //        </div>
// //         <div className="w-full h-px bg-green-700 absolute top-1/2 left-0"></div>
// //       </div>

// //       <div className="max-w-7xl mx-auto">
// //         <p className="text-gray-600 mb-12 max-w-2xl">
// //           Discover what our guests have to say about their experiences with us. 
// //           Real stories from real people who have shared unforgettable moments at our property.
// //         </p>

// //         <div className="flex items-center justify-center gap-2 sm:gap-6">
// //           {isMobile ? (
// //             <Carousel 
// //               className="w-full"
// //               opts={{
// //                 align: "start",
// //                 loop: true,
// //                 skipSnaps: false,
// //                 slidesToScroll: 1,
// //               }}
// //             >
// //               <CarouselContent className="-ml-2 md:-ml-4">
// //                 {testimonials.map((testimonial) => ( 
// //                   <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full">
// //                     <TestimonialCard testimonial={testimonial} size="large" />
// //                   </CarouselItem>
// //                 ))}
// //               </CarouselContent>
// //             </Carousel>
// //           ) : (
// //             <div className="flex items-center justify-center gap-8">
// //               <div className="mt-12">
// //                 <TestimonialCard testimonial={testimonials[currentIndex]} size="small" />
// //               </div>
// //               <div>
// //                 <TestimonialCard testimonial={testimonials[(currentIndex + 1) % testimonials.length]} size="large" />
// //               </div>
// //               <div className="mt-12">
// //                 <TestimonialCard testimonial={testimonials[(currentIndex + 2) % testimonials.length]} size="small" />
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // function TestimonialCard({ testimonial, size }: { testimonial: typeof testimonials[0], size: 'small' | 'medium' | 'large' }) {
// //   const sizeClasses = {
// //     small: 'w-[250px] h-[300px]',
// //     medium: 'w-[300px] h-[350px]',
// //     large: 'w-[400px] h-[450px]',
// //   }

// //   return (
// //     <Card className={`relative overflow-hidden rounded-lg border-0 ${sizeClasses[size]}`}>
// //       {/* Background Image with Overlay */}
// //       <div 
// //         className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
// //         style={{ backgroundImage: `url(${testimonial.background})` }}
// //       >
// //         <div className="absolute inset-0 bg-black/60" />
// //       </div>
      
// //       <CardContent className="relative p-4 h-full z-[99999] flex flex-col items-center justify-center text-white">
// //         {/* Profile Image */}
// //         <div className={`${size === 'small' ? 'w-10 h-10' : 'w-14 h-14'} rounded-full overflow-hidden border-2 border-white mb-3 relative`}>
// //           <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
// //             <span className={`${size === 'small' ? 'text-base' : 'text-lg'} font-bold`}>
// //               {testimonial.letter}
// //             </span>
// //           </div>
// //         </div>
        
// //         {/* Star Rating */}
// //         <div className="flex gap-1 mb-3">
// //           {Array.from({ length: testimonial.rating }).map((_, i) => (
// //             <Star
// //               key={i}
// //               className={`${size === 'small' ? 'w-4 h-4' : 'w-5 h-5'} fill-yellow-400 text-yellow-400`}
// //             />
// //           ))}
// //         </div>
        
// //         {/* Quote */}
// //         <blockquote className={`text-center mb-3 italic line-clamp-4 ${
// //           size === 'small' ? 'text-sm' : 'text-base'
// //         }`}>
// //           "{testimonial.quote}"
// //         </blockquote>
        
// //         {/* Author */}
// //         <cite className={`not-italic font-medium ${
// //           size === 'small' ? 'text-sm' : 'text-base'
// //         }`}>
// //           - {testimonial.name}
// //         </cite>
// //       </CardContent>
// //     </Card>
// //   )
// // }
'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Raghav T.",
    quote: "A hidden gem. I absolutely loved my time here. The peaceful surroundings and lovely gardens created the perfect escape. The cozy rooms and friendly service made it a stay to remember.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage7.png",
    letter:'R',
  },
  {
    id: 2,
    name: "Meera J.",
    quote: "Perfect getaway! This hotel is the perfect place for a relaxing retreat. The scenic views, excellent service, and calm ambiance made my stay unforgettable. Highly recommend for anyone looking to unwind!",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage6.png",
    letter:'M',
  },
  {
    id: 3,
    name: "Aarav K.",
    quote: "Truly delightful stay! The hotel exceeded all my expectations! Beautiful rooms, amazing terrace views, and a truly relaxing atmosphere. The staff was incredibly welcoming and made me feel right at home.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage8.png",
    letter:'A',
  },
  {
    id: 4,
    name: "Sarah M.",
    quote: "An exceptional experience! The attention to detail and personalized service made this stay memorable. The surroundings are breathtaking and the amenities are top-notch.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage6.png",
    letter:'S',
  },
  {
    id: 5,
    name: "David R.",
    quote: "Beyond expectations! From the moment I arrived, I knew this place was special. The tranquil environment and luxurious accommodations created the perfect retreat.",
    rating: 5,
    image: "/pp1.png",
    background: "/cardimage8.png",
    letter:'D',
  },
]

export default function TestimonialSlider() {
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
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#F9FAFB]">
      {/* <div className="flex items-center justify-center mb-12">
        <div className="w-[50%] h-px  bg-emerald-600"></div>
        <h2 className="text-lg md:text-4xl font-title text-emerald-600">
          What People say about us?
        </h2>
        <div className="w-[20%] h-px bg-green-600"></div>
      </div> */}
       <div className="flex items-center mb-8 relative">
          <div className="w-full h-px bg-green-700 absolute top-1/2 left-0"></div>
          <h1 className="text-lg  left-[30%] sm:left-[60%] float-right md:text-4xl bg-[#F9FAFB] mx-2 z-50 relative font-title text-green-700">
          What People Say about us?
          </h1>
        </div>
      
      <div className="relative w-[90%] mx-auto bg-[#F9FAFB]">
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
              {testimonials.map((testimonial) => ( 
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full">
                  <div className="p-1">
                    <Card className="relative overflow-hidden rounded-lg border-0 h-[400px]">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${testimonial.background})` }}
                      >
                        <div className="absolute inset-0 bg-black/60" />
                      </div>
                      
                      <CardContent className="relative p-8 h-full flex flex-col items-center justify-center text-white">
                        <div className="w-10 h-10 lg:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white mb-4 relative">
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.name}'s profile`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 m-auto text-white text-center">
                            <span className="text-xl relative top-1 sm:top-5 font-bold">{testimonial.letter}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-center mb-4 text-sm lg:text-lg italic">
                          "{testimonial.quote.substring(0, 90)}..."
                        </blockquote>
                        
                        <cite className="not-italic font-medium">
                          - {testimonial.name}
                        </cite>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="flex items-center justify-center gap-8">
            <button onClick={handlePrevious} className="text-green-600 hover:text-green-700">
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <div className="flex items-center ">
              <div className="transform scale-75 transition-all duration-300">
                <Card className="relative overflow-hidden rounded-3xl border-0 h-[400px] w-[350px]">
                  <TestimonialCardContent testimonial={testimonials[currentIndex]} />
                </Card>
              </div>

              <Card className="relative overflow-hidden rounded-3xl border-0 h-[400px] w-[450px]">
                <TestimonialCardContent testimonial={testimonials[(currentIndex + 1) % testimonials.length]} />
              </Card>

              <div className="transform scale-75 transition-all duration-300">
                <Card className="relative overflow-hidden rounded-3xl border-0 h-[400px] w-[350px]">
                  <TestimonialCardContent testimonial={testimonials[(currentIndex + 2) % testimonials.length]} />
                </Card>
              </div>
            </div>

            <button onClick={handleNext} className="text-green-600 hover:text-green-700">
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function TestimonialCardContent({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
        style={{ backgroundImage: `url(${testimonial.background})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <CardContent className="relative p-8 h-full flex flex-col items-center justify-center text-white">
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white mb-4 relative">
          <img
            src={testimonial.image}
            alt={`${testimonial.name}'s profile`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 m-auto text-white text-center">
            <span className="text-xl relative top-1 sm:top-5 font-bold">{testimonial.letter}</span>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        
        <blockquote className="text-center mb-4 text-sm lg:text-lg italic">
          "{testimonial.quote.substring(0, 90)}..."
        </blockquote>
        
        <cite className="not-italic font-medium">
          - {testimonial.name}
        </cite>
      </CardContent>
    </>
  )
}