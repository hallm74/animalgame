import React from 'react';

const HeaderCard: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg w-full max-w-3xl mx-auto mb-4 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Guess the Animal!</h1>
    </div>
  );
};

export default HeaderCard;