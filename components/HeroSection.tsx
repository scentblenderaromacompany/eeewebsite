import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Discover Your Next Treasure</h1>
      </div>
    </div>
  );
};

export default HeroSection;
