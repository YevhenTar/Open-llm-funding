import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainPlanet from '../../assets/img/hero_section/main-planet.png';
import './ParallaxPlanet.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxPlanet = ({ lift }) => {
    const wrapperRef = useRef(null);
    const planetRef = useRef(null);
    const liftRef = useRef(0);

    useLayoutEffect(() => {
        const speed = 1.4;

        const tween = gsap.to(wrapperRef.current, {
            y: () => -(document.body.scrollHeight * 0.1 * speed),
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        return () => tween.kill();
    }, []);

    useLayoutEffect(() => {
        if (!lift) return;

        liftRef.current -= 80;

        gsap.to(planetRef.current, {
            y: liftRef.current,
            duration: 0.4,
            ease: "power2.out"
        });
    }, [lift]);

    return (
        <div ref={wrapperRef} className="planet-wrapper">
            <img ref={planetRef} src={MainPlanet} className="planet-fixed" alt="planet" />
        </div>
    );
};

export default ParallaxPlanet;
