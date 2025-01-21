import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  showExploreButton?: boolean;
}

export default function ImageSection({ src, alt, showExploreButton }: ImageSectionProps) {
  return (
    <section className="relative h-[600px] bg-[#F9FAFB] w-full mb-12">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      {showExploreButton && (
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
          {/* <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Explore
          </button> */}
        </div>
      )}
    </section>
  );
}