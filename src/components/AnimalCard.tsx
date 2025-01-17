import React from 'react';

interface AnimalCardProps {
  image: string;
  name: string;
  sound: string;
  onPlaySound: () => void;
  onRevealName: () => void;
  onNextAnimal: () => void;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ image, name, onPlaySound, onRevealName, onNextAnimal }) => {
  const webpImage = image.replace(/\.(png|jpg|jpeg)$/, '.webp');
  return (
    <div className="animal-card">
      <picture>
        <source srcSet={webpImage} type="image/webp" />
        <img src={image} alt={name} className="animal-image w-full h-auto max-h-96" />
      </picture>
      <button onClick={onPlaySound}>Play Sound</button>
      <button onClick={onRevealName}>Reveal Name</button>
      <button onClick={onNextAnimal}>Next</button>
    </div>
  );
};

export default AnimalCard;