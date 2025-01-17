import React from 'react';

interface AnimalCardProps {
  image: string;
  name: string;
  sound: string;
  onPlaySound: () => void;
  onRevealName: () => void;
  onNextAnimal: () => void; // Add this prop
}

const AnimalCard: React.FC<AnimalCardProps> = ({ image, name, onPlaySound, onRevealName, onNextAnimal }) => {
  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <button onClick={onPlaySound}>Play Sound</button>
      <button onClick={onRevealName}>Reveal Name</button>
      <button onClick={onNextAnimal}>Next</button> {/* Add Next button */}
    </div>
  );
};

export default AnimalCard;