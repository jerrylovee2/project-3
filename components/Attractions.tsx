export default function Attractions({ location }: { location: 'kasauli' | 'chail' }) {
  const attractions = location === 'chail' ? [
    {
      title: "Wildlife Sanctuary",
      image: "/wildlife.jpg",
      description: "Chail Wildlife Sanctuary, set in Himachal's lush forests, is home to leopards, deer, and vibrant Himalayan birds—a perfect retreat for nature lovers."
    },
    {
      title: "Maa Kali Temple",
      image: "/kalimaatemple.jpg",
      description: "A sacred hilltop temple dedicated to Goddess Kali, offering breathtaking panoramic views of the surrounding hills. It is a serene spot, perfect for those seeking peace and spiritual solace amidst nature."
    },
    {
      title: "Gurudwara Sahib",
      image: "/gurughar2.jpg",
      description: "A peaceful haven dedicated to Guru Nanak Dev Ji, offering solace and tranquility amidst the serene hill station. Surrounded by lush greenery, it provides a spiritual escape for visitors seeking inner peace."
    },
    {
      title: "Stoned Kumbh Shiv Temple",
      image: "/shivtemple.jpg",
      description: "A unique and tranquil shrine, known for its striking stone architecture and serene surroundings. It offers a perfect blend of spirituality and natural beauty, attracting visitors seeking peace and divine blessings."
    },
    {
      title: "Chail Palace",
      image: "/palace.jpg",
      description: "A majestic heritage property surrounded by lush greenery, offering stunning views of the Himalayan ranges. Once the summer retreat of the Maharaja of Patiala, it now stands as a beautiful blend of history and nature."
    },
    {
      title: "Sidh Baba Mandir",
      image: "/mandir.jpg",
      description: "A revered spiritual site, dedicated to the saint Baba Sidh. Surrounded by tranquil nature, it offers devotees a serene environment for prayer and reflection."
    },
    {
      title: "Chail Bazar",
      image: "/market.jpg",
      description: "A vibrant market that offers a delightful mix of local handicrafts, souvenirs, and fresh produce. It's a charming spot where visitors can experience the essence of the hill station's culture and lifestyle."
    },
    {
      title: "Chail Cricket Ground",
      image: "/cricket.jpg",
      description: "Chail Cricket Ground, nestled in the picturesque hills of Chail, is the highest cricket ground in the world. Surrounded by lush greenery, it offers a unique and scenic setting for the sport."
    }
  ] : [
    {
      title: "Sunrise Point",
      image: "/newmountain.jpg",
      description: "Located on the lower Mall Road past Ross Common, Sunrise Point offers stunning sunrise views and was once known as Hawa Mahal because of the wind channel created here."
    },
    {
      title: "Gurkha Fort",
      image: "/mountainfort.jpg",
      description: "A historic landmark nestled amidst lush greenery, offering stunning panoramic views of the surrounding hills. Built in the early 19th century, it stands as a testament to the valor of the Gurkha soldiers and their rich history."
    },
    {
      title: "Christ Church",
      image: "/church.jpg",
      description: "A stunning example of Gothic architecture with its beautiful stained-glass windows and serene ambiance. Nestled amidst lush greenery, it offers visitors a tranquil retreat and a glimpse into colonial-era history."
    },
    {
      title: "Baba Balak Nath Temple",
      image: "/temple.jpg",
      description: "A serene hilltop shrine dedicated to the revered saint Baba Balaknath. Surrounded by lush greenery, the temple offers stunning views and a peaceful ambiance for devotees and visitors alike."
    },
    {
      title: "Manki Point",
      image: "/point.jpg",
      description: "Offers stunning panoramic views of the surrounding hills and the distant plains, making it a perfect spot for nature lovers. It is a serene and peaceful location, ideal for a relaxing getaway while enjoying the beauty of the landscape."
    },
    {
      title: "Timber Trail",
      image: "/train.jpg",
      description: "Offers a serene escape with breathtaking views of the lush valleys and the majestic mountains. The scenic cable car ride and peaceful surroundings make it a perfect retreat for nature lovers."
    },
    {
      title: "Mall Road",
      image: "/road.jpg",
      description: "Offers a charming stroll with scenic views, perfect for exploring local shops and enjoying the hill station's serene atmosphere. It's the heart of the town, where visitors can soak in the cool breeze and vibrant colonial architecture."
    },
    {
      title: "Gurudwara Shri Guru Nanakji",
      image: "/gurughar.jpg",
      description: "A serene and spiritual place of worship, dedicated to the teachings of Guru Nanak Dev Ji. Nestled amidst the hills, it offers a peaceful retreat for reflection and prayer."
    }
  ];


  

  return (
    <>
   
    <section className="">

      <div className="w-full h-24 bg-emerald-600 mt-5 mb-5 flex items-center justify-center relative">
        <div className="hidden lg:block  w-0.5 h-10 md:h-12 lg:h-16 bg-emerald-600 absolute left-1/2 top-[-2vh] lg:top-[-6vh]"></div>
        <h2 className="text-white text-4xl font-title">Close-by Attractions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {attractions.map((attraction) => (
          <div key={attraction.title} className="group relative overflow-hidden">
            <img
              src={attraction.image}
              alt={attraction.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">{attraction.title}</h3>
              <p className="text-sm opacity-90">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}