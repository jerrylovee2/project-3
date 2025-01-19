// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const scenicPreviews = [
//   {
//     title: "Rooms",
//     image: "/rooms.png?height=400&width=300",
//   },
//   {
//     title: "Leisures",
//     image: "/leisures.png?height=400&width=300",
//   },
//   {
//     title: "Live Music",
//     image: "/livemusic.png?height=400&width=300",
//   },
//   {
//     title: "Terrace",
//     image: "/terrace.png?height=400&width=300",
//   },
//   {
//     title: "Sunrise/Sunsets",
//     image: "/sunrise.png?height=400&width=300",
//   }
// ]

// export default function ScenicPreview() {
//   const [currentIndex, setCurrentIndex] = useState(2) // Start with Live Music centered

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? scenicPreviews.length - 1 : prev - 1))
//   }

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === scenicPreviews.length - 1 ? 0 : prev + 1))
//   }

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12">
//       <div className="relative mb-12">
//         <h2 className="text-center text-4xl font-serif text-[#2E8B57] relative">
//           <span className="relative px-8">
//             Our Scenic Preview
//             <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-[#2E8B57]" />
//           </span>
//         </h2>
        
//         {/* Navigation Buttons */}
//         <div className="absolute right-0 top-0 flex gap-2">
//           <button
//             onClick={handlePrevious}
//             className="w-12 h-12 rounded-full bg-[#98FB98] text-[#2E8B57] flex items-center justify-center hover:bg-[#2E8B57] hover:text-white transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="w-12 h-12 rounded-full bg-[#2E8B57] text-white flex items-center justify-center hover:bg-[#98FB98] hover:text-[#2E8B57] transition-colors"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
//         Take a glimpse into our world through our visual tour, showcasing stunning views and unforgettable experiences.
//         Explore the charm, comfort, and beauty that await you!
//       </p>

//       <div className="relative flex items-center justify-center gap-4 h-[500px]">
//         {scenicPreviews.map((preview, index) => {
//           // Calculate the position relative to the current index
//           const position = (index - currentIndex + scenicPreviews.length) % scenicPreviews.length
//           const isCenter = position === 0
          
//           return (
//             <div
//               key={index}
//               className={`absolute transition-all duration-500 ease-in-out`}
//               style={{
//                 transform: `translateX(${(position - 2) * 280}px)`,
//                 zIndex: isCenter ? 10 : 5,
//                 opacity: Math.abs(position - 2) > 2 ? 0 : 1,
//               }}
//             >
//               <div className={`relative overflow-hidden rounded-2xl w-[300px] h-[400px]`}>
//                 <Image
//                   src={preview.image}
//                   alt={preview.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <h3 className="absolute bottom-6 left-6 text-white text-2xl font-serif">
//                   {preview.title}
//                 </h3>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const scenicPreviews = [
  {
    title: "Rooms",
    image: "/rooms.png?height=300&width=200",
  },
  {
    title: "Leisures",
    image: "/leisures.png?height=300&width=200",
  },
  {
    title: "Live Music",
    image: "/livemusic.png?height=300&width=200",
  },
  {
    title: "Terrace",
    image: "/terrace.png?height=300&width=200",
  },
  {
    title: "Sunrise/Sunsets",
    image: "/sunrise.png?height=300&width=200",
  }
]

export default function ScenicPreview() {
  const [currentIndex, setCurrentIndex] = useState(0) // Start with the first image centered

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenicPreviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === scenicPreviews.length - 1 ? 0 : prev + 1))
  }

  const getPlaceholderIndex = (index: number) => {
    const length = scenicPreviews.length
    return (index + length) % length
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-[bg-[#F9FAFB]]">
      <div className="relative mb-12">
        <h2 className="text-center text-4xl font-serif text-[#2E8B57] relative">
          <span className="relative px-8 mt-10">
            Our Scenic Preview
            <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-[#2E8B57]" />
          </span>
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute right-0 top-0 flex gap-2">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full bg-[#98FB98] text-[#2E8B57] flex items-center justify-center hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#2E8B57] text-white flex items-center justify-center hover:bg-[#98FB98] hover:text-[#2E8B57] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Take a glimpse into our world through our visual tour, showcasing stunning views and unforgettable experiences.
        Explore the charm, comfort, and beauty that await you!
      </p>

      <div className="relative flex items-center justify-center gap-4 h-[500px]">
        {[...Array(5)].map((_, placeholderIndex) => {
          const realIndex = getPlaceholderIndex(currentIndex + placeholderIndex - 2) // Map placeholder to real image index
          const preview = scenicPreviews[realIndex]

          const sizes = [
            { width: 'w-[200px]', height: 'h-[300px]' }, // Placeholder 1 and 5 (Small)
            { width: 'w-[250px]', height: 'h-[350px]' }, // Placeholder 2 and 4 (Medium)
            { width: 'w-[300px]', height: 'h-[400px]' }  // Placeholder 3 (Large)
          ]
          const sizeIndex = placeholderIndex === 0 || placeholderIndex === 4
            ? 0
            : placeholderIndex === 1 || placeholderIndex === 3
            ? 1
            : 2
          const { width, height } = sizes[sizeIndex]

          return (
            <div
              key={placeholderIndex}
              className={`relative overflow-hidden rounded-2xl ${width} ${height} transition-all duration-500 ease-in-out`}
              style={{
                transform: `translateX(${(placeholderIndex - 2) * 280}px)`,
                zIndex: placeholderIndex === 2 ? 10 : 5,
                opacity: placeholderIndex === 2 ? 1 : 0.8,
              }}
            >
              <Image
                src={preview.image}
                alt={preview.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-serif">
                {preview.title}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
