import React, { useState, useEffect } from 'react';
import AnimalCard from './components/AnimalCard';
import Header from './components/Header';
import Loader from './components/Loader';
// Remove the TestComponent import
// import TestComponent from './components/TestComponent';
import { animals } from './data/animals';
import { speak } from './utils/speech';

const App: React.FC = () => {
    const [currentAnimal, setCurrentAnimal] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        return animals[randomIndex];
    };

    const handleNextAnimal = () => {
        setLoading(true);
        setCurrentAnimal(getRandomAnimal());
    };

    const handlePlaySound = () => {
        const audio = new Audio(currentAnimal.sound);
        audio.play();
    };

    const handleRevealName = () => {
        speak(currentAnimal.name);
    };

    useEffect(() => {
        handleNextAnimal();
    }, []);

    useEffect(() => {
        if (currentAnimal) {
            setLoading(false);
        }
    }, [currentAnimal]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Animal Guessing Game</h1>
            {/* Remove the TestComponent */}
            {/* <TestComponent /> */}
            {loading ? (
                <Loader />
            ) : (
                <AnimalCard
                    image={currentAnimal.image}
                    name={currentAnimal.name}
                    sound={currentAnimal.sound}
                    onPlaySound={handlePlaySound}
                    onRevealName={handleRevealName}
                    onNextAnimal={handleNextAnimal}
                />
            )}
        </div>
    );
};

export default App;