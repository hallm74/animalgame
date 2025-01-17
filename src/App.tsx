import React, { useState, useEffect } from 'react';
import AnimalCard from './components/AnimalCard';
import Loader from './components/Loader';
import HeaderCard from './components/HeaderCard'; // Import HeaderCard
import { animals } from './data/animals';
import { speak } from './utils/speech';

const App: React.FC = () => {
    const [currentAnimalIndex, setCurrentAnimalIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const handleNextAnimal = () => {
        setLoading(true);
        setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
    };

    const handlePlaySound = () => {
        const audio = new Audio(animals[currentAnimalIndex].sound);
        audio.play();
    };

    const handleRevealName = () => {
        speak(animals[currentAnimalIndex].name);
    };

    useEffect(() => {
        setLoading(false);
    }, [currentAnimalIndex]);

    useEffect(() => {
        handleNextAnimal();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
            <HeaderCard /> {/* Add HeaderCard */}
            {loading ? (
                <Loader />
            ) : (
                <AnimalCard
                    image={animals[currentAnimalIndex].image}
                    name={animals[currentAnimalIndex].name}
                    sound={animals[currentAnimalIndex].sound}
                    onPlaySound={handlePlaySound}
                    onRevealName={handleRevealName}
                    onNextAnimal={handleNextAnimal}
                />
            )}
        </div>
    );
};

export default App;