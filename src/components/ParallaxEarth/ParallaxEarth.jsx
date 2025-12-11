import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import earthImage from '../../assets/img/body/earth-img.png';
import './ParallaxEarth.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxEarth = () => {
    const earthRef = useRef(null);

    // useLayoutEffect(() => {
    //     if (!earthRef.current) return;

    //     const speed = 0.6;

    //     // GSAP с ScrollTrigger для движения Земли при прокрутке
    //     gsap.to(earthRef.current, {
    //         y: () => (document.body.scrollHeight * 0.1 * speed),
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".earth-section-wrapper", // Земля активна только внутри wrapper
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: true
    //         }
    //     });
    // }, []);

    useLayoutEffect(() => {
        const el = earthRef.current;
        if (!el) return;

        // стартовое смещение
        gsap.set(el, { 
            y: -435
        });

        const ctx = gsap.context(() => {

            gsap.to(el, {
                y: 0,              // ← правильное конечное значение
                ease: "none",
                scrollTrigger: {
                    trigger: ".community-section",
                    start: "center center",
                    endTrigger: ".footer-section",
                    end: "bottom bottom",
                    scrub: true     // моментальный отклик
                }
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <img
            ref={earthRef}
            className="earth-parallax-img"
            src={earthImage}
            alt="Earth"
        />
    );
};

export default ParallaxEarth;



