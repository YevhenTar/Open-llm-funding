import React, { useState, useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import OverviewSection from './components/OverviewSection/OverviewSection';
import LeaderboardSection from './components/LeaderboardSection/LeaderboardSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import CommunitySection from './components/CommunitySection/CommunitySection';
import FooterSection from './components/FooterSection/FooterSection';
import ParallaxPlanet from './components/ParallaxPlanet/ParallaxPlanet';
import CloudLayers from './components/CloudLayers/CloudLayers';
import ParallaxEarth from './components/ParallaxEarth/ParallaxEarth';
import './App.css'



function App() {
    const [isActivated, setIsActivated] = useState(false);

    const overviewRef = useRef(null);

    const handleActivate = () => {
        setIsActivated(true);
    };

    const scrollToOverview = () => {
        if (overviewRef.current) {
            overviewRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <main className='main-content'>
            <CloudLayers isActivated={isActivated} />
            <ParallaxPlanet lift={isActivated}/>
            <HeroSection onActivate={handleActivate}/>
            <OverviewSection sectionRef={overviewRef} />
            <LeaderboardSection/>
            <ProjectsSection/>
            <div className="earth-section-wrapper">
                <ParallaxEarth />
                <CommunitySection/>
                <FooterSection onLinkClick={scrollToOverview} />
            </div>
        </main>
    )
}

export default App
