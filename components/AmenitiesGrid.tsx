import { Wifi, Car, PawPrint, Utensils, Home, Bath, ChefHat, Coffee, Gamepad2 } from 'lucide-react'

export default function AmenitiesGrid({ prop, text }: { prop: any, text: any }) {
  const amenities = [
    { icon: <Wifi strokeWidth={'2px'} className="w-8 h-8" />, label: "Free Wi-Fi" },
    { icon: <Car  strokeWidth={'2px'}  className="w-8 h-8" />, label: "Free Parking" },
    { icon: <PawPrint  strokeWidth={'2px'}  className="w-8 h-8" />, label: "Pet-friendly" },
    { icon: <Utensils  strokeWidth={'2px'}  className="w-8 h-8" />, label: "BBQ" },
    { icon: <Home   strokeWidth={'2px'} className="w-8 h-8" />, label: "Terrace/ Balcony" },
    { icon: <Bath strokeWidth={'2px'}  className="w-8 h-8" />, label: "Housekeeping" },
    { icon: <ChefHat  strokeWidth={'2px'}  className="w-8 h-8" />, label: "in-room dinning" },
    { icon: <Coffee strokeWidth={'2px'}  className="w-8 h-8" />, label: "Breakfast" },
    { icon: <Gamepad2 strokeWidth={'2px'}  className="w-8 h-8" />, label: "Outdoor activities/Trekking" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 bg-[#f5fbf5] rounded-3xl shadow-lg">
      <div className="flex gap-2 sm:gap-12">
        {/* Left side - Amenities Grid */}
        <div className="w-1/2 relative">
          <div className="grid grid-cols-3 gap-0">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 relative"
              >
                <div className="text-gray-700 mb-2 font-bold">{amenity.icon}</div>
                <span className="text-[6px] sm:text-sm text-gray-600">{amenity.label}</span>
                
                {/* Vertical lines except for rightmost items */}
                {(index + 1) % 3 !== 0 && (
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-200" />
                )}
                
                {/* Horizontal lines except for bottom row */}
                {index < 6 && (
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-sm sm:text-4xl md:text-5xl font-title italic mb-6 text-center">
            {prop}
          </h2>
          <p className="text-gray-600 leading-4 text-[10px] sm:text-xl sm:leading-relaxed max-w-lg">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

