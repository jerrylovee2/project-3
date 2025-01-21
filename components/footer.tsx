import React from "react";
import Link from "next/link";
import { MapPin, Phone,Mail } from "lucide-react"; 

const Footer = () =>{
    return(
        <>
                  <footer className="bg-gray-900 text-white py-8">
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
                <p className="font-coopse">hadleyinn1@gmail.com</p>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="h-10 w-10 mr-2" />
                <p className="font-coopse">Kasauli road, near Modern Dhabha, Kasauli, Dharampur, Himachal Pradesh 173209</p>
              </div>
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
                <li>
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>©  2025 TheHakamHari Company All Rights Reserved</p>
          </div>
        </div>
      </footer>
        </>
    )
}


export default Footer;