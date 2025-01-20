import { DecorativeLine } from "./ui/DecorativeLine";

export default function Kasaulilux() {
  return (
    <div className="relative bg-[#F9FAFB]">
      <div className="absolute left-0 right-0 top-0">
        {/* Vertical line from top */}
        <div className="absolute left-[20%] -top-12 w-px h-12 bg-emerald-600"></div>
        
        {/* Horizontal line with text */}
        <div className="relative flex items-center mx-auto">
          {/* Left line */}
          <div className="flex-1 h-px bg-emerald-600"></div>
          
          {/* Title */}
          <h2 className="text-lg  sm:text-3xl text-emerald-700 whitespace-nowrap px-4 font-title">
          A Lavish & Comfortable Escape
          </h2>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-emerald-600"></div>
        </div>
      </div>

      <section className="px-4 pt-10 pb-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mt-6 text-lg text-gray-600 font-title">
          Escape to a luxurious and cozy retreat where comfort meets elegance, offering a perfect blend of serenity and style. Indulge in a haven of warmth and luxury, designed to relax your soul and elevate your stay.</p>
        </div>
      </section>
    </div>
  );
}