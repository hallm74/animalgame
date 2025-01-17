# Animal Guessing Game

## Overview
This project is a modern, responsive single-page React application designed for toddlers to guess animals based on their pictures and sounds. The app features a clean, user-friendly, mobile-first interface, utilizing Tailwind CSS for styling.

## Features
- Displays a random animal image.
- Buttons for:
  - **Play Sound**: Plays the corresponding animal sound.
  - **Reveal Name**: Shows the animal name and plays its pronunciation using the Web Speech API.
  - **Next Animal**: Loads a new random animal image and resets the interface.
- Card-style layout for each animal with soft shadows and rounded corners.
- Header at the top with the title: “Guess the Animal!”.

## Styling
- Utilizes Tailwind CSS for a clean, minimalistic design.
- Designed for a mobile-first experience, focusing on touch-friendly buttons and spacing.
- Includes animations for transitions, such as fading in the image and buttons.
- All buttons are large and easy to press for toddlers.

## Data Structure
The application uses an array of animal objects, each containing:
- `name`: The name of the animal (e.g., “Cat”).
- `image`: The path to the animal’s image (e.g., /assets/cat.jpg).
- `sound`: The path to the animal’s sound file (e.g., /assets/cat.mp3).

## Interactivity
- Clicking “Reveal Name” uses the Web Speech API to pronounce the animal name.
- Preloads animal images and sounds for a smoother user experience.

## Code Structure
- Uses React functional components and hooks (`useState`, `useEffect`).
- Includes reusable components: `AnimalCard`, `Button`, `Header`, and `Loader`.
- Code is well-commented for clarity and maintainability.

## Extras
- Simple loader animation when switching animals.
- Tailwind configuration for custom colors, ensuring a soft palette suitable for toddlers.

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the app.

## License
This project is licensed under the MIT License.