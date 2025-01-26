'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const rooms = [
  {
    id: 1,
    title: "Super Deluxe with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/new/1.jpg"
  },
  {
    id: 2,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/new/16.jpg"
  },
  {
    id: 3,
    title: "Deluxe Rooms without Balcony",
    description: "Indulge in the spacious luxury of our deluxe rooms, complete with premium amenities and superior comfort.",
    image: "/new/2.jpg"
  },
  {
    id: 4,
    title: "Super Deluxe with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/new/15.jpg"
  },
  {
    id: 5,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/new/3.jpg"
  },
  {
    id: 6,
    title: "Deluxe Rooms without Balcony",
    description: "Indulge in the spacious luxury of our deluxe rooms, complete with premium amenities and superior comfort.",
    image: "/new/14.jpg"
  },
  {
    id: 7,
    title: "Super Deluxe with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/new/4.jpg"
  },
  {
    id: 8,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/new/13.jpg"
  },
  {
    id: 9,
    title: "Deluxe Rooms without Balcony",
    description: "Indulge in the spacious luxury of our deluxe rooms, complete with premium amenities and superior comfort.",
    image: "/new/5.jpg"
  },
  {
    id: 10,
    title: "Super Deluxe with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/new/12.jpg"
  },
  {
    id: 11,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/new/6.jpg"
  },
  {
    id: 12,
    title: "Deluxe Rooms without Balcony",
    description: "Indulge in the spacious luxury of our deluxe rooms, complete with premium amenities and superior comfort.",
    image: "/new/11.jpg"
  },
  {
    id: 13,
    title: "Super Deluxe with Balcony",
    description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
    image: "/new/7.jpg"
  },
  {
    id: 14,
    title: "Deluxe Mountain View",
    description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
    image: "/new/10.jpg"
  },
  {
    id: 15,
    title: "Deluxe Rooms without Balcony",
    description: "Indulge in the spacious luxury of our deluxe rooms, complete with premium amenities and superior comfort.",
    image: "/new/8.jpg"
  }
]

export default function Slider() {
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
    <div className="w-full max-w-full mx-auto px-4 py-8 bg-[#F5FBF5]">
      <div className="relative" {...swipeHandlers}>
        {/* Slider container */}
        <div className="flex justify-center items-center gap-4 h-[400px] overflow-hidden">
          {/* Left card (previous) */}
          <Card className="relative w-fit rounded-lg  sm:w-1/4 h-[350px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100 sm:block hidden">
            <img
              src={rooms[getSlideIndex(-1)].image || "/placeholder.svg"}
              alt={rooms[getSlideIndex(-1)].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
              {/* <h3 className="text-lg font-title">{rooms[getSlideIndex(-1)].title}</h3> */}
              {/* <div className="w-10 h-[1px] bg-white mt-2"></div>  */}
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
              {/* <h2 className="text-3xl md:text-4xl font-title mb-4">{rooms[currentIndex].title}</h2> */}
              {/* <div className="w-[60vh] h-[1px] bg-white mt-2"></div> */}
              <p className="text-sm md:text-base tracking-wide leading-7 line-height-[1.5] letter-spacing-[5px]">
                {/* {rooms[currentIndex].description} */}
              </p>
            </div>
          </Card>

          {/* Right card (next) */}
          <Card className="relative w-fit sm:w-1/4 h-[350px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out opacity-100 sm:block hidden">
            <img
              src={rooms[getSlideIndex(1)].image || "/placeholder.svg"}
              alt={rooms[getSlideIndex(1)].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
              {/* <h3 className="text-lg font-title">{rooms[getSlideIndex(1)].title}</h3> */}
              {/* <div className="w-10 h-[1px] bg-white mt-2"></div>  */}
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


// 'use client'

// import { useState } from 'react'
// import { useSwipeable } from 'react-swipeable'
// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const rooms = [
//   {
//     id: 1,
//     title: "Premium Rooms with Balcony",
//     description: "Enjoy the luxury of our premium rooms, each featuring a private balcony with stunning views. Relax in comfort and style.",
//     image: "/p1.png"
//   },
//   {
//     id: 2,
//     title: "Deluxe Mountain View",
//     description: "Experience breathtaking mountain views from our deluxe rooms. Perfect for nature lovers and peaceful retreats.",
//     image: "/p2.png"
//   },
//   {
//     id: 3,
//     title: "Executive Suite",
//     description: "Indulge in the spacious luxury of our executive suites, complete with premium amenities and superior comfort.",
//     image: "/new"
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

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: nextSlide,
//     onSwipedRight: prevSlide,
//     preventScrollOnSwipe: true,
//     trackMouse: false,
//   })

//   return (
//     <div className="w-full max-w-full mx-auto px-4 py-8 bg-[#F5FBF5]">
//       <div className="relative" {...swipeHandlers}>
//         {/* Slider container */}
//         <div className="flex justify-center items-center gap-4 h-[400px] overflow-hidden">
//           {/* Left card (previous) */}
//           <div className="transform scale-75 transition-all duration-500 origin-right sm:block hidden">
//             <Card className="relative w-[300px] h-[400px] shrink-0 overflow-hidden">
//               <img
//                 src={rooms[getSlideIndex(-1)].image || "/placeholder.svg"}
//                 alt={rooms[getSlideIndex(-1)].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
//                 <h3 className="text-lg font-title">{rooms[getSlideIndex(-1)].title}</h3>
//                 <div className="w-10 h-[1px] bg-white mt-2"></div>
//               </div>
//             </Card>
//           </div>

//           {/* Center card (current) */}
//           <Card className="relative w-full sm:w-[500px] h-[400px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out z-10 shadow-xl">
//             <img
//               src={rooms[currentIndex].image || "/placeholder.svg"}
//               alt={rooms[currentIndex].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/50">
//               <h2 className="text-3xl md:text-4xl font-title mb-4">{rooms[currentIndex].title}</h2>
//               <div className="w-[60vh] h-[1px] bg-white mt-2"></div>
//               <p className="text-sm md:text-base tracking-wide leading-7 line-height-[1.5] letter-spacing-[5px]">
//                 {rooms[currentIndex].description}
//               </p>
//             </div>
//           </Card>

//           {/* Right card (next) */}
//           <div className="transform scale-75 transition-all duration-500 origin-left sm:block hidden">
//             <Card className="relative w-[300px] h-[400px] shrink-0 overflow-hidden">
//               <img
//                 src={rooms[getSlideIndex(1)].image || "/placeholder.svg"}
//                 alt={rooms[getSlideIndex(1)].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50">
//                 <h3 className="text-lg font-title">{rooms[getSlideIndex(1)].title}</h3>
//                 <div className="w-10 h-[1px] bg-white mt-2"></div>
//               </div>
//             </Card>
//           </div>
//         </div>

//         {/* Navigation buttons (only for desktop) */}
//         <div className="hidden sm:flex justify-center gap-4 mt-6">
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