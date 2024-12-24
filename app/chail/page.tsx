"use client";

import Navbar from "@/components/Navbar";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import Testimonials from "@/components/Testimonials";
import VisualTour from "@/components/VisualTour";
import ContactForm from "@/components/ContactForm";
import Attractions from "@/components/Attractions";

export default function Chail() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e"
            alt="Chail View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Plan. Stay. Explore.
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            All in One Place
          </p>
        </div>
      </section>

      {/* Welcome Text */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Relax, Recharge, and Reconnect in Chail
          </h2>
          <p className="text-gray-700">
            Nestled in the heart of Chail, our hotel offers a peaceful sanctuary surrounded by nature's beauty. 
            With spacious rooms, impeccable service, and panoramic views of the majestic Himalayas, 
            we promise an unforgettable blend of relaxation and adventure. Discover the allure of Chail 
            and create lasting memories in this serene haven.
          </p>
        </div>
      </section>

      {/* Room Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-8">
            A Luxurious & Cozy Retreat
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
              alt="Luxury Room"
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Deluxe Mountain View Rooms</h3>
              <p className="text-gray-600 mb-6">
                Experience comfort and luxury with panoramic mountain views.
                Our rooms blend modern amenities with traditional charm.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-fit">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AmenitiesGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Visual Tour */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VisualTour />
        </div>
      </section>

      {/* Attractions */}
      <div className="max-w-6xl mx-auto px-4">
        <Attractions location="chail" />
      </div>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Map placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5762436193636!2d77.19790931511566!3d30.967144981562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f85e90d5fec8f%3A0x7e1b5b0c5c2c5f0a!2sChail%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1620147647729!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <ContactForm />
        </div>
      </section>

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