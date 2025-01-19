// 'use client'

// import { useState } from 'react'
// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const rooms = [
//   {
//     id: 1,
//     title: "Premium Rooms with Balcony",
//     description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
//     image: "/p2.png"
//   },
//   {
//     id: 2,
//     title: "Deluxe Mountain View",
//     description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
//     image: "/p1.png"
//   },
//   {
//     id: 3,
//     title: "Executive Suite",
//     description: "Indulge in the spacious luxury of our executive suites, complete with premium amenities and superior comfort.",
//     image: "/p3.png"
//   }
// ]

// export default function ThreeCardSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % rooms.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length)
//   }

//   const getSlideIndex = (offset: number) => {
//     return (currentIndex + offset + rooms.length) % rooms.length
//   }

//   return (
//     <div className="w-full max-w-full mx-auto px-4 py-8">
//       {/* Header text */}
//       {/* <div className="text-center mb-12 px-4 pt-24 pb-16 sm:px-6 lg:px-8 max-w-3xl mx-auto">
//         <p className="text-gray-800 text-lg leading-relaxed">
//           Escape to a luxurious and cozy retreat where comfort meets elegance, offering a perfect blend of serenity and style. Indulge in a haven of warmth and luxury, designed to relax your soul and elevate your stay.
//         </p>
//       </div> */}

//       {/* Slider container */}
//       <div className="relative">
//         <div className="flex justify-center items-center gap-4 h-[400px] overflow-hidden">
//           {/* Left card (previous) */}
//           <Card className="relative w-fit sm:w-1/4 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100">
//             <img
//               src={rooms[getSlideIndex(-1)].image || "/placeholder.svg"}
//               alt={rooms[getSlideIndex(-1)].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0" />
//             <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
//               <h3 className="text-lg font-serif">{rooms[getSlideIndex(-1)].title}</h3>
//             </div>
//           </Card>

//           {/* Center card (current) */}
//           <Card className="relative w-fit sm:w-1/2 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out z-10 shadow-xl">
//             <img
//               src={rooms[currentIndex].image || "/placeholder.svg"}
//               alt={rooms[currentIndex].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0" />
//             <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/50">
//               <h2 className="text-3xl md:text-4xl font-serif mb-4">{rooms[currentIndex].title}</h2>
//               <p className="text-sm md:text-base leading-relaxed">
//                 {rooms[currentIndex].description}
//               </p>
//             </div>
//           </Card>

//           {/* Right card (next) */}
//           <Card className="relative  w-fit sm:w-1/4 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100">
//             <img
//               src={rooms[getSlideIndex(1)].image || "/placeholder.svg"}
//               alt={rooms[getSlideIndex(1)].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0" />
//             <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
//               <h3 className="text-lg font-serif">{rooms[getSlideIndex(1)].title}</h3>
//             </div>
//           </Card>
//         </div>

//         {/* Navigation buttons */}
//         <div className="flex justify-center gap-4 mt-6">
//           <button
//             onClick={prevSlide}
//             className="p-4 rounded-full bg-[#e8f5e9] hover:bg-[#81c784] transition-colors"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 text-[#2e7d32]" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="p-4 rounded-full bg-[#4caf50] hover:bg-[#2e7d32] transition-colors"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const rooms = [
  {
    id: 1,
    title: "Premium Rooms with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/p2.png"
  },
  {
    id: 2,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/p1.png"
  },
  {
    id: 3,
    title: "Executive Suite",
    description: "Indulge in the spacious luxury of our executive suites, complete with premium amenities and superior comfort.",
    image: "/p3.png"
  }
]

export default function ThreeCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + rooms.length) % rooms.length
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: false, // Only use swipe gestures for touch devices
  })

  return (
    <div className="w-full max-w-full mx-auto px-4 py-8">
      <div className="relative" {...swipeHandlers}>
        {/* Slider container */}
        <div className="flex justify-center items-center gap-4 h-[400px] overflow-hidden">
          {/* Left card (previous) */}
          <Card className="relative w-fit sm:w-1/4 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100 sm:block hidden">
            <img
              src={rooms[getSlideIndex(-1)].image || "/placeholder.svg"}
              alt={rooms[getSlideIndex(-1)].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
              <h3 className="text-lg font-serif">{rooms[getSlideIndex(-1)].title}</h3>
            </div>
          </Card>

          {/* Center card (current) */}
          <Card className="relative w-full sm:w-1/2 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out z-10 shadow-xl">
            <img
              src={rooms[currentIndex].image || "/placeholder.svg"}
              alt={rooms[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/50">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">{rooms[currentIndex].title}</h2>
              <p className="text-sm md:text-base leading-relaxed">
                {rooms[currentIndex].description}
              </p>
            </div>
          </Card>

          {/* Right card (next) */}
          <Card className="relative w-fit sm:w-1/4 h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100 sm:block hidden">
            <img
              src={rooms[getSlideIndex(1)].image || "/placeholder.svg"}
              alt={rooms[getSlideIndex(1)].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
              <h3 className="text-lg font-serif">{rooms[getSlideIndex(1)].title}</h3>
            </div>
          </Card>
        </div>

        {/* Navigation buttons (only for desktop) */}
        <div className="hidden sm:flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-[#e8f5e9] hover:bg-[#81c784] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#2e7d32]" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-[#4caf50] hover:bg-[#2e7d32] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
