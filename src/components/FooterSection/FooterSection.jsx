import React, { useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import telegramLogo from "../../assets/img/community_section/telegram-logo.svg";
import xLogo from "../../assets/img/community_section/x-logo.svg";
import './FooterSection.css';

const FooterSection = ({ onLinkClick }) => {
    const sectionRef = useRef(null);
    const headlineRef = useRef(null);


    useEffect(() => {
        const headline = headlineRef.current;

        const so = ScrollOut({
            targets: sectionRef.current,
            threshold: 0.75, // можно подправить, чтобы событие срабатывало чуть раньше
            onShown: () => {
                headline.classList.add("enter");
                headline.classList.remove("leave");
            },
            onHidden: () => {
                headline.classList.add("leave");
                headline.classList.remove("enter");
            }
        });

        return () => {
            so.teardown();
        };
    }, []);

    return (
        <div className='footer-block footer-section' >
            <div className="main-container">
                <div className="footer-wrap" ref={sectionRef}>
                    <div className="footer-wrap__headline-block">
                        <h5 ref={headlineRef} className="footer-wrap__headline">Join our community and harvest $SALT</h5> 
                    </div>
                    <div className="footer-wrap__footer-box footer-box">
                        <div className="footer-box__menu-links-block menu-links-block">
                            <a 
                                href="#" 
                                className="menu-links-block__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onLinkClick();
                                }}
                                >How It Works</a>
                            <a 
                                href="#" 
                                className="menu-links-block__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Buy Salt AI is working");
                                }}
                            >Buy Salt AI</a>
                        </div>
                        <div className="footer-box__menu-wrap menu-wrap">
                            <div className="menu-wrap__social-media social-media">
                                <img 
                                    src={telegramLogo} 
                                    alt="telegram-logo" 
                                    className="social-media__btn social-media__btn_telegram" 
                                    width="36" 
                                    height="36"
                                    onClick={() => alert('Telegram button is working')}
                                />
                                <img 
                                    src={xLogo} 
                                    alt="x-logo" 
                                    className="social-media__btn social-media__btn_x" 
                                    width="36" 
                                    height="36"
                                    onClick={() => alert('X button is working')}
                                />
                            </div>
                            <div className="menu-wrap__support-links-block support-links-block">
                                <a href="#" className="support-links-block__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Terms of use is working");
                                    }}
                                >Terms of Use</a>
                                <a href="#" className="support-links-block__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Privacy Policy is working");
                                    }}
                                >Privacy Policy</a>
                                <a href="#" className="support-links-block__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Cookie Policy is working");
                                    }}
                                >Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection