export default function Attractions({ location }: { location: 'kasauli' | 'chail' }) {
  const attractions = location === 'chail' ? [
    {
      title: "Wildlife Sanctuary",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645",
      description: "Home to leopards, deer, and vibrant Himalayan birds."
    },
    {
      title: "Maa Kali Temple",
      image: "https://images.unsplash.com/photo-1555791019-72d3af01da82",
      description: "Ancient temple with spiritual significance."
    },
    {
      title: "Gurudwara Sahib",
      image: "https://images.unsplash.com/photo-1592549585866-486f41343k99",
      description: "Peaceful place of worship with stunning architecture."
    },
    {
      title: "Trek/Camping",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      description: "Adventure in the heart of nature."
    },
    {
      title: "Adventure Park",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      description: "Fun and excitement for the whole family."
    },
    {
      title: "Local Market",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      description: "Explore local culture and cuisine."
    },
    {
      title: "Nature Walk",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      description: "Immerse yourself in the beauty of nature."
    },
    {
      title: "Skiing",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      description: "Enjoy the thrill of skiing in the mountains."
    }
  ] : [
    {
      title: "Sunset Point",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      description: "Breathtaking sunset views over the hills."
    },
    {
      title: "Mall Road",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
      description: "Shopping and local culture experience."
    },
    {
      title: "Heritage Walk",
      image: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e",
      description: "Explore colonial architecture and history."
    },
    {
      title: "Monkey Point",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Panoramic views and ancient temple."
    },
    {
      title: "Nature Park",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Experience the beauty of nature."
    },
    {
      title: "Local Cuisine",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Taste the local flavors."
    },
    {
      title: "Boating",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Enjoy a peaceful boat ride."
    },
    {
      title: "Paragliding",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Soar through the sky."
    }
  ];


  

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
        Close-by Attractions
      </h2>
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
  );
}