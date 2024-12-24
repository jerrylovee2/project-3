'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "./testimonal"
import { scenicPreviews } from "./scenic-data"

export default function HotelPreview() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Testimonials Section */}
      <section>
        <h2 className="text-center text-4xl font-serif text-[#2E8B57] mb-12 relative">
          <span className="relative px-8">
            Hear from Our Guests
            <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-[#2E8B57]" />
          </span>
        </h2>
        
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full relative"
        >
          <CarouselContent className="h-[400px]">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                <Card className="h-full overflow-hidden rounded-3xl relative bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <CardContent className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">"{testimonial.title}"</h3>
                    <p className="mb-4 text-sm">{testimonial.quote}</p>
                    <p className="text-sm font-medium">-{testimonial.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 h-12 w-12" />
          <CarouselNext className="absolute -right-12 h-12 w-12" />
        </Carousel>
      </section>

      {/* Scenic Preview Section */}
      <section>
        <h2 className="text-center text-4xl font-serif text-[#2E8B57] mb-8 relative">
          <span className="relative px-8">
            Our Scenic Preview
            <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-[#2E8B57]" />
          </span>
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Take a glimpse into our world through our visual tour, showcasing stunning views and unforgettable experiences.
          Explore the charm, comfort, and beauty that await you!
        </p>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {scenicPreviews.map((preview, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image
                      src={preview.image}
                      alt={preview.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-serif">
                      {preview.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="w-12 h-12 rounded-full bg-[#98FB98] text-[#2E8B57] flex items-center justify-center hover:bg-[#2E8B57] hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#2E8B57] text-white flex items-center justify-center hover:bg-[#98FB98] hover:text-[#2E8B57] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

