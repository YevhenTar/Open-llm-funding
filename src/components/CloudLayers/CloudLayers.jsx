import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import DarkBlueCloud from "../../assets/img/hero_section/dark-blue-cloud-bg.png";
import BrownCloud from "../../assets/img/hero_section/brown-cloud-bg.png";

import "./CloudLayers.css";

const CloudLayers = ({ isActivated }) => {
    const blueImg = useRef(null);
    const brownImg = useRef(null);

    const DEFAULT = useRef({ x: 0, y: 0, rotate: 0 });
    const ACTIVE_BLUE = useRef({ x: 60, y: -320, rotate: 65 });
    const ACTIVE_BROWN = useRef({ x: 240, y: 35, rotate: 65 });

    const THRESHOLD = 200;

    useEffect(() => {
        if (!isActivated) return;

        gsap.to(blueImg.current, {
            ...ACTIVE_BLUE.current,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(brownImg.current, {
            ...ACTIVE_BROWN.current,
            duration: 0.8,
            ease: "power3.out"
        });
    }, [isActivated]);


    useEffect(() => {
        if (isActivated) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            const poseBlue = scrollY > THRESHOLD ? ACTIVE_BLUE.current : DEFAULT.current;
            const poseBrown = scrollY > THRESHOLD ? ACTIVE_BROWN.current : DEFAULT.current;

            // вычисляем вертикальный параллакс, ускоренный
            const speed = 1.8;
            const parallaxYBlue = -scrollY * speed;
            const parallaxYBrown = -scrollY * speed * 0.7; // глубина

            gsap.to(blueImg.current, {
                ...poseBlue,
                y: poseBlue.y + parallaxYBlue, // прибавляем вертикальный параллакс
                duration: 0.6,
                ease: "power3.out"
            });

            gsap.to(brownImg.current, {
                ...poseBrown,
                y: poseBrown.y + parallaxYBrown,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isActivated]);

    return (
        <div className="cloud-layers">

            <div className="cloud-wrapper blue-wrapper">
                <img
                    ref={blueImg}
                    src={DarkBlueCloud}
                    alt="blue-cloud"
                    className="cloud dark-blue-cloud-layer"
                />
            </div>

            <div className="cloud-wrapper brown-wrapper">
                <img
                    ref={brownImg}
                    src={BrownCloud}
                    alt="brown-cloud"
                    className="cloud brown-cloud-layer"
                />
            </div>
        </div>
    );
};

export default CloudLayers;
