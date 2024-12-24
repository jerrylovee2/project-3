"use client";

import Navbar from "@/components/Navbar";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import Testimonials from "@/components/Testimonials";
import VisualTour from "@/components/VisualTour";
// import ContactForm from "@/components/ContactForm";
import Attractions from "@/components/Attractions";
import ScenicPreview from "@/components/preview";
import ImageSlider from "@/components/ImageSlider";
import ContactForm from "@/components/newform";
import ImageSection from "@/components/Imagesection";
import HeroSection from "@/components/Herosection";
import LuxurySection from "@/components/Luxary";

export default function Kasauli() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
            alt="Kasauli View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            The Hills. The Calm. The Charm.
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            All Together.
          </p>
        </div>
      </section>

      {/* Welcome Text */}
      {/* <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Escape to Quiet, Comfort, and Beauty in Kasauli
          </h2>
          <p className="text-gray-700">
            Set in the tranquil hills of Kasauli, our hotel combines modern luxury with natural beauty.
            Each stay promises not just accommodation, but an experience where comfort meets stunning
            mountain vistas. Let us be your gateway to the serene Himalayas.
          </p>
        </div>
      </section> */}

      <HeroSection />
      
      <ImageSection 
        src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80"
        alt="Scenic mountain view from hotel"
      />
      
      <LuxurySection />
      
      <ImageSection 
        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
        alt="Luxury hotel room"
        showExploreButton
      />
   
      {/* Amenities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AmenitiesGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className=" mx-auto">
          <Testimonials />
        </div>
      </section>


      {/* Visual Tour */}
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VisualTour />
        </div>
      </section> */}
      
      <ImageSlider/>
      
      {/* Attractions */}
      <div className="">
        <Attractions location="kasauli" />
      </div>
    
      <ContactForm/>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">For Questions or Inquiries</h4>
              <p className="mb-2">+91-809112116, +91-9317017711</p>
              <p>customercare@hadleyinn.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <ul>
                <li className="mb-2">Instagram</li>
                <li className="mb-2">Facebook</li>
                <li>WhatsApp</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Need Help?</h4>
              <ul>
                <li className="mb-2">Cancellations and Refund</li>
                <li className="mb-2">Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>© 2024 HotelHadleyInn Ltd. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}