import React from 'react';

interface ImageCardProps {
  title: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

const ImageCard: React.FC<ImageCardProps> = ({ title, image, size }) => {
  const sizeClasses = {
    small: 'w-[150px] h-[200px] md:w-[200px] md:h-[300px]',
    medium: 'w-[150px] h-[250px] md:w-[200px] md:h-[400px]',
    large: 'w-[450px] h-[350px] md:w-[450px] md:h-[550px]'
  };

  return (
    <div className={`relative ${sizeClasses[size]} transition-all duration-300`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-x-0 bottom-10 bg-gradient-to-t to-transparent p-4 rounded-b-lg">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;