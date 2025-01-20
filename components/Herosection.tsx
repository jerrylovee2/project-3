import { DecorativeLine } from "./ui/DecorativeLine";

export default function HeroSection() {
  return (
    <section className="relative py-16 ">
      <div className=" mx-auto text-center">
        <DecorativeLine>
          <h1 className="text-md sm:text-4xl font-title text-emerald-700 whitespace-nowrap px-4">
            Relax, Recharge, and Reconnect in Chail
          </h1>
        </DecorativeLine>
        
        <p className="mt-6 text-sm font-title sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Nestled in the heart of Chail, our hotel offers a peaceful sanctuary surrounded by nature's beauty. With spacious rooms,
          impeccable service, and panoramic views of the majestic Himalayas, we promise an unforgettable blend of relaxation and
          adventure. Discover the allure of Chail and create lasting memories in this serene haven.
        </p>
      </div>
    </section>
  );
}