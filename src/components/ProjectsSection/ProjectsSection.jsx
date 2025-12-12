import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectsSection.css";

import SolanaLogo from "../../assets/img/projects_section/solana-logo.svg";
import ArweaveLogo from "../../assets/img/projects_section/arweave-logo.svg";
import BittensorLogo from "../../assets/img/projects_section/bittensor-logo.svg";
import OrbitLogo from "../../assets/img/projects_section/orbit-logo.svg";
import TelegramLogo from "../../assets/img/projects_section/telegram-logo.svg";

gsap.registerPlugin(ScrollTrigger);

const logos = [
    SolanaLogo,
    ArweaveLogo,
    BittensorLogo,
    OrbitLogo,
    TelegramLogo,
    SolanaLogo,
    ArweaveLogo,
    BittensorLogo,
    OrbitLogo,
    TelegramLogo
];

const ProjectsSection = () => {
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        track.innerHTML += track.innerHTML;

        const items = Array.from(track.querySelectorAll(".carousel__item"));
        const halfCount = items.length / 2;

        const firstHalfWidth = items
            .slice(0, halfCount)
            .reduce((sum, el) => sum + el.offsetWidth + 64, 0);

        gsap.set(track, { x: 0 });

        ScrollTrigger.create({
            trigger: ".projects-block",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                let shift = -firstHalfWidth * progress;

                while (shift <= -firstHalfWidth) shift += firstHalfWidth;
                while (shift > 0) shift -= firstHalfWidth;

                gsap.set(track, { x: shift });
            }
        });

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    return (
        <div className="projects-block">
            <div className="projects-wrap">
                <h2 className="projects-wrap__headline">
                    Projects integrated into the Arrakis AI Ecosystem
                </h2>

                <div className="carousel-wrapper">
                    <div className="carousel" ref={trackRef}>
                        {logos.map((logo, i) => (
                            <div className="carousel__item" key={i}>
                                <img src={logo} className="carousel__logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;

