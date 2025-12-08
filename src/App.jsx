import React, { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import OverviewSection from './components/OverviewSection/OverviewSection';
import ParallaxPlanet from './components/ParallaxPlanet/ParallaxPlanet';
import CloudLayers from './components/CloudLayers/CloudLayers';
import './App.css'

function App() {
    const [isActivated, setIsActivated] = useState(false);

    const handleActivate = () => {
        setIsActivated(true);
    };

    return (
        <main className='main-content'>
            <CloudLayers isActivated={isActivated} />
            <ParallaxPlanet lift={isActivated}/>
            <HeroSection onActivate={handleActivate}/>
            <OverviewSection/>
        </main>
    )
}

export default App
