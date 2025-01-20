"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MessageCircle, ChevronDown, Instagram, Facebook } from 'lucide-react'


const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '#' },
  {
    name: 'Locations',
    href: '#',
    children: [
      { name: 'Chail', href: '/chail' },
      { name: 'Kasauli', href: '/kasauli' },
    ],
  },
//   { name: 'Contact', href: '#' },
]

export default function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-80 shadow-md fixed w-full z-50">
<div className=" mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logobg.png" alt="Hadley Inn Logo" className="h-full w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-green-700
                      ${item.name === 'Home' ? 'border-b-2 border-green-700' : ''}`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>

                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1 z-10 relateive bg-white opacity-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
          <Link href="https://www.instagram.com/innhadley?igsh=MTdpMmk4NjFyMzZ5YQ==" target="_blank" className="text-gray-700 hover:text-green-700">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/share/18qzgVp1QC/" target="_blank" className="text-gray-700 hover:text-green-700">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://wa.me/+918091112116" target="_blank" className="text-gray-700 hover:text-green-700">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-6 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block pl-3 pr-4 py-2 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 px-4">
          <Link href="https://www.instagram.com/innhadley?igsh=MTdpMmk4NjFyMzZ5YQ==" className="text-gray-700 hover:text-green-700">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://www.facebook.com/share/18qzgVp1QC/" className="text-gray-700 hover:text-green-700">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://wa.me/+918091112116" className="text-gray-700 hover:text-green-700">
              <MessageCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}