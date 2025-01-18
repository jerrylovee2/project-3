import { Wifi, Car, PawPrint, Utensils, Home, Bath, ChefHat, Coffee, Gamepad2 } from 'lucide-react'

export default function AmenitiesGrid() {
  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, label: "Free Wi-Fi" },
    { icon: <Car className="w-6 h-6" />, label: "Free Parking" },
    { icon: <PawPrint className="w-6 h-6" />, label: "Pet-friendly" },
    { icon: <Utensils className="w-6 h-6" />, label: "BBQ" },
    { icon: <Home className="w-6 h-6" />, label: "Terrace/ Balcony" },
    { icon: <Bath className="w-6 h-6" />, label: "Housekeeping" },
    { icon: <ChefHat className="w-6 h-6" />, label: "Kitchen" },
    { icon: <Coffee className="w-6 h-6" />, label: "Breakfast" },
    { icon: <Gamepad2 className="w-6 h-6" />, label: "Games/ Puzzles" },
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
                <div className="text-gray-700 mb-2">{amenity.icon}</div>
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
          <h2 className="text-sm sm:text-4xl md:text-5xl font-serif italic mb-6">
            Discover Hadley Inn Hospitality
          </h2>
          <p className="text-gray-600 leading-4 text-[10px] sm:text-xl sm:leading-relaxed max-w-lg">
            Experience the warmth of Hadley Inn Hospitality, where every detail is
            crafted for your comfort and joy. Discover unmatched service, cozy
            stays, and a welcoming atmosphere that feels like home.
          </p>
        </div>
      </div>
    </div>
  )
}

