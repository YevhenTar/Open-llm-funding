import React, { useEffect, useRef } from 'react';
import ScrollOut from "scroll-out";
import telegramLogo from "../../assets/img/community_section/telegram-logo.svg";
import xLogo from "../../assets/img/community_section/x-logo.svg";
import moonImage from "../../assets/img/community_section/moon-img.png";
import './CommunitySection.css';

const CommunitySection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const scroll = ScrollOut({
            targets: ".animated-block",
            offset: 0,
            once: false,
        });

        return () => scroll.teardown();
    }, []);

    return (
        <div className="community-block community-section" ref={sectionRef}>
            <div className="main-container">
                <div className="community-content">
                    <div className="community-content__info-wrap animated-block">   
                        <h2 className="community-content__headline">
                            Join our community
                        </h2>
                        <div className="community-content__description-block">
                            <p className="community-content__description-text">
                                Join us on our mission to to the moon & revolutionize open source AI development so that we can build 
                                a permissionless, democratized, and decentralized AI.
                            </p>
                            <p className="community-content__description-text">
                                Let the fate of AI be in our hands and not that of big tech companies.
                            </p>
                        </div>

                        <div className="community-content__social-media social-media">
                            <img 
                                src={telegramLogo} 
                                alt="telegram-logo" 
                                className="social-media__btn social-media__btn_telegram" 
                                width="64" 
                                height="64"
                                onClick={() => alert('Telegram button is working')}
                            />
                            <img 
                                src={xLogo} 
                                alt="x-logo" 
                                className="social-media__btn social-media__btn_x" 
                                width="64" 
                                height="64"
                                onClick={() => alert('X button is working')}
                            />
                        </div>
                    </div>
                    <div className="community-content__img-wrap animated-block">
                        <img src={moonImage} alt="moon" className="community-content__moon-img" width="484" height="484"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunitySection