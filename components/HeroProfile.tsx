import { DecorativeLine } from "./ui/DecorativeLine";

export default function HeroProfile() {
  return (
    <section className="relative py-16 ">
      <div className=" mx-auto text-center">
        <DecorativeLine>
          <h1 className="text-lg  sm:text-3xl text-emerald-700 whitespace-nowrap px-4 font-title">
          Escape to Quiet, Comfort, and Beauty in Kasauli
          </h1>
        </DecorativeLine>
        
        <p className="mt-6 text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
        At the heart of the hills, we craft experiences where luxury meets nature’s embrace. More than a stay, it’s a journey of serenity, personalized care, and unforgettable moments. Let us redefine your idea of escape with our soulful hospitality.
        </p>
      </div>
    </section>
  );
}