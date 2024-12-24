'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="grid lg:grid-cols-2 min-h-[600px]">
      {/* Map Section */}
      <div className="w-full h-full min-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d76.9649!3d30.8977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0PCsDUzJzUyLjQiTiA3NsKwNTcnNTQuNCJF!5e0!3m2!1sen!2sin!4v1639137244751!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="relative w-full h-full min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.png?height=600&width=800"
            alt="Sunset background"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2E8B57] mb-12">
            Drop Us a Message!
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/80 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] placeholder-gray-500"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-md bg-white/80 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] placeholder-gray-500"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/80 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] placeholder-gray-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-white/80 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] placeholder-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Type your message here..."
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-white/80 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] placeholder-gray-500 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-12 py-3 bg-[#2E8B57] text-white rounded-full hover:bg-[#2E8B57]/90 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

