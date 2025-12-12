import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import earthImage from '../../assets/img/body/earth-img.png';
import './ParallaxEarth.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxEarth = () => {
    const earthRef = useRef(null);

    useLayoutEffect(() => {
        const el = earthRef.current;
        if (!el) return;

        const mm = gsap.matchMedia();

        mm.add(
            {
                desktop: "(min-width: 1025px)",
                tablet: "(max-width: 1024px) and (max-height: 1366px)",
                tabletLandscape: "(orientation: landscape) and (min-width: 480px) and (max-width: 1024px) and (max-height: 800px)",
                mobile: "(max-width: 500px)",
                mobileSmall: "(max-width: 376px) and (max-height: 560px)",
                mobileExtraSmall: "(max-width: 350px)",
                mobileLandscape: "(orientation: landscape) and (min-width: 480px) and (max-width: 950px) and (max-height: 500px)"
            },
            (context) => {
                let { tablet, tabletLandscape, mobile, mobileSmall, mobileExtraSmall, mobileLandscape } = context.conditions;

                let startY = -435; 
                if (tablet) startY = -800;
                if (tabletLandscape) startY = -475;
                if (mobile) startY = -630;
                if (mobileSmall) startY = -500;
                if (mobileExtraSmall) startY = -390;
                if (mobileLandscape) startY = -100;

                gsap.set(el, { y: startY });

                gsap.to(el, {
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".community-section",
                        start: "center center",
                        endTrigger: ".footer-section",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
            }
        );

        return () => mm.revert(); 
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



