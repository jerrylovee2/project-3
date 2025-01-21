"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import NavbarMain from "@/components/Navbarmain";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavbarMain />
    <section className="relative h-screen"> <div className="absolute inset-0">
          <img src="/chail1.png"
            alt="Mountain View" className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">

            Escape the Ordinary, Find your Peak Moment

            </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Get away from it all and breathe in the mountain air.
            Your perfect retreat is just a stay away.
            </p>
        </div>
      </section>

      {/* Welcome Section */ }
  <div className="relative min-h-[600px] mt-10 w-full overflow-hidden">
    <Image
      src="/main2.png"
      alt="Misty forest landscape"
      fill
      priority
      className="object-cover object-center brightness-90"
    />
    <div className="relative flex min-h-[600px] items-center justify-center px-4 py-16">
      <div className="max-w-3xl rounded-[40px] bg-white/60 px-8 py-12 text-center backdrop-blur-sm">
        <h1 className="mb-6 text-4xl font-semibold text-[#4A8469]">
          Warm Greetings!
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-800">
          Nestled in the mountains, our inn is one of the best hotels in
          Himachal. It offers a serene escape with breathtaking views, cozy
          rooms, and exceptional service. Experience relaxation, adventure,
          and warm hospitality for an unforgettable stay in nature&apos;s embrace.
        </p>
      </div>
    </div>
  </div>


  {/* Locations Section */ }
  <section className="py-16 bg-gray-50">
    <div className="mx-auto">
      <div className="py-12">
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] flex-1 bg-[#4A8469]" />
          <h2 className="text-center text-3xl font-semibold text-[#4A8469] md:text-4xl">
            Two Locations, One Warm Welcome
          </h2>
          <div className="h-[1px] flex-1 bg-[#4A8469]" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="/kasauli"
          className="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src="/main3.png"
            alt="Kasauli"
            className="w-full h-[700px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Kasauli
            </h3>
            <div className="flex items-center justify-center">
              <p className="text-lg opacity-90 mr-1">Know More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </div>
          </div>
        </Link>
        <Link
          href="/chail"
          className="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src="/main4.png"
            alt="Chail"
            className="w-full h-[700px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Chail
            </h3>
            <div className="flex items-center justify-center">
              <p className="text-lg opacity-90 mr-1">Know More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */ }
  <footer className="bg-black text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>

          <h4 className="text-xl font-bold mb-4">For Questions or Inquiries</h4>
          <div className="flex items-center mb-2">
            <Phone className="h-4 w-4 mr-2" />
            <p className="font-coopse">+91- 8091112116, +91- 9317017711</p>

          </div>
          <div className="flex items-center mb-2">
            <Mail className="h-4 w-4 mr-2" />
            <p className="font-coopse pl-2">Hadleyinn01@gmail.com</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="h-10 w-10 mr-4" />
            <p className="font-coopse">Kasauli road, near Modern Dhabha, Kasauli, Dharampur, Himachal Pradesh 173209</p>

          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Connect</h4>
          <ul>
                <li className="mb-2">
                  <a href="https://www.instagram.com/innhadley?igsh=MTdpMmk4NjFyMzZ5YQ==" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.facebook.com/share/18qzgVp1QC/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+918091112116" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Need Help?</h4>
          <ul>
            <li className="mb-2"> <Link href="/privacy">Cancellations and Refund </Link></li>
            <li className="mb-2"><Link href="/privacy">Terms and Conditions</Link></li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p>©  2023 TheHakamHari Company All Rights Reserved</p>
      </div>
    </div>
  </footer>
  {/* WhatsApp Floating Icon */ }
  <a
        href="https://wa.me/+918091112116"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>
  </>
  );
}
