import React from 'react';
import GeometricBackground from './components/GeometricBackground';
import HeroSection from './components/HeroSection';
import ChomikEasterEgg from './components/ChomikEasterEgg';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#1a0f0a]">
      <CustomCursor />
      
      {/* 3D Background */}
      <GeometricBackground />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
      </main>
      
      {/* Easter Egg */}
      <ChomikEasterEgg />
    </div>
  );
}

export default App;
